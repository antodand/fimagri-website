'use client';

import { useParams } from 'next/navigation';
import { Locale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { useTransition } from 'react';
import clsx from 'clsx';

type Props = {
  currentLocale: Locale;
};

export default function LocaleSwitcherButtons({ currentLocale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const locales: { code: Locale; flag: string }[] = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'it', flag: '🇮🇹' },
  ];

  function handleLocaleChange(nextLocale: Locale) {
    if (nextLocale === currentLocale) return;

    startTransition(() => {
      router.replace(
        {
          pathname,
          query: params,
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className="flex space-x-2">
      {locales.map(({ code, flag }) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code)}
          className={clsx(
            'text-lg', // bandiera più piccola
            'transition-opacity duration-200',
            isPending && 'pointer-events-none',
            currentLocale === code ? 'opacity-100' : 'opacity-50'
          )}
          title={code.toUpperCase()}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
