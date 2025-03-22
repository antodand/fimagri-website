'use client';

import Section from '@/src/components/Section';
import { useTranslations } from 'next-intl';
import { Header } from '@/src/components/Header';

export default function AboutPage() {
  const t = useTranslations('About');

  const sections = t.raw('sections') as Array<{
    title: string;
    text: string; // HTML string
    learnMore: string;
    targetPage: string;
    imageUrl: string;
    imageFirst: boolean;
    isVideo: boolean;
    videoUrl: string;
    isWideText: boolean;
  }>;

  return (
    <div>      
      <div className="m-8 flex justify-center text-center pt-20">
        <h1 className="text-4xl font-extrabold text-lime-600">{t('title')}</h1>
      </div>

      {sections.map((section, index) => (
        <Section
        key={index}
        title={section.title}
        text={section.text}
        learnMore={section.learnMore || ''}
        targetPage={section.targetPage}
        imageUrl={section.imageUrl}
        imageFirst={section.imageFirst}
        isVideo={section.isVideo ?? false}
        videoUrl={section.videoUrl || ''}
        isWideText={section.isWideText ?? false}
    />
      ))}
    </div>
  );
}
