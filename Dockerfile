# ============================================================================
# Stage 1: Installation des dépendances - Léger et optimisé
# Variables pré-calculées pour meilleur caching
# ============================================================================
FROM node:25-alpine AS deps

# Optimisation: Installer les outils système et créer l'utilisateur app
RUN apk add --no-cache libc6-compat && \
    addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 appuser

WORKDIR /app

# Copier d'abord les fichiers de dépendances (excellente cachabilité)
COPY --chown=appuser:appgroup package*.json ./

# Installer TOUTES les dépendances (nécessaire pour le build)
RUN npm ci && \
    npm cache clean --force

# ============================================================================
# Stage 1b: Installation des dépendances PRODUCTION uniquement
# ============================================================================
FROM deps AS prod-deps

# Prune des devDependencies
RUN npm prune --omit=dev

# ============================================================================
# Stage 2: Build de l'application - Compiler et optimiser
# ============================================================================
FROM node:25-alpine AS builder

# Optimisation: Installer les outils système
RUN apk add --no-cache libc6-compat

WORKDIR /app

# ===== ARGUMENTS DE BUILD - Variables d'environnement publiques =====
# Note: Les variables NEXT_PUBLIC_* sont compilées dans le bundle JavaScript
# et seront visibles côté client (c'est normal et sécurisé)
# Pour le déploiement, passez-les avec: docker build --build-arg NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=***
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
ARG DEBUG=false

# Variables d'environnement pour le build optimal
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_ENV=production \
    NODE_OPTIONS=--max-old-space-size=512 \
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY \
    DEBUG=$DEBUG

# Copier les dépendances depuis le stage précédent (réutilise le cache)
COPY --from=deps /app/node_modules ./node_modules

# Copier le code source (change souvent, doit être en dernier)
COPY . .

# Prune des devDependencies et build Next.js optimisé
RUN npm run build

# ============================================================================
# Stage 3: Image de production finale - Minimale et sécurisée
# ============================================================================
FROM node:25-alpine AS runner

WORKDIR /app

# ===== VARIABLES D'ENVIRONNEMENT RUNTIME =====
# Variables côté serveur (PRIVÉES) - Injectées au runtime
# NE JAMAIS les inclure dans le Dockerfile !
# Les passer via: docker run -e EMAILJS_SERVICE_ID=*** -e EMAILJS_TEMPLATE_ID=*** -e EMAILJS_PRIVATE_KEY=***
#
# Variables spécifiées par l'utilisateur:
#   - EMAILJS_SERVICE_ID: ID du service EmailJS (SECRET)
#   - EMAILJS_TEMPLATE_ID: ID du template EmailJS (SECRET)
#   - EMAILJS_PRIVATE_KEY: Clé privée EmailJS (SECRET)
#   - DEBUG: Mode debug (true/false)
#   - PORT: Port d'écoute (par défaut 3000)

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    NODE_OPTIONS=--max-old-space-size=256 \
    PORT=3000

# Créer l'utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nextjs && \
    adduser --system --uid 1001 nextjs

# Métadonnées OCI - Traçabilité et documentation
LABEL org.opencontainers.image.title="Portfolio - Next.js 16" \
    org.opencontainers.image.description="Portfolio personnel optimisé avec Next.js" \
    org.opencontainers.image.version="0.2.0" \
    org.opencontainers.image.vendor="Jérémy Patapy" \
    org.opencontainers.image.source="https://github.com/your-repo"

# Copier uniquement les fichiers essentiels depuis le builder
# Utilise output: 'standalone' pour une image ultra-légère
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# Changer vers l'utilisateur non-root
USER nextjs

# Port d'écoute
EXPOSE 3000

# Health check pour détecter les problèmes rapidement
# Vérifie toutes les 30s, timeout de 3s, 3 tentatives
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => { if (r.statusCode !== 200) throw new Error(r.statusCode) })" || exit 1

# Démarrer l'application en mode production
CMD ["node", "server.js"]
