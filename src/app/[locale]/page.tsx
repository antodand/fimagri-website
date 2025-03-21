import { useTranslations } from 'next-intl';
import Section from '@/src/components/Section';

export default function HomePage() {
    const t = useTranslations('HomePage');

    const sections = t.raw('sections') as Array<{
        title: string;
        text: string;
        learnMore: string
        imageUrl: string;
        imageFirst: boolean;
    }>;
    return (
        <div className='relative'>
            {/* Hero Video */}
            <div className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                />
            </div>


            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    text={section.text}
                    learnMore={section.learnMore}
                    imageUrl={section.imageUrl}
                    imageFirst={section.imageFirst}
                />
            ))}
        </div>
    );
}