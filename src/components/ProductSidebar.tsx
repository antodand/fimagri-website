'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  iconUrl: string;
};

export default function ProductSidebar() {
  const t = useTranslations('Products');
  const products = t.raw('items') as Array<Product>;

  return (
    <aside className="hidden md:flex fixed top-24 left-0 z-40 flex-col gap-4">
      {products.map((product) => (
        <a
          key={product.id}
          href={`#${product.id}`}
          className="group relative w-12 hover:w-48 transition-all duration-300 bg-lime-600 text-white rounded-r-xl overflow-hidden shadow-lg"
        >
          <div className="flex items-center h-12 px-3">
            <Image
              src={product.iconUrl}
              alt={`Icona ${product.name}`}
              width={24}
              height={24}
              className="min-w-[24px] min-h-[24px] mr-2"
            />
            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.name}
            </span>
          </div>
        </a>
      ))}
    </aside>
  );
}
