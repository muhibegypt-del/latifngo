import { Droplets, BookOpen, Wrench, Users, Sprout, ArrowUpRight } from 'lucide-react';
import { Reveal, Section, Button, StainedGlassOverlay } from './shared';

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
    <section className="relative bg-foundation-dark overflow-hidden lg:min-h-screen">
      <div className="grid lg:grid-cols-12 lg:min-h-screen">

        {/* Portrait column */}
        <div className="relative lg:col-span-5 xl:col-span-6 lg:order-2 h-[55vh] sm:h-[65vh] lg:h-auto">
          <img
            src="/abdul-lateef.jpg"
            alt="Portrait of Abdul Lateef Ayodele"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foundation-dark/85 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-foundation-dark/60"
          />
        </div>

        {/* Text column */}
        <div className="relative lg:col-span-7 xl:col-span-6 lg:order-1 flex items-center px-6 md:px-10 lg:px-16 xl:px-24 py-20 lg:py-32">
          <StainedGlassOverlay />
          <div className="relative z-10 max-w-2xl">
            <Reveal stagger={200} direction="up">
              <p className="text-foundation-secondary font-medium tracking-[0.2em] uppercase text-sm mb-6">In His Honour</p>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif text-white mb-8 leading-[1.05]">
                The&nbsp;Latif <span className="italic font-light text-foundation-secondary">Foundation</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-stone-300 leading-relaxed mb-8">
                Transforming short term relief into long term dignity through strategic, coalition-based charity.
              </p>
              <div className="w-12 h-px bg-foundation-secondary/40 mb-8" aria-hidden="true" />
              <p className="text-base text-stone-400 leading-relaxed max-w-md">
                Established in honour of our beloved brother, Abdul Lateef Ayodele, continuing his quiet legacy of kindness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <Button variant="primary" onClick={() => scrollToId('fundraisers')}>
                  Current Fundraisers
                </Button>
                <Button variant="ghost" className="text-stone-300 hover:text-white hover:bg-white/10" onClick={() => scrollToId('coalition')}>
                  Learn About Our Coalition
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

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
        
        <div className="border border-stone-200 bg-white p-16 md:p-24 rounded-sm shadow-sm flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-serif text-foundation-muted mb-4">No Active Fundraisers</p>
          <p className="text-foundation-muted max-w-md mx-auto">
            We are currently preparing our next round of initiatives. Please check back soon or learn more about our ongoing work below.
          </p>
        </div>
      </Reveal>
    </Section>

    {/* ============================== */}
    {/* SECTION 3: THE INSPIRATION (Asymmetrical) */}
    {/* ============================== */}
    <Section id="inspiration" className="bg-white py-section-lg">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <Reveal direction="right">
            <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
              <div className="absolute inset-0 bg-foundation-primary/10 mix-blend-overlay z-10"></div>
              <img
                src="/abdul-lateef.jpg"
                alt="Portrait of Abdul Lateef Ayodele"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-[filter] duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-foundation-sand -z-10 rounded-sm"></div>
          </Reveal>
        </div>
        
        <div className="lg:col-span-7 lg:pl-12">
          <Reveal direction="up" stagger={150}>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-foundation-secondary"></span>
              <h2 className="text-foundation-secondary font-bold tracking-widest uppercase text-xs">The Inspiration</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
              Abdul Lateef Ayodele
            </h3>
            
            <div className="space-y-6 text-foundation-muted leading-loose text-lg max-w-prose">
              <p>
                His name reflects one of the Beautiful Names of Allah, Al Latif, The Subtle, The Gentle, The Most Kind, whose care and mercy reach His creation in ways unseen yet deeply felt.
              </p>
              <p>
                Abdul Lateef embodied that quality. He supported people quietly. He gave without seeking recognition. He uplifted others in subtle, dignified ways. Much of his charity was known only to those directly impacted by it.
              </p>
              <p>
                He deeply understood the importance of sadaqah jariyah, ongoing charity carried out on behalf of those who have passed. From the moment we heard the news of his passing, that became our priority.
              </p>
            </div>

            <blockquote className="border-l-2 border-foundation-primary pl-8 mt-12 py-2">
              <p className="text-2xl font-serif text-foundation-dark italic leading-snug">
                &ldquo;When his own time came, we should not focus on tears, but instead do as much good for him as possible.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </Section>

    {/* ============================== */}
    {/* SECTION 4: THE COALITION MODEL */}
    {/* ============================== */}
    <Section id="coalition" className="bg-foundation-sand py-section-lg">
      <Reveal className="mb-20" direction="up">
        <h2 className="text-5xl md:text-6xl font-serif text-foundation-dark mb-8">Our Coalition Model</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <p className="text-foundation-muted leading-relaxed text-lg">
            The Latif Foundation operates as a coalition. We partner with trusted grassroots organisations that have already been serving their communities for years, sometimes decades.
          </p>
          <p className="text-foundation-muted leading-relaxed text-lg">
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
            <Reveal delay={idx * 150} direction="up">
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
                  <h4 className="text-2xl font-serif text-foundation-dark mb-4 group-hover:text-foundation-primary transition-colors">
                    {partner.name}
                  </h4>
                  <p className="text-foundation-muted leading-relaxed text-sm">
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
        <h2 className="text-5xl md:text-6xl font-serif text-foundation-dark mb-4">Focus Areas</h2>
        <p className="text-foundation-muted text-lg max-w-2xl">Targeted initiatives to build dignified, self-sufficient communities.</p>
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
                  <h3 className="text-2xl font-serif mb-4 text-foundation-dark group-hover:text-foundation-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-foundation-muted leading-relaxed">
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
    <section aria-label="Legacy" className="w-full px-6 md:px-10 py-section-lg bg-foundation-dark text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-foundation-primary/10" />
      <Reveal direction="up">
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight mb-12">
            Through this foundation, Abdul Lateef's legacy continues. Quiet kindness, strategic impact, and sustainable charity.
          </p>
          <p className="text-xl font-light text-stone-400 italic">
            May Allah accept it from him and from all of us, and make it a source of continuous reward for him in his grave and in the Hereafter.
          </p>
        </div>
      </Reveal>
    </section>
  </div>
);
