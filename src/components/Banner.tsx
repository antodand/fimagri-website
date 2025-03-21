// components/Banner.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface BannerProps {
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return (
    <section className="banner-container w-full h-64 md:h-96 relative">
      <Image
        src={imageUrl}
        alt="Banner Image"
        width={2000}
        height={800}
        layout=""
        objectFit=""
        className="w-full h-full"
      />
    </section>
  );
};

export default Banner;
