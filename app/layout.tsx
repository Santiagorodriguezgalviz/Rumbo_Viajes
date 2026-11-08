import type { Metadata } from 'next';
import { PreferenciasProvider } from '@/components/site/PreferenciasProvider';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SiteHeader } from '@/components/site/SiteHeader';
import { WhatsAppFloat } from '@/components/site/WhatsAppFloat';
import { SITE } from '@/lib/site';
import { TEMA_KEY } from '@/lib/preferencias';
import { Inter, Fraunces } from 'next/font/google';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['600'],
});

const scriptTema = `try{var t=localStorage.getItem('${TEMA_KEY}');if(t==='oscuro'||t==='azul'){document.documentElement.dataset.tema=t}}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Paquetes turísticos desde Colombia`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  openGraph: {
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptTema }} />
      </head>
      <body className="font-sans">
        <PreferenciasProvider>
          <SiteHeader />
          <div id="contenido">{children}</div>
          <SiteFooter />
          <WhatsAppFloat />
        </PreferenciasProvider>
      </body>
    </html>
  );
}
