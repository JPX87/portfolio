import { NextRequest, NextResponse } from 'next/server';

// Flag pour activer les logs détaillés (DEBUG=true dans .env.local)
const DEBUG = process.env.DEBUG === 'true';

// Fonction helper pour les logs conditionnels
const log = (message: string, data?: unknown) => {
    if (DEBUG) {
        console.log(message, data || '');
    }
};

const logError = (message: string, data?: unknown) => {
    console.error(message, data || '');
};

const logSuccess = (message: string) => {
    console.log('✅', message);
};

/**
 * Validation simple de l'email
 * Utilise une expression régulière basique
 */
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Sanitization basique pour éviter les injections
 * - Supprime les espaces avant/après
 * - Limite la longueur à 500 caractères
 */
const sanitizeInput = (input: string): string => {
    return input.trim().slice(0, 500);
};

/**
 * POST /api/email
 * Route sécurisée pour l'envoi d'emails via EmailJS
 * Les clés sont protégées côté serveur (variables d'environnement)
 */
export async function POST(req: NextRequest) {
    // Validation de la méthode HTTP
    if (req.method !== 'POST') {
        return NextResponse.json(
            { error: 'Method not allowed' },
            { status: 405 }
        );
    }

    try {
        // Récupération et déstructuration des données du corps de la requête
        log('📥 Requête reçue...');
        const { user_name, user_nickname, user_email, user_object, message } = await req.json();
        log('📦 Données reçues:', {
            user_name,
            user_nickname,
            user_email,
            user_object,
            messageLength: message?.length,
        });

        // ===== VALIDATION DES CHAMPS REQUIS =====
        if (!user_name || !user_nickname || !user_email || !user_object || !message) {
            log('⚠️ Champs manquants');
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        // ===== VALIDATION DE L'EMAIL =====
        if (!isValidEmail(user_email)) {
            log('⚠️ Email invalide:', user_email);
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        // ===== SANITIZATION DES ENTRÉES =====
        const sanitizedData = {
            user_name: sanitizeInput(user_name),
            user_nickname: sanitizeInput(user_nickname),
            user_email: sanitizeInput(user_email),
            user_object: sanitizeInput(user_object),
            message: sanitizeInput(message),
        };

        // ===== VÉRIFICATION DES VARIABLES D'ENVIRONNEMENT =====
        const serviceId = process.env.EMAILJS_SERVICE_ID;
        const templateId = process.env.EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        const privateKey = process.env.EMAILJS_PRIVATE_KEY;


        if (!serviceId || !templateId || !publicKey) {
            logError('🔴 Variables d\'environnement EmailJS manquantes', {
                serviceId: !!serviceId,
                templateId: !!templateId,
                publicKey: !!publicKey,
            });
            return NextResponse.json(
                { error: 'Erreur de configuration serveur' },
                { status: 500 }
            );
        }

        // ===== APPEL À L'API EMAILJS (CÔTÉ SERVEUR - SÉCURISÉ) =====
        log('📧 Envoi d\'email via EmailJS...');
        log('🔑 Config utilisée:', {
            serviceIdPrefix: serviceId?.substring(0, 5) + '***',
            templateIdPrefix: templateId?.substring(0, 5) + '***',
            publicKeyPrefix: publicKey?.substring(0, 5) + '***',
        });

        const emailJsPayload = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            accessToken: privateKey,
            template_params: sanitizedData,
        };

        log('📤 Payload JSON complet:', JSON.stringify(emailJsPayload, null, 2));

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailJsPayload),
        });

        log('📡 Réponse EmailJS status:', response.status);

        const responseText = await response.text();
        log('📡 Réponse EmailJS body:', responseText);

        if (!response.ok) {
            try {
                const errorData = JSON.parse(responseText);
                logError('🔴 Erreur EmailJS JSON:', errorData);
            } catch {
                logError('🔴 Erreur EmailJS (texte):', responseText);
            }
            return NextResponse.json(
                { error: 'Impossible d\'envoyer le message' },
                { status: 500 }
            );
        }

        logSuccess('Email envoyé avec succès');
        return NextResponse.json(
            { success: true, message: 'Message envoyer avec succés' },
            { status: 200 }
        );

    } catch (error) {
        logError('🔴 Erreur lors de l\'envoi du message:', error);
        return NextResponse.json(
            { error: 'Impossible d\'envoyer le message' },
            { status: 500 }
        );
    }
}
