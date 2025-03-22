'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/src/i18n/navigation';
import parse from 'html-react-parser';
import ClientOnly from './ClientOnly';

interface SectionProps {
    title: string;
    text: string; // HTML string
    learnMore: string;
    targetPage: string;
    imageUrl: string;
    imageFirst: boolean;
    isVideo: boolean;
    videoUrl: string;
    isWideText: boolean;
}

const Section: React.FC<SectionProps> = ({
    title,
    text,
    learnMore,
    targetPage,
    imageUrl,
    imageFirst,
    isVideo,
    videoUrl,
    isWideText = false
}) => {
    // Classi Tailwind esplicite per evitare problemi con purge
    const textWidthClass = isWideText ? 'md:w-2/3' : 'md:w-1/2';
    const mediaWidthClass = isWideText ? 'md:w-1/3' : 'md:w-1/2';

    return (
        <section className="section-container flex flex-col md:flex-row items-center my-32">
            {imageFirst ? (
                <>
                    {/* Media (Video o Immagine) */}
                    <div className={`section-media ${mediaWidthClass} pr-8 py-8`}>
                        {isVideo ? (
                            <video
                                src={videoUrl || imageUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full rounded-r-xl shadow-md"
                            />
                        ) : (
                            <Image
                                src={imageUrl}
                                alt={title}
                                width={500}
                                height={300}
                                layout="responsive"
                                className="w-full rounded-r-xl shadow-md"
                            />
                        )}
                    </div>

                    {/* Testo */}
                    <div className={`section-content ${textWidthClass} px-16`}>
                        <h2 className="text-2xl font-bold text-lime-600">{title}</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <ClientOnly>{parse(text)}</ClientOnly>
                            {learnMore && (
                                <Link href={`/${targetPage}`} className="font-bold text-lime-600">
                                    {learnMore}
                                </Link>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Testo */}
                    <div className={`section-content ${textWidthClass} px-16`}>
                        <h2 className="text-2xl font-bold text-lime-600">{title}</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <ClientOnly>{parse(text)}</ClientOnly>
                            {learnMore && (
                                <Link href={`/${targetPage}`} className="font-bold text-lime-600">
                                    {learnMore}
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Media */}
                    <div className={`section-media ${mediaWidthClass} pl-8 py-8`}>
                        {isVideo ? (
                            <video
                                src={videoUrl || imageUrl}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full rounded-l-xl shadow-md"
                            />
                        ) : (
                            <Image
                                src={imageUrl}
                                alt={title}
                                width={500}
                                height={300}
                                layout="responsive"
                                className="w-full rounded-l-xl shadow-md"
                            />
                        )}
                    </div>
                </>
            )}
        </section>
    );
};

export default Section;
