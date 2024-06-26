import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'soohoonchoi',
  description: 'soohoonchoi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <main className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
