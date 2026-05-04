import { Section, Button } from './shared';

export const SustainableDevelopmentPage = () => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        <h1 className="ds-heading-1 text-stone-900 mb-6 xl:mb-8">
          Long Term Sustainable Development
        </h1>

        <p className="ds-subheading text-stone-600 mb-8 xl:mb-12">
          Strategic investments in community infrastructure that create lasting, generational change.
        </p>

        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-12 xl:mb-16">
          <p className="ds-body-lg text-stone-700">
            True development transforms entire communities for generations. Our sustainable development initiatives focus on infrastructure, economic systems, and capacity building that create lasting impact. From healthcare facilities to agricultural programs, from community centers to cooperative enterprises, we invest in foundations that endure.
          </p>
        </div>

        <Button variant="primary" href="mailto:info@latiffoundation.org?subject=Long%20Term%20Sustainable%20Development">
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
