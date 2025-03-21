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
    imageUrl: string;
    imageFirst?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, text, learnMore, imageUrl, imageFirst = false }) => {
    return (
        <section className="section-container flex flex-col md:flex-row items-center my-32">
            {imageFirst ? (
                <>
                    <div className="section-image md:w-1/2 pr-8 py-8">
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="w-full rounded-r-xl"
                        />
                    </div>
                    <div className="section-content md:w-1/2 px-16">
                        <h2 className="text-2xl font-bold text-lime-500">{title}</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <ClientOnly>
                                {parse(text)} {/* 👈 HTML parsed in sicurezza */}
                            </ClientOnly>
                            <Link href="/about" className="font-bold text-lime-500">{learnMore}</Link>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="section-content md:w-1/2 px-16">
                        <h2 className="text-2xl font-bold text-lime-500">{title}</h2>
                        <div className="mt-4 space-y-4 text-gray-700">
                            <ClientOnly>
                                {parse(text)} {/* 👈 HTML parsed in sicurezza */}
                            </ClientOnly>
                            <Link href="/about" className="font-bold text-lime-500">{learnMore}</Link>
                        </div>
                    </div>
                    <div className="section-image md:w-1/2 pl-8 py-8">
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="w-full rounded-l-xl"
                        />
                    </div>
                </>
            )}
        </section>
    );
};

export default Section;


/* prima di react-html-parser
'use client';

import React from 'react';
import Image from 'next/image';

interface SectionProps {
    title: string;
    text: string;
    imageUrl: string;
    imageFirst?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, text, imageUrl, imageFirst = false }) => {

    return (
        <section className="section-container flex flex-col md:flex-row items-center my-32">
            {imageFirst ? (
                <>
                    <div className="section-image md:w-1/2 pr-8 py-8">
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="w-full rounded-r-xl"
                        />
                    </div>
                    <div className="section-content md:w-1/2 px-16">
                        <h2 className="text-2xl font-bold text-lime-500">{title}</h2>
                        <div className="mt-4">
                            {text}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="section-content md:w-1/2 px-16">
                        <h2 className="text-2xl font-bold text-lime-500">{title}</h2>
                        <div className="mt-4">
                            {text}
                        </div>
                    </div>
                    <div className="section-image md:w-1/2 pl-8 py-8">
                        <Image
                            src={imageUrl}
                            alt={title}
                            width={500}
                            height={300}
                            layout="responsive"
                            className="w-full rounded-l-xl"
                        />
                    </div>
                </>
            )}
        </section>
    );
};

export default Section;
*/