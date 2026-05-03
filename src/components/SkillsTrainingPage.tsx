import { Section, Button } from './shared';

export const SkillsTrainingPage = () => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 mb-6 leading-tight">
          Skills and Vocational Training
        </h1>

        <p className="text-xl md:text-2xl text-stone-600 mb-8 font-light">
          Equipping young people with practical skills to build dignified, self sufficient livelihoods.
        </p>

        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            Sustainable change comes through empowerment. Our vocational training programs teach marketable skills in trades, technology, and entrepreneurship, providing young people with the tools to support themselves and their families. From tailoring to carpentry, from computer literacy to business management, we invest in capability and confidence.
          </p>
        </div>

        <Button variant="primary" href="mailto:info@latiffoundation.org?subject=Skills%20and%20Vocational%20Training">
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
