import { Section, Button } from './shared';

export const WaterWellPage = () => (
  <section className="relative min-h-screen flex items-center justify-center py-32 bg-stone-50">
    <Section className="relative z-10">
      <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        <h1 className="ds-heading-1 text-stone-900 mb-6 xl:mb-8">
          Water Well Initiatives
        </h1>

        <p className="ds-subheading text-stone-600 mb-8 xl:mb-12">
          Building sustainable water wells to provide clean drinking water to rural communities.
        </p>

        <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-12 xl:mb-16">
          <p className="ds-body-lg text-stone-700">
            Access to clean water is a fundamental human right. Our water well initiatives bring sustainable water sources to communities that have walked miles for water. Each well serves hundreds of families for generations, transforming health outcomes and freeing time for education and economic opportunity.
          </p>
        </div>

        <Button variant="primary" href="mailto:info@latiffoundation.org?subject=Water%20Well%20Initiatives">
          Support This Initiative
        </Button>
      </div>
    </Section>
  </section>
);
