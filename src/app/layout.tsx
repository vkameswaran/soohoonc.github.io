import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { FileSystemProvider, ThemeProvider } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Soohoon Choi',
  description: "Soohoon's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className={inter.className}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <FileSystemProvider>
              {children}
            </FileSystemProvider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
