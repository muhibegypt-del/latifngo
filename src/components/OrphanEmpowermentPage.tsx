import { Section, Button } from './shared';

export const OrphanEmpowermentPage = () => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-tight">
          Orphan Empowerment Projects
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-8 font-light">
          Holistic support for orphaned children, covering welfare, mentorship, and long term care.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Every child deserves stability, care, and the chance to thrive. Our orphan empowerment programs provide comprehensive support, from daily necessities and education to emotional guidance and mentorship. We walk alongside these children throughout their journey, ensuring they grow with dignity, confidence, and opportunity.
          </p>
        </div>

        <Button variant="primary" href="mailto:info@latiffoundation.org?subject=Orphan%20Empowerment%20Projects">
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
