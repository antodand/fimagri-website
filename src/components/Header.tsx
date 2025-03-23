'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/src/i18n/navigation';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import LocaleSwitcher from '@/src/components/LocaleSwitcher';
import { useTranslations } from 'next-intl';

export function Header() {
  const [isTransparent, setIsTransparent] = useState(true);
  const pathname = usePathname();
  const t = useTranslations('Header');

  const isHome = pathname === '/' || pathname === '/it' || pathname === '/en'; // adatta se hai altre lingue

  useEffect(() => {
    if (!isHome) {
      setIsTransparent(false); // su tutte le altre pagine, header opaco
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsTransparent(scrollY < heroHeight - 50); // soglia per il cambio
    };

    handleScroll(); // trigger iniziale per carichi non in cima

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const baseClasses =
    'fixed top-0 left-0 right-0 z-50 p-4 px-8 shadow-md transition-all duration-300';

  const transparentStyle = 'bg-white/50 backdrop-blur-md';
  const solidStyle = 'bg-white';

  return (
    <nav className={`${baseClasses} ${isTransparent ? transparentStyle : solidStyle}`}>
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src={Logo} alt="Fimagri" width="50" />
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="font-semibold text-gray-700 hover:text-lime-600">{t('about')}</Link>
          <Link href="/products" className="font-semibold text-gray-700 hover:text-lime-600">{t('products')}</Link>
          <Link href="/quality" className="font-semibold text-gray-700 hover:text-lime-600">{t('quality')}</Link>
          <LocaleSwitcher />
        </div>

        <div className="md:hidden flex items-center">
          <button className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
