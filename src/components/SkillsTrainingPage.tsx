import { Section, Button } from './shared';

export const SkillsTrainingPage = () => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        <h1 className="ds-heading-1 text-stone-900 mb-6 xl:mb-8">
          Skills and Vocational Training
        </h1>

        <p className="ds-subheading text-stone-600 mb-8 xl:mb-12">
          Equipping young people with practical skills to build dignified, self sufficient livelihoods.
        </p>

        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-12 xl:mb-16">
          <p className="ds-body-lg text-stone-700">
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
