"use client";

import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/navigation';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Logo from '@/public/images/logo.png';

import LocaleSwitcher from '@/src/components/LocaleSwitcher';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const t = useTranslations('Header');

  return (
    <nav className="bg-white-100 p-4 mx-8 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src={Logo} alt="Fimagri" width="50" />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-lime-600">{t("about")}</Link>
          <Link href="/products" className="hover:text-lime-600">Products</Link>
          <Link href="/quality" className="hover:text-lime-600">Quality</Link>
          <LocaleSwitcher />
        </div>

        {/* Bottone per il menu mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
