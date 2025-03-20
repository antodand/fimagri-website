import Link from 'next/link'
import Image from 'next/image';
// import Hero from '@/public/videos/hero.mp4';
import Section from '@/components/Section';

const sections = [
    {
        title: 'Chi siamo',
        text: 'Fimagri associa più di 60 aziende agricole che hanno siti produttivi lungo tutta la piana fertile del Tavoliere delle Puglie, dai terreni leggeri e ricchi di minerali adiacenti ai laghi di Lesina e Varano, a quelli fertili a valle del subappenino dauno. La nostra ricchezza è proprio questo territorio che vanta condizioni pedo-climatiche uniche per la coltivazione di ortaggi.',
        imageUrl: '/images/home/fimagri20.jpg',
        imageFirst: false,
    },
    {
        title: 'Qualità',
        text: 'Tutti i soci di Fimagri sono accomunati da: Passione per il lavoro agricolo Forte legame con il territorio Esperienza e competenza specifica Continua ricerca tecnica e innovazione Questi elementi permettono a Fimagri di offrire prodotti ottenuti secondo le migliori pratiche agricole eseguite nel rispetto dei principi etici, ambientali e della sicurezza alimentare.',
        imageUrl: '/images/home/fimagri41.jpg',
        imageFirst: true,
    },
];

export default function Page() {
    return (
        <div>

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
    )
}