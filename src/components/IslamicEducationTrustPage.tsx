import { Section, Reveal } from './shared';

export const IslamicEducationTrustPage = () => (
  <>
    <section className="relative min-h-[60vh] flex items-center pt-32 md:pt-24 bg-gradient-to-br from-foundation-light via-foundation-sand to-foundation-primary/5">
      <Section className="relative z-10 flex flex-col justify-center h-full">
        <Reveal stagger={150}>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-foundation-primary" aria-hidden="true"></span>
            <span className="text-foundation-primary font-bold tracking-widest uppercase text-xs">Coalition Partner</span>
          </div>
          <h1 className="ds-heading-1 text-foundation-dark mb-8 max-w-4xl 2xl:max-w-6xl">
            Islamic Education Trust
          </h1>
          <p className="ds-subheading text-foundation-muted mb-6 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            Over five decades of promoting authentic Islamic knowledge and community upliftment across Nigeria.
          </p>
          <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            <p className="ds-body-lg">
              Founded in 1969 by renowned scholars Shaykh Ahmed Lemu and Aisha Lemu, and now led by their children Shaykh Nurudeen Lemu and Maryam Lemu. Based in Minna, Nigeria, IET has played a vital role in strengthening Islamic education, interfaith understanding, and social welfare through schools, publications, and humanitarian initiatives.
            </p>
          </div>
        </Reveal>
      </Section>
    </section>

    <Section className="bg-white">
      <Reveal>
        <div className="mb-16">
          <h2 className="ds-heading-2 text-foundation-dark mb-8">A Legacy of Knowledge and Service</h2>
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <p className="ds-body-lg text-stone-700 mb-6">
              The Islamic Education Trust focuses on promoting authentic Islamic knowledge, training teachers and daʿwah workers, producing educational materials, and supporting community development. Through schools, publications, outreach programmes, and humanitarian initiatives, IET has strengthened Islamic education and interfaith understanding across Nigeria for over five decades.
            </p>
            <p className="ds-body-lg text-stone-700 mb-6">
              Its humanitarian work complements its educational mission by directly supporting vulnerable communities. The Trust provides food assistance to families in need, supports orphans and disadvantaged children through welfare and educational aid, and distributes relief during times of hardship.
            </p>
            <p className="ds-body-lg text-stone-700">
              Through collaboration with local partners, IET implements community development projects that create lasting impact. This balanced approach of knowledge and service continues to positively uplift communities across Nigeria.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 hover:shadow-xl rounded-sm">
            <img
              src="/02_Children_Receiving_Fruits.jpg"
              alt="Children receiving fruits at Islamic Education Trust program"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 hover:shadow-xl rounded-sm">
            <img
              src="/09_Child_Eating_Fruit.png"
              alt="Child enjoying nutritious fruit"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1 rounded-sm">
            <img
              src="/05_Orphanage_Home_Volunteers.jpg"
              alt="Volunteers engaging with children at orphanage home"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </Reveal>
    </Section>

    <Section className="bg-foundation-sand">
      <Reveal>
        <div className="max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto text-center">
          <blockquote className="ds-heading-2 text-foundation-primary mb-8 xl:mb-12 italic">
            &ldquo;A legacy spanning generations, carried forward through scholarship, service, and unwavering commitment to community upliftment.&rdquo;
          </blockquote>
          <p className="ds-body-lg text-stone-600">
            Through our partnership with the Islamic Education Trust, we support an organization with deep roots and proven impact, channeling resources into programs that combine authentic knowledge with compassionate service to transform lives across Nigeria.
          </p>
        </div>
      </Reveal>
    </Section>
  </>
);
