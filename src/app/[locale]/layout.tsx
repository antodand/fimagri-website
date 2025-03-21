import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/src/i18n/routing';

import { Header } from '../../components/Header';
import { Footer } from '@/src/components/Footer';
import '../globals.css';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}</NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
