import { Section, Reveal } from './shared';

export const BaitulKhairPage = () => (
  <>
    <section className="relative min-h-[60vh] flex items-center pt-32 md:pt-24 bg-gradient-to-br from-foundation-light via-foundation-sand to-foundation-primary/5">
      <Section className="relative z-10 flex flex-col justify-center h-full">
        <Reveal stagger={150}>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-foundation-primary" aria-hidden="true"></span>
            <span className="text-foundation-primary font-bold tracking-widest uppercase text-xs">Coalition Partner</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foundation-dark mb-8 max-w-4xl leading-tight">
            Baitul Khair Foundation
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-foundation-muted mb-6 max-w-3xl leading-relaxed">
            From a kitchen in Kano to 10 feeding points serving thousands across Northern Nigeria.
          </p>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              Founded by two sisters, Hadiza Muhammad and Sadiya Muhammad, who began by personally preparing and distributing meals from their own kitchen. What started as a simple act of service has grown into a trusted grassroots humanitarian initiative serving communities across Kano, Kaduna, and Zaria.
            </p>
          </div>
        </Reveal>
      </Section>
    </section>

    <Section className="bg-white">
      <Reveal>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foundation-dark mb-8 tracking-tight">A Story of Sincerity and Growth</h2>
          <div className="max-w-4xl">
            <p className="text-stone-700 leading-loose text-lg mb-6">
              The Baitul Khair Foundation began with a simple but powerful intention: to serve their community during Ramadan. What started as personally preparing and distributing meals for neighbours and those in need quickly grew as more people became aware of their sincerity, dedication, and impact.
            </p>
            <p className="text-stone-700 leading-loose text-lg mb-6">
              Today, the foundation operates 10 feeding points across Kano, Kaduna, and Zaria, providing daily Ramadan meals to thousands of fasting individuals. Through volunteer support and community contributions, Baitul Khair Foundation continues to embody the spirit of compassion and service.
            </p>
            <p className="text-stone-700 leading-loose text-lg">
              Beyond Ramadan feeding, the foundation supports water projects and empowerment schemes, addressing both immediate needs and long term sustainability. Through these initiatives, Baitul Khair Foundation helps individuals and families build more stable and dignified lives.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] flex items-center justify-center border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-stone-900/5"></div>
            <span className="relative z-10 text-stone-400 font-medium text-sm tracking-widest uppercase">Image Placeholder</span>
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] flex items-center justify-center border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 to-stone-900/5"></div>
            <span className="relative z-10 text-stone-400 font-medium text-sm tracking-widest uppercase">Image Placeholder</span>
          </div>

          <div className="group relative overflow-hidden bg-stone-100 aspect-[4/3] flex items-center justify-center border border-stone-200 hover:border-foundation-primary/20 transition-[border-color,box-shadow] duration-300 rounded-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 to-teal-900/5"></div>
            <span className="relative z-10 text-stone-400 font-medium text-sm tracking-widest uppercase">Image Placeholder</span>
          </div>
        </div>
      </Reveal>
    </Section>

    <Section className="bg-foundation-sand">
      <Reveal>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif text-foundation-primary leading-snug mb-8 italic">
            &ldquo;Small acts of sincerity can grow into initiatives that nourish entire communities.&rdquo;
          </blockquote>
          <p className="text-stone-600 text-lg leading-relaxed">
            Through our partnership with Baitul Khair Foundation, we amplify the power of grassroots compassion, ensuring that relief reaches those who need it most with dignity, transparency, and lasting impact.
          </p>
        </div>
      </Reveal>
    </Section>
  </>
);
