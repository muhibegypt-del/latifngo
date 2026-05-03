import { Section, Button } from './shared';

interface EducationalSponsorshipsPageProps {
  navigateTo: (view: string) => void;
}

export const EducationalSponsorshipsPage = ({ navigateTo }: EducationalSponsorshipsPageProps) => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-tight">
          Educational Sponsorships
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-8 font-light">
          Funding scholarships and learning resources for students who lack access to quality education.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Education unlocks potential and breaks cycles of poverty. Our sponsorship programs provide complete support for students, from school fees and materials to uniforms and meals, ensuring nothing stands between a child and their education. Every sponsorship is an investment in a brighter future.
          </p>
        </div>

        <Button variant="primary" onClick={() => navigateTo('ramadan')}>
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
