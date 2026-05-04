import { Section, Reveal } from './shared';

export const EbdurahmanFoundationPage = () => (
  <>
    <section className="relative min-h-[60vh] flex items-center pt-32 md:pt-24 bg-gradient-to-br from-foundation-light via-foundation-sand to-foundation-primary/5">
      <Section className="relative z-10 flex flex-col justify-center h-full">
        <Reveal stagger={150}>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-foundation-primary" aria-hidden="true"></span>
            <span className="text-foundation-primary font-bold tracking-widest uppercase text-xs">Coalition Partner</span>
          </div>
          <h1 className="ds-heading-1 text-foundation-dark mb-8 max-w-4xl 2xl:max-w-6xl">
            Ebadur Rahman Foundation Skills and Learning Center
          </h1>
          <p className="ds-subheading text-foundation-muted mb-6 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            Equipping orphans and vulnerable youth with skills for independence and dignity.
          </p>
          <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            <p className="ds-body-lg">
              A community focused traineeship and empowerment centre in Kano, Nigeria, founded by Hajiya Batulu Bashir Ahmad Galadanci, daughter of the Grand Qadi of Kano. Rather than short term aid, the centre provides meaningful, long term empowerment through vocational training and enterprise development.
            </p>
          </div>
        </Reveal>
      </Section>
    </section>

    <Section className="bg-white">
      <Reveal>
        <div className="mb-16">
          <h2 className="ds-heading-2 text-foundation-dark mb-8">Empowerment Through Skills and Enterprise</h2>
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <p className="ds-body-lg text-stone-700 mb-6">
              The centre offers comprehensive vocational and educational programs designed to equip young people with practical skills that enable them to become independent and self sustaining. Programs include English language courses, ICT and computer skills training, and hands on instruction in trades such as tailoring and shoemaking.
            </p>
            <p className="ds-body-lg text-stone-700 mb-6">
              These trainings prepare students not just for employment, but to establish their own businesses and livelihoods. Upon completion, graduates receive crucial start up support, including tools, equipment, and financial assistance to launch their ventures.
            </p>
            <p className="ds-body-lg text-stone-700">
              Through this holistic approach combining education, skills training, and enterprise development, the Ebadur Rahman Foundation Skills and Learning Center works to break cycles of dependency and empower young people to sustain themselves with dignity and confidence.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 hover:shadow-xl rounded-sm">
            <img
              src="/WhatsApp_Image_2026-02-16_at_10.44.21_PM.jpeg"
              alt="Students at Ebadur Rahman Foundation graduation ceremony"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 hover:shadow-xl rounded-sm">
            <img
              src="/WhatsApp_Image_2026-02-16_at_10.44.21_PM_(1).jpeg"
              alt="Vocational training equipment and supplies at graduation"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] border border-stone-200 hover:border-foundation-primary/20 transition-all duration-300 hover:shadow-xl md:col-span-2 lg:col-span-1 rounded-sm">
            <img
              src="/WhatsApp_Image_2026-02-16_at_10.44.18_PM.jpeg"
              alt="Graduates receiving vocational training equipment"
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
            &ldquo;True empowerment means breaking cycles of dependency and building capacity for independence.&rdquo;
          </blockquote>
          <p className="ds-body-lg text-stone-600">
            Through our partnership with the Ebadur Rahman Foundation Skills and Learning Center, we invest in the next generation, ensuring orphans and vulnerable youth have the skills, tools, and support they need to build dignified, self sustaining lives.
          </p>
        </div>
      </Reveal>
    </Section>
  </>
);
