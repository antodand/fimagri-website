import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { cookies } from 'next/headers'; // Per ottenere la lingua corrente dai cookie
import './globals.css';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}