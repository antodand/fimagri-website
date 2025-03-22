'use client';

import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import Section from './Section';
import ClientOnly from './ClientOnly';

interface ProductSectionProps {
    id: string;
    name: string;
    bannerImage: string;
    introText: string; // HTML string
    videoUrl?: string;
    sections: Array<{
        title: string;
        text: string;
        imageUrl: string;
        imageFirst: boolean;
        isWideText?: boolean;
    }>;
}

const ProductSection: React.FC<ProductSectionProps> = ({
    id,
    name,
    bannerImage,
    introText,
    videoUrl,
    sections,
}) => {
    return (
        <section id={id} className="my-24">
            {/* Banner */}
            <div className="w-full h-128 relative overflow-hidden shadow-md mb-8">
                <Image
                    src={bannerImage}
                    alt={`Banner ${name}`}
                    layout="fill"
                    objectFit="cover"
                    className=""
                />
            </div>

            {/* Titolo e intro */}
            {/*
      <div className="px-8 md:px-16 mb-8">
        <h2 className="text-3xl font-bold text-lime-600 mb-4">{name}</h2>
        <div className="text-gray-700 space-y-4">
          <ClientOnly>{parse(introText)}</ClientOnly>
        </div>
      </div>
      */}

            {/* Sezioni descrittive */}
            {sections.map((section, index) => (
                <div key={index} className="[&>section]:my-12"> {/* margine verticale ridotto (override tailwind)*/}
                    <Section
                        key={index}
                        title={section.title}
                        text={section.text}
                        learnMore={''}
                        targetPage={''}
                        imageUrl={section.imageUrl}
                        imageFirst={section.imageFirst}
                        isVideo={false}
                        videoUrl={''}
                        isWideText={section.isWideText ?? false}
                    />
                </div>
            ))}


            {/* Video opzionale */}
            {videoUrl && (
                <div className="w-full px-8 md:px-16 mb-12">
                    <video
                        src={videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full rounded-xl shadow-md"
                    />
                </div>
            )}
        </section>
    );
};

export default ProductSection;
