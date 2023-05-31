import Header from '@/components/Layout/Header';
import './globals.css';
import Footer from '@/components/Layout/Footer';

export const metadata = {
    title: 'Totel',
    description: 'Totel description here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-inter text-sm font-normal text-black antialiased">
                <Header />
                <main className="mt-10">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
