import { Droplets, BookOpen, Wrench, Users, Sprout, ArrowUpRight } from 'lucide-react';
import { Reveal, Section, Button } from './shared';

interface HomePageProps {
  navigateTo: (view: string) => void;
}

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
};

const PARTNERS = [
  {
    name: "Islamic Education Trust",
    description: "Founded in 1969 by Shaykh Ahmed Lemu and Aisha Lemu. Over five decades of promoting Islamic knowledge, training teachers, and supporting vulnerable communities across Nigeria.",
    logo: "/WhatsApp_Image_2026-02-15_at_6.09.35_PM_(1).jpeg",
  },
  {
    name: "Baitul Khair",
    description: "Founded by two sisters who began serving from their kitchen. Now operating 10 feeding points across Kano, Kaduna, and Zaria.",
    logo: "/WhatsApp_Image_2026-02-15_at_6.02.21_PM_(1).jpeg",
  },
  {
    name: "Ebdurahman Foundation",
    description: "A skills and learning center in Kano empowering orphans and vulnerable youth through vocational training and enterprise development.",
    logo: "/WhatsApp_Image_2026-02-15_at_6.08.00_PM_(1).jpeg",
  },
];

const FOCUS_AREAS = [
  {
    title: "Water Well Initiatives",
    summary: "Building sustainable water wells to provide clean drinking water to rural communities.",
    icon: Droplets,
  },
  {
    title: "Educational Sponsorships",
    summary: "Funding scholarships and learning resources for students who lack access to quality education.",
    icon: BookOpen,
  },
  {
    title: "Skills and Vocational Training",
    summary: "Equipping young people with practical skills to build dignified, self sufficient livelihoods.",
    icon: Wrench,
  },
  {
    title: "Orphan Empowerment Projects",
    summary: "Holistic support for orphaned children, covering welfare, mentorship, and long term care.",
    icon: Users,
  },
  {
    title: "Long Term Sustainable Development",
    summary: "Strategic investments in community infrastructure that create lasting, generational change.",
    icon: Sprout,
  },
];

export const HomePage = ({ navigateTo }: HomePageProps) => (
  <div className="bg-foundation-light text-foundation-dark font-sans selection:bg-foundation-primary selection:text-white">
    {/* ============================== */}
    {/* SECTION 1: HERO (Editorial) */}
    {/* ============================== */}
    <section className="relative w-full bg-white min-h-[90vh] lg:min-h-screen flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-20 xl:px-28 py-16 lg:py-24 xl:py-32 z-10 bg-white flex-shrink-0">
        <Reveal direction="up" stagger={150}>
          <div className="max-w-2xl">
            <h1 className="ds-heading-1 text-foundation-primary mb-8">
              Honoring a life of sincerity, dignity, and compassion.
            </h1>
            <p className="ds-subheading text-foundation-muted mb-10 max-w-xl xl:max-w-2xl">
              The Latif Foundation acts as a steward of Abdul Latif Ayodele, a continuous offering to the world, dedicated to his name so that light may reach him in the afterlife.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 w-full max-w-[400px] sm:max-w-none">
              <Button variant="primary" onClick={() => scrollToId('fundraisers')} className="flex-1 sm:flex-none px-4 py-3.5 sm:px-10 sm:py-4 text-[11px] sm:text-sm whitespace-nowrap">
                Our Work
              </Button>
              <Button variant="secondary" onClick={() => scrollToId('inspiration')} className="flex-1 sm:flex-none px-4 py-3.5 sm:px-10 sm:py-4 text-[11px] sm:text-sm whitespace-nowrap bg-foundation-sand/30 hover:bg-foundation-sand text-foundation-dark border-none">
                His Legacy
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
      
      <div className="w-full lg:w-[55%] xl:w-[60%] relative min-h-[50vh] lg:min-h-screen">
        {/* Soft gradient mask for a smooth blend: bottom gradient for mobile, left gradient for desktop */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent lg:hidden z-10" />
        <div className="absolute top-0 bottom-0 left-0 w-64 xl:w-[400px] bg-gradient-to-r from-white via-white/80 to-transparent hidden lg:block z-10" />
        
        <img
          src="/hero-beach-walk.png"
          alt="A peaceful walk on the beach"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[80%_center]"
          fetchPriority="high"
        />
      </div>
    </section>

    {/* ============================== */}
    {/* SECTION 2: CURRENT FUNDRAISERS */}
    {/* ============================== */}
    <Section id="fundraisers" className="bg-foundation-sand py-section">
      <Reveal direction="up">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-12 bg-foundation-primary"></span>
          <h2 className="text-foundation-primary font-bold tracking-widest uppercase text-sm">Active Campaigns</h2>
        </div>
        
        <div className="bg-white border border-stone-200 p-8 md:p-12 rounded-sm shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 group hover:shadow-md transition-shadow">
          <div className="flex-1 text-center md:text-left">
            <h3 className="ds-heading-2 text-foundation-dark mb-4">Qurbani 2026</h3>
            <p className="ds-body text-foundation-muted max-w-xl xl:max-w-2xl">
              Turn your grief into a gift for the hungry. Ensure families can celebrate Eid with dignity and nutrition.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3 w-full md:w-auto">
            <Button variant="primary" onClick={() => navigateTo('qurbani')} className="w-full">
              Learn More & Donate
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>

    {/* ============================== */}
    {/* SECTION 3: THE INSPIRATION (Asymmetrical) */}
    {/* ============================== */}
    <Section id="inspiration" className="bg-foundation-light py-section-lg border-y border-stone-100">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal direction="up" stagger={150}>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-foundation-secondary"></span>
              <h2 className="text-foundation-secondary font-bold tracking-widest uppercase text-xs">The Inspiration</h2>
            </div>
            
            <h3 className="ds-heading-1 text-foundation-primary mb-10">
              Abdul Lateef Ayodele
            </h3>
            
            <div className="space-y-6 ds-subheading text-foundation-muted max-w-prose 2xl:max-w-screen-md">
              <p>
                Abdul Latif Ayodele, known to many as "Latz," was a man of purpose. He was a dedicated personal trainer, a loyal friend, and a pillar of his community. He found his path in Islam in 2012 and often called his faith his greatest blessing.
              </p>
              <p>
                His name reflects one of the Beautiful Names of Allah, Al Latif, The Subtle, The Gentle, The Most Kind. Abdul Lateef embodied that quality. He supported people quietly, giving without seeking recognition, and uplifting others in dignified ways.
              </p>
              <p>
                On December 29, 2025, Abdul Latif died in a tragic car accident in Nigeria. His passing left a void in the hearts of his family, friends, and the many athletes he coached.
              </p>
              <p>
                He deeply understood the importance of sadaqah jariyah—ongoing charity carried out on behalf of those who have passed. We established the Latif Foundation to keep his spirit of service alive, transforming our grief into meaningful action for those in need.
              </p>
            </div>

            <blockquote className="border-l-4 border-foundation-secondary pl-8 mt-12 py-2">
              <p className="ds-heading-3 text-foundation-dark italic">
                &ldquo;When his own time came, we should not focus on tears, but instead do as much good for him as possible.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
        
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <Reveal direction="left">
            <div className="relative rounded-lg overflow-hidden shadow-sm">
              <img
                src="/abdul-lateef.jpg"
                alt="Portrait of Abdul Lateef Ayodele"
                loading="lazy"
                decoding="async"
                className="w-full h-auto max-h-[600px] object-contain bg-stone-100"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>

    {/* ============================== */}
    {/* SECTION 4: THE COALITION MODEL */}
    {/* ============================== */}
    <Section id="coalition" className="bg-foundation-sand py-section-lg">
      <Reveal className="mb-20" direction="up">
        <h2 className="ds-heading-1 text-foundation-dark mb-8">Our Coalition Model</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="ds-body-lg">
            The Latif Foundation operates as a coalition. We partner with trusted grassroots organisations that have already been serving their communities for years, sometimes decades.
          </p>
          <p className="ds-body-lg">
            Rather than duplicating their efforts, we strengthen them. We expand their reach. We provide funding, structure, visibility, and long term strategic support to maximise impact.
          </p>
        </div>
      </Reveal>

      <div className="mb-12">
        <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foundation-secondary">Our Partners</h3>
      </div>

      <ul role="list" className="grid md:grid-cols-3 gap-8 list-none p-0 m-0">
        {PARTNERS.map((partner, idx) => (
          <li key={partner.name} className="h-full">
            <Reveal delay={idx * 150} direction="up" className="h-full">
              <button
                type="button"
                onClick={() => navigateTo(partner.name.toLowerCase().replace(/\s+/g, '-'))}
                aria-label={`Read more about ${partner.name}`}
                className="group text-left w-full flex flex-col h-full bg-white p-12 rounded-sm border border-transparent transition-[box-shadow,transform,border-color] duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-foundation-sand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foundation-primary focus-visible:ring-offset-2 [touch-action:manipulation]"
              >
                <div className="relative mb-12 flex-shrink-0">
                  <div className="w-24 h-24 flex items-center justify-start mix-blend-multiply">
                    <img
                      src={partner.logo}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-[filter,opacity] duration-700"
                    />
                  </div>
                  <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-[opacity,transform] duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0">
                    <ArrowUpRight size={24} className="text-foundation-primary" strokeWidth={1} aria-hidden="true" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="ds-heading-3 text-foundation-dark mb-4 group-hover:text-foundation-primary transition-colors">
                    {partner.name}
                  </h4>
                  <p className="ds-body text-foundation-muted">
                    {partner.description}
                  </p>
                </div>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>

    {/* ============================== */}
    {/* SECTION 5: AREAS OF FOCUS */}
    {/* ============================== */}
    <Section id="focus" className="bg-white py-section-lg">
      <Reveal className="mb-20" direction="up">
        <h2 className="ds-heading-1 text-foundation-dark mb-4">Focus Areas</h2>
        <p className="ds-subheading text-foundation-muted max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">Targeted initiatives to build dignified, self-sufficient communities.</p>
      </Reveal>

      {/* Asymmetrical Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOCUS_AREAS.map((area, idx) => {
          const CardIcon = area.icon;

          return (
            <div key={idx} className="h-full">
              <Reveal delay={idx * 100} direction="up" className="h-full">
                <div className={`h-full bg-foundation-light p-12 flex flex-col justify-start rounded-sm border border-stone-100 group transition-[box-shadow,border-color] duration-300 hover:shadow-lg hover:border-foundation-primary/20`}>
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 text-foundation-primary shadow-sm border border-stone-100">
                    <CardIcon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="ds-heading-3 mb-4 text-foundation-dark group-hover:text-foundation-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="ds-body text-foundation-muted">
                    {area.summary}
                  </p>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </Section>

    {/* ============================== */}
    {/* SECTION 6: THE LEGACY */}
    {/* ============================== */}
    <section aria-label="Legacy" className="w-full px-6 md:px-10 py-section-lg bg-foundation-primary text-center relative overflow-hidden">
      <Reveal direction="up">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto relative z-10">
          <p className="ds-heading-1 text-white mb-12">
            Through this foundation, Abdul Lateef's legacy continues. Quiet kindness, strategic impact, and sustainable charity.
          </p>
          <p className="ds-subheading text-stone-200 italic">
            May Allah accept it from him and from all of us, and make it a source of continuous reward for him in his grave and in the Hereafter.
          </p>
        </div>
      </Reveal>
    </section>
  </div>
);
