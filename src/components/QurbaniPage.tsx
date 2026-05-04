import { Reveal, Button } from './shared';

const DONATE_URL = 'https://www.gofundme.com/f/the-latif-foundation-qurbani-support-for-nigeria-senegal/donate?source=btn_donate';

const openDonate = () => window.open(DONATE_URL, '_blank');

const TIERS = [
  {
    label: 'Full Goat',
    price: '£150',
    description: 'One whole goat sacrificed and distributed to families in need.',
    cta: 'Donate £150',
    featured: true,
  },
  {
    label: 'Half Share',
    price: '£75',
    description: 'A share in a goat — split between two donors, fully distributed.',
    cta: 'Donate £75',
    featured: false,
  },
  {
    label: 'Give What You Can',
    price: 'Any amount',
    description: 'Every pound goes towards essential food and supplies for families in need.',
    cta: 'Donate Now',
    featured: false,
  },
];

/* Shared card wrapper for consistent styling */
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <section className={`bg-white border border-stone-200 rounded-2xl p-8 md:p-10 shadow-sm ${className}`}>
    {children}
  </section>
);

export const QurbaniPage = () => {
  return (
    <div className="bg-foundation-light text-foundation-dark font-sans pt-32 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-5 flex flex-col gap-5">
      
        {/* ── HERO ── */}
        <Reveal direction="up">
          <Card className="text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-foundation-primary" />
            <h1 className="ds-heading-1 text-foundation-primary mt-2 mb-4">
              This Eid, you can feed a family that has nothing.
            </h1>
            <p className="ds-subheading text-stone-500 mb-8 max-w-xl mx-auto">
              While you sit at a full table, somewhere a mother is dividing one bowl of rice between four children. You have the power to change that.
            </p>
            <Button variant="primary" onClick={openDonate}>
              Give Qurbani
            </Button>
          </Card>
        </Reveal>

        {/* ── PROBLEM ── */}
        <Reveal direction="up" delay={80}>
          <Card className="text-center">
            <p className="ds-body-lg m-0 text-stone-700 max-w-xl mx-auto">
              Right now, across Senegal and Nigeria, mothers are skipping meals so their children can eat. Fathers are walking home empty-handed. Eid is coming, and for too many families, there will be no meat on the table, no celebration, no relief.
            </p>
          </Card>
        </Reveal>

        {/* ── HOW IT WORKS ── */}
        <Reveal direction="up" delay={120}>
          <Card>
            <h2 className="ds-heading-3 text-foundation-dark mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Choose your amount', 'Our partners perform it', 'A family eats for weeks'].map((title, i) => (
                <div key={i} className="bg-foundation-sand rounded-xl p-5 text-center">
                  <div className="text-xs text-stone-400 mb-2">Step {i + 1}</div>
                  <p className="ds-body font-medium m-0 text-foundation-dark">{title}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        {/* ── PRICING ── */}
        <Reveal direction="up" delay={160}>
          <Card>
            <h2 className="ds-heading-2 text-foundation-dark mb-2 text-center">Donation Tiers</h2>
            <p className="ds-body text-stone-500 mb-8 text-center max-w-lg mx-auto">
              All donations are processed securely through GoFundMe. You will need to enter your chosen amount on the donation page.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {TIERS.map((tier) => (
                <div
                  key={tier.label}
                  className={`rounded-xl p-6 text-center flex flex-col ${
                    tier.featured
                      ? 'border-2 border-foundation-primary/30 bg-foundation-primary/[0.03]'
                      : 'border border-stone-200'
                  }`}
                >
                  <div className={`text-xs font-medium tracking-widest uppercase mb-4 ${
                    tier.featured ? 'text-foundation-primary' : 'text-stone-400'
                  }`}>
                    {tier.label}
                  </div>
                  <div className="text-3xl font-serif text-foundation-dark mb-2">{tier.price}</div>
                  <p className="ds-body text-stone-500 mb-auto pb-5">{tier.description}</p>
                  <Button variant="primary" onClick={openDonate} className="w-full text-xs">
                    {tier.cta}
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-stone-400 text-center mt-8 italic text-sm max-w-lg mx-auto">
              If you are unable to give the full £150 or £75, please don't let that stop you. Any amount will be placed into a general fund used to purchase essential food supplies for families in need.
            </p>
          </Card>
        </Reveal>

        {/* ── SOCIAL PROOF ── */}
        <Reveal direction="up" delay={200}>
          <Card className="text-center">
            <p className="ds-body-lg mb-6 text-stone-700 max-w-xl mx-auto">
              Last Ramadan, your donations reached families in Niger State who hadn't seen a full sack of food in months. Real hands. Real homes. Real relief.
            </p>
            
            <img 
              src="/qurbani-1.jpg" 
              alt="Latif Foundation partner standing with a recipient who received a sack of food" 
              className="w-full aspect-[4/3] object-cover rounded-xl mb-2.5 border border-stone-100"
              width={768}
              height={576}
              loading="lazy"
              decoding="async"
            />
            
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <img 
                src="/qurbani-2.jpg" 
                alt="Latif Foundation recipient holding food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
              />
              <img 
                src="/qurbani-3.jpg" 
                alt="Latif Foundation recipient smiling with food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
              />
              <img 
                src="/qurbani-4.jpg" 
                alt="Latif Foundation recipient and partner with food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                width={256}
                height={256}
                loading="lazy"
                decoding="async"
              />
            </div>
            
            <p className="text-xs text-stone-400 italic m-0">
              Ramadan 2026 · Niger State · Latif Foundation field team
            </p>
          </Card>
        </Reveal>

        {/* ── STAKES ── */}
        <Reveal direction="up" delay={240}>
          <Card className="text-center">
            <p className="ds-heading-3 leading-relaxed text-foundation-primary max-w-xl mx-auto">
              Give Qurbani, and you fulfil the Sunnah of Ibrahim (AS). You feed a family who has waited all year for this single moment. You become the answer to a prayer made before dawn, by a mother you will never meet, in a village you will never see.
            </p>
          </Card>
        </Reveal>

        {/* ── MEMORIAL CTA ── */}
        <Reveal direction="up" delay={280}>
          <Card className="text-center">
            <p className="ds-body-lg mb-5 text-stone-700">
              Every Qurbani is given in his name. You carry his legacy now.
            </p>
            <div className="ds-heading-3 text-stone-700 mb-8">
              <p className="m-0 mb-1">Turn your grief into a gift.</p>
              <p className="m-0 mb-1">Turn his memory into a meal.</p>
              <p className="m-0">Turn one life remembered into many lives fed.</p>
            </div>
            <Button variant="primary" onClick={openDonate}>
              Give Qurbani in his memory
            </Button>
          </Card>
        </Reveal>

      </div>
    </div>
  );
};
