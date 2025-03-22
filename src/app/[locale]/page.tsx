'use client';

import { useTranslations } from 'next-intl';
import Section from '@/src/components/Section';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const sections = t.raw('sections') as Array<{
    title: string;
    text: string;
    learnMore: string;
    targetPage: string;
    imageUrl: string;
    imageFirst: boolean;
    isVideo: boolean;
    videoUrl: string;
    isWideText: boolean;
  }>;
  

  return (
    <div className="relative">
      {/* Hero video */}
      <div className="relative h-screen w-full overflow-hidden shadow-md">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Sezioni */}
      <div className="relative z-30 bg-white">
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
    </div>
  );
}
