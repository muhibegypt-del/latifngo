import React, { useState, useEffect, useRef, ReactNode } from 'react';
import {
  Utensils,
  Wheat,
  Check,
  Calendar,
  ArrowRight,
  Heart,
  Share2,
  Soup,
  Salad,
  MapPin,
  Users,
  HandHeart
} from 'lucide-react';

// --- Shared Components (Inlined for Portability) ---

// 1. Reveal Animation Component (with prefers-reduced-motion support)
const Reveal = ({ children, delay = 0, width = "fit-content" }: { children: ReactNode, delay?: number, width?: "fit-content" | "100%" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect(); };
  }, [delay, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`transition-all duration-1000 ease-out transform ${
        prefersReducedMotion
          ? ''
          : isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

// 2. Blur Image Component
const BlurImage = ({ src, alt, className, imgClassName }: { src: string, alt: string, className?: string, imgClassName?: string }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`overflow-hidden ${className}`} aria-busy={isLoading}>
      <img
        src={src}
        alt={alt}
        className={`transition-all duration-700 ease-in-out ${imgClassName} ${
          isLoading ? 'scale-110 blur-xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

// 3. Button Component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  target?: string;
  className?: string;
  children: ReactNode;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  onClick?: () => void;
}

const Button = ({ variant = 'primary', href, target, className, children, icon: Icon, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px]";

  const variants = {
    primary: "bg-teal-900 text-stone-50 hover:bg-teal-800 focus-visible:ring-teal-900 shadow-lg shadow-teal-900/20 hover:shadow-xl hover:-translate-y-0.5",
    secondary: "bg-stone-100 text-stone-900 hover:bg-stone-200 focus-visible:ring-stone-500 border border-stone-200",
    outline: "bg-transparent border border-stone-300 text-stone-600 hover:border-stone-800 hover:text-stone-900"
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]} ${className || ''}`}
        {...props}
      >
        {children}
        {Icon && <Icon size={16} className="ml-2" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className || ''}`} {...props}>
      {children}
      {Icon && <Icon size={16} className="ml-2" aria-hidden="true" />}
    </button>
  );
};

// 4. Card Component
const Card = ({ children, className }: { children: ReactNode, className?: string }) => (
  <div className={`bg-stone-50 p-8 rounded-xl border border-stone-100 shadow-sm ${className}`}>
    {children}
  </div>
);


// --- Data ---

const LOCATIONS = [
  { city: "Lagos", region: "Southwest" },
  { city: "Kano", region: "Northwest" },
  { city: "Kaduna", region: "Northwest" },
  { city: "Maiduguri", region: "Northeast" },
  { city: "Ibadan", region: "Southwest" },
  { city: "Zaria", region: "Northwest" },
  { city: "Bauchi", region: "Northeast" },
  { city: "Katsina", region: "Northwest" },
  { city: "Zamfara", region: "Northwest" }
];


// --- Main Page Component ---

export function RamadanPage() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 relative font-sans text-stone-900 selection:bg-teal-100 selection:text-teal-900">

      <div className="relative z-10 pt-24 pb-24 md:pt-32 md:pb-32 max-w-6xl mx-auto px-6 md:px-10">

        {/* Header Section */}
        <Reveal width="100%">
          <header className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-teal-50 text-teal-900 text-xs font-bold tracking-widest uppercase mb-8 border border-teal-100">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2 motion-safe:animate-pulse" aria-hidden="true"></span>
              Ramadan 2025 Campaign
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 mb-8 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              Turning Our Grief into His Reward: A Sadaqah Jariyah for Abdul Latif Ayedole
            </h1>

            <div className="w-px h-24 bg-gradient-to-b from-stone-300 to-transparent mx-auto mt-12" aria-hidden="true"></div>
          </header>
        </Reveal>

        {/* Hero Image Section */}
        <Reveal delay={150} width="100%">
          <div className="group relative w-full mb-16 md:mb-24">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-100 to-stone-100 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" aria-hidden="true"></div>
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-2xl shadow-stone-200/50">
              <BlurImage
                src="https://images.unsplash.com/photo-1532334812602-53b0183b27b4?q=80&w=2670&auto=format&fit=crop"
                alt="A community gathering around a shared iftar meal, representing the communal spirit of Ramadan feeding programmes"
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true"></div>
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 text-white max-w-2xl">
                <p className="text-xs font-bold tracking-widest uppercase mb-3 text-teal-100">In Loving Memory</p>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-3 leading-tight">
                  Abdul Latif Ayedole
                </h2>
                <p className="font-sans text-sm md:text-lg tracking-wide font-light max-w-lg">
                  May Allah grant him Jannatul Firdaus and widen his grave.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Narrative Section */}
        <Reveal delay={200} width="100%">
          <div className="mx-auto font-sans text-stone-700 mb-24 max-w-3xl px-2 md:px-0">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 text-stone-800">
              <span className="float-left text-6xl md:text-7xl font-serif text-teal-900 leading-[0.75] mr-4 mt-1" aria-hidden="true">W</span>
              <span className="block">hen the sun sets this Ramadan, most of us will reach for water and dates without a second thought. But for thousands of families, the call to prayer brings a knot of panic, the heartbreaking silence of an empty kitchen.</span>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We cannot bring our brother Abdul Latif back, but we can send light to his grave.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 pl-6 border-l-2 border-teal-600/40 italic text-stone-600">
              We are raising funds to provide daily hot cooked meals for vulnerable households throughout Ramadan across Nigeria, the country our dear brother Abdul Latif Ayodele <span className="font-semibold text-teal-900">originated from</span>, the country that he <span className="font-semibold text-teal-900">loved</span>, the country he would <span className="font-semibold text-teal-900">visit regularly</span>, and the country <span className="font-semibold text-teal-900">where he passed away</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              These meals will reach widows who have no support, elderly believers with no income, and children who wait all day for a meal that might not come.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Every time a family gathers around a hot meal provided by this donation, and every time they raise their hands in Du'a after a full stomach, that blessing is written for our brother.
            </p>
          </div>
        </Reveal>

        {/* Distribution Network Section */}
        <Reveal delay={250} width="100%">
          <div className="mb-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-stone-200 pb-8 gap-6">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-teal-800 mb-3 flex items-center gap-2">
                  <HandHeart size={14} className="text-teal-600" aria-hidden="true" />
                  Our Impact
                </h3>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900 max-w-md leading-tight">
                  Communities We Are Serving
                </h2>
              </div>
              <div className="text-right hidden md:block">
                 <p className="text-sm text-stone-600">Ramadan 2025</p>
                 <p className="text-xs font-medium text-stone-500 mt-1">Reaching the Most Vulnerable</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list" aria-label="Communities being served">
              {LOCATIONS.map((loc, idx) => (
                <div key={idx} role="listitem" className="group bg-white p-5 rounded-xl border border-stone-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex items-center">

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/20 to-stone-200/20 group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-500" aria-hidden="true"></div>

                  <div className="flex items-center gap-4 w-full">
                    <div className="p-3 bg-stone-50 rounded-full group-hover:bg-teal-50 transition-colors flex-shrink-0" aria-hidden="true">
                      <MapPin size={20} className="text-stone-400 group-hover:text-teal-700 transition-colors" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-serif text-xl text-stone-800 group-hover:text-teal-900 transition-colors leading-tight mb-0.5">{loc.city}</h3>
                      <p className="text-xs font-bold text-stone-500 uppercase tracking-widest">{loc.region}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
               <p className="text-xs text-stone-500 flex items-center justify-center gap-2 font-medium">
                 <Users size={14} className="text-teal-600" aria-hidden="true" />
                 <span>Partnering with trusted local community leaders to ensure every meal reaches those in need.</span>
               </p>
            </div>
          </div>
        </Reveal>

        {/* Action Grid */}
        <Reveal delay={300} width="100%">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">

            {/* Left Card: The Pack */}
            <Card className="flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-white rounded-full shadow-sm border border-stone-100 text-teal-900" aria-hidden="true">
                  <Utensils size={20} />
                </div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-600">
                  The Meal Pack
                </h3>
              </div>

              <ul className="space-y-4 flex-grow relative z-10" aria-label="Contents of each meal pack">
                {[
                  { name: "Freshly Cooked Rice & Grains", icon: Wheat, detail: "Steaming hot staples prepared daily to provide lasting energy." },
                  { name: "Hot Protein Dishes", icon: Soup, detail: "Nutritious meat or lentil stews, lovingly prepared." },
                  { name: "Fresh Vegetables & Sides", icon: Salad, detail: "Balanced meals with nutritious accompaniments." },
                  { name: "Iftar Essentials (Dates)", icon: Calendar, detail: "To break their fast with dignity, following the Sunnah." }
                ].map((item, idx) => (
                  <li key={idx} className="group/item flex flex-col p-4 rounded-lg bg-white border border-stone-100 hover:border-teal-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="text-stone-400 group-hover/item:text-teal-600 transition-colors" aria-hidden="true">
                        <item.icon size={18} />
                      </div>
                      <span className="text-stone-800 font-semibold text-sm">{item.name}</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed ml-10">{item.detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-stone-100 text-center">
                <p className="text-xs text-stone-600 font-serif mb-2">
                  Hot meals delivered daily throughout the blessed month.
                </p>
              </div>
            </Card>

            {/* Right Card: The Donation */}
            <Card className="flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-stone-50 to-white">
               {/* Background Texture for Card */}
               <div className="absolute top-0 right-0 p-32 bg-teal-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true"></div>

               <div>
                 <div className="flex items-center justify-between mb-8 relative z-10">
                   <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-600">
                     Campaign Status
                   </h3>
                   <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-teal-700 bg-teal-50 px-3 py-1 rounded" role="status">
                     <span className="w-1.5 h-1.5 rounded-full bg-teal-500 motion-safe:animate-pulse" aria-hidden="true"></span>
                     Live
                   </span>
                 </div>

                 <div className="text-center py-4 mb-6 space-y-4" role="list" aria-label="Campaign funding goals">
                   <div className="bg-teal-50 border border-teal-100 rounded-lg p-4" role="listitem">
                     <div className="flex items-center justify-center gap-2 mb-2">
                       <Check size={14} className="text-teal-800" strokeWidth={3} aria-hidden="true" />
                       <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
                         Goal 1: Achieved
                       </span>
                     </div>
                     <p className="text-xl font-serif text-teal-900 mb-1">&pound;10,000</p>
                   </div>

                   <div className="relative h-4" aria-hidden="true">
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="h-full w-px bg-stone-200"></div>
                     </div>
                   </div>

                   <div className="bg-teal-50 border border-teal-100 rounded-lg p-4" role="listitem">
                     <div className="flex items-center justify-center gap-2 mb-2">
                       <Check size={14} className="text-teal-800" strokeWidth={3} aria-hidden="true" />
                       <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
                         Goal 2: Achieved
                       </span>
                     </div>
                     <p className="text-xl font-serif text-teal-900 mb-1">&pound;25,000</p>
                   </div>

                   <div className="relative h-4" aria-hidden="true">
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="h-full w-px bg-stone-200"></div>
                     </div>
                   </div>

                   <div className="bg-teal-50 border border-teal-100 rounded-lg p-4" role="listitem">
                     <div className="flex items-center justify-center gap-2 mb-2">
                       <Check size={14} className="text-teal-800" strokeWidth={3} aria-hidden="true" />
                       <span className="text-xs font-bold tracking-widest uppercase text-teal-800">
                         Goal 3: Achieved
                       </span>
                     </div>
                     <p className="text-xl font-serif text-teal-900 mb-1">&pound;30,000</p>
                   </div>

                   <div className="relative h-4" aria-hidden="true">
                     <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowRight size={16} className="text-stone-300 transform rotate-90" />
                     </div>
                   </div>

                   <div className="bg-white border-2 border-teal-600 rounded-lg p-6 shadow-xl relative z-20" role="listitem">
                     <p className="text-xs font-bold tracking-widest uppercase text-teal-800 mb-2">Current Extended Goal</p>
                     <span className="block text-5xl md:text-6xl font-serif text-stone-900 mb-2">
                       &pound;50,000
                     </span>
                     <p className="text-stone-600 text-xs uppercase tracking-wide">Help us reach this milestone</p>

                     <div className="mt-4 w-full bg-stone-100 rounded-full h-2 overflow-hidden" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="Campaign progress: 60% funded">
                        <div className="bg-teal-600 h-full rounded-full" style={{ width: '60%' }}></div>
                     </div>
                     <p className="text-xs text-right mt-1 text-teal-700 font-medium">60% Funded</p>
                   </div>
                 </div>
               </div>

               <div className="space-y-4 relative z-10 mt-6">
                 <div className="text-center mb-6 px-2">
                   <p className="text-base font-serif text-stone-700 leading-relaxed mb-3">
                     Feed a family. Honor a brother.<br />Make his legacy eternal.
                   </p>
                   <p className="text-xs text-stone-600 leading-relaxed">
                     Every donation continues to benefit Abdul Latif in his grave. This is the sadaqah that never stops giving.
                   </p>
                 </div>

                 <Button
                    variant="primary"
                    href="https://checkout.square.site/merchant/3DEDY4EJFT8XE/checkout/NMQELHMQI4OJIS5WF3VOWQIS"
                    target="_blank"
                    className="!w-full !px-8 !py-5 text-lg"
                    icon={Heart}
                  >
                    Give Donation
                  </Button>

                  <Button
                    variant="secondary"
                    className="!w-full !px-8 !py-4 text-sm"
                    icon={Share2}
                    onClick={handleShare}
                  >
                    {copied ? 'Link Copied!' : 'Share Campaign'}
                  </Button>

                  <p className="pt-4 text-xs text-stone-500 uppercase tracking-widest flex items-center justify-center gap-2">
                    <Heart size={12} className="text-teal-600 fill-teal-600" aria-hidden="true" />
                    Secure payment via Square
                  </p>
               </div>
            </Card>

          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-32 text-center border-t border-stone-100 pt-12" aria-label="Ramadan campaign footer">
           <p className="font-serif text-stone-500 text-lg mb-4 italic">"The best of you are those who feed others."</p>
           <div className="flex justify-center items-center gap-6 mb-8 text-stone-400">
              <span className="text-xs uppercase tracking-widest hover:text-stone-600 cursor-pointer">Transparency</span>
              <span className="text-xs uppercase tracking-widest hover:text-stone-600 cursor-pointer">Privacy</span>
              <span className="text-xs uppercase tracking-widest hover:text-stone-600 cursor-pointer">Contact</span>
           </div>
           <p className="text-xs text-stone-500 uppercase tracking-widest mb-2">Latif Foundation &copy; 2025</p>
           <p className="text-xs text-stone-500 flex items-center justify-center gap-2">
             <MapPin size={12} aria-hidden="true" />
             Abuja, Nigeria
           </p>
        </footer>

      </div>
    </div>
  );
}
