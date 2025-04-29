export const dynamic = 'force-dynamic';

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter, Kulim_Park, Caveat } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from "next-intl/server";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kulim = Kulim_Park({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kulim",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"], // or just '400' if you only need one
  variable: "--font-caveat",
});

const gotham = localFont({
  src: [
    { path: "../styles/gotham-light.otf", weight: "200", style: "normal" },
    { path: "../styles/gotham-regular.otf", weight: "400", style: "normal" },
    { path: "../styles/gotham-bold.otf", weight: "600", style: "normal" },
  ],
});

const bauerbodni = localFont({
  src: "../styles/bauerbodni.otf",
  variable: "--font-bauerbodni",
});

export const metadata: Metadata = {
  title: "Kuta MX | Mi raza favorita, es adoptada",
  description:
    "KutaMX es una organización sin fines de lucro que busca promover la adopción de perros y gatos en México.",
};

const buildId = "b052424.1";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      data-build-id={buildId}
      className={`${inter.variable} ${kulim.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="font-inter">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        </body>
    </html>
  );
}
