import Section from '@/components/Section';

const sections = [
    {
        title: 'Chi siamo',
        text: 'Fimagri associa più di 60 aziende agricole che hanno siti produttivi lungo tutta la piana fertile del Tavoliere delle Puglie, dai terreni leggeri e ricchi di minerali adiacenti ai laghi di Lesina e Varano, a quelli fertili a valle del subappenino dauno. La nostra ricchezza è proprio questo territorio che vanta condizioni',
        imageUrl: '/images/home/fimagri20.jpg',
        imageFirst: false,
    },
    {
        title: 'Chi siamo',
        text: 'Fimagri associa più di 60 aziende agricole che hanno siti produttivi lungo tutta la piana fertile del Tavoliere delle Puglie, dai terreni leggeri e ricchi di minerali adiacenti ai laghi di Lesina e Varano, a quelli fertili a valle del subappenino dauno. La nostra ricchezza è proprio questo territorio che vanta condizioni',
        imageUrl: '/images/home/fimagri20.jpg',
        imageFirst: false,
    },
];

export default function AboutPage() {
    return (
        <div>
            <div className="m-8 flex justify-center text-center">
                <h1 className="text-4xl font-extrabold text-lime-500">{('title')}</h1>
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
