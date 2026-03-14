import type { Metadata, Viewport } from "next";
import { Akaya_Kanadaka, Annie_Use_Your_Telescope, Shantell_Sans, Rampart_One, Poppins } from "next/font/google";
import '@/scss/globals.scss'

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import AnimatedRoutes from "../components/AnnimatedRoutes";

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-akaya-kanadaka",
});

const annieUseYourTelescope = Annie_Use_Your_Telescope({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-annie-use-your-telescope",
});

const shantellSans = Shantell_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-shantell-sans",
});

const rampartOne = Rampart_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rampart-one",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Jérémy Patapy - Portfolio",
  description: "Portfolio de Jérémy Patapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${akayaKanadaka.variable} ${annieUseYourTelescope.variable} ${shantellSans.variable} ${rampartOne.variable} ${poppins.variable}`}
      >
        <Menu />
        {/*<AnimatedRoutes>{children}</AnimatedRoutes>*/}
        {children}
        <Footer />
      </body>
    </html>
  );
}
