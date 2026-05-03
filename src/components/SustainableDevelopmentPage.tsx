import { Section, Button } from './shared';

interface SustainableDevelopmentPageProps {
  navigateTo: (view: string) => void;
}

export const SustainableDevelopmentPage = ({ navigateTo }: SustainableDevelopmentPageProps) => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-tight">
          Long Term Sustainable Development
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-8 font-light">
          Strategic investments in community infrastructure that create lasting, generational change.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            True development transforms entire communities for generations. Our sustainable development initiatives focus on infrastructure, economic systems, and capacity building that create lasting impact. From healthcare facilities to agricultural programs, from community centers to cooperative enterprises, we invest in foundations that endure.
          </p>
        </div>

        <Button variant="primary" onClick={() => navigateTo('ramadan')}>
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
