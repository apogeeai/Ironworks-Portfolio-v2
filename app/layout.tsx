import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ironworksinteractive.com'),
  title: {
    default: 'IronWorks Interactive | Full Stack Development & UI/UX Design',
    template: '%s | IronWorks Interactive'
  },
  description: 'Expert full-stack developer and UI/UX designer specializing in React, Next.js, TypeScript, and modern web technologies. Creating cutting-edge digital solutions and engaging user experiences.',
  keywords: [
    'Full Stack Developer',
    'UI/UX Designer',
    'React Developer',
    'Next.js Expert',
    'TypeScript Developer',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'JavaScript Developer',
    'Software Engineer'
  ],
  authors: [{ name: 'IronWorks Interactive' }],
  creator: 'IronWorks Interactive',
  publisher: 'IronWorks Interactive',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'manifest', url: '/site.webmanifest' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ironworksinteractive.com',
    title: 'IronWorks Interactive | Full Stack Development & UI/UX Design',
    description: 'Expert full-stack developer and UI/UX designer specializing in React, Next.js, TypeScript, and modern web technologies.',
    siteName: 'IronWorks Interactive',
    images: [{
      url: '/thumbnails/Moden-Marketing-Dashboard.png',
      width: 1200,
      height: 630,
      alt: 'IronWorks Interactive Portfolio'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IronWorks Interactive | Full Stack Development & UI/UX Design',
    description: 'Expert full-stack developer and UI/UX designer specializing in React, Next.js, TypeScript, and modern web technologies.',
    images: ['/thumbnails/Moden-Marketing-Dashboard.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-[#f8f9fa] overflow-x-hidden")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}