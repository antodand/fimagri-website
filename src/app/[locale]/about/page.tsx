import Section from '@/src/components/Section';
import {useTranslations} from 'next-intl';

export default function AboutPage() {
    const t = useTranslations('About');

    const sections = t.raw('sections') as Array<{
        title: string;
        text: string;
        imageUrl: string;
        imageFirst: boolean;
    }>;

    return (
        <div>
            <div className="m-8 flex justify-center text-center">
                <h1 className="text-4xl font-extrabold text-lime-500">{t('title')}</h1>
            </div>

            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    text={section.text}
                    imageUrl={section.imageUrl}
                    imageFirst={section.imageFirst}
                />
            ))}

        </div>
    );
}
