'use client';

import { useTranslations } from 'next-intl';
import ProductSection from '@/src/components/ProductSection';
import ProductSidebar from '@/src/components/ProductSidebar';


type ProductData = {
  id: string;
  name: string;
  bannerImage: string;
  introText: string;
  videoUrl?: string;
  sections: Array<{
    title: string;
    text: string;
    imageUrl: string;
    imageFirst: boolean;
    isWideText?: boolean;
  }>;
};

export default function ProductsPage() {
  const t = useTranslations('Products');

  const products = t.raw('items') as ProductData[];

  return (
    <div className="relative z-20 bg-white">
      <ProductSidebar />

      <div className="m-8 flex justify-center text-center pt-20">
        <h1 className="text-4xl font-extrabold text-lime-600">{t('title')}</h1>
      </div>

      {products.map((product) => (
        <ProductSection
          key={product.id}
          id={product.id}
          name={product.name}
          bannerImage={product.bannerImage}
          introText={product.introText}
          videoUrl={product.videoUrl}
          sections={product.sections}
        />
      ))}
    </div>
  );
}
