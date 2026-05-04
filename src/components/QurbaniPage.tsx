import { Reveal, Button } from './shared';

export const QurbaniPage = () => {
  return (
    <div className="bg-[#faf8f3] text-[#1a1a17] font-sans pt-32 pb-24 min-h-screen">
      <div className="max-w-[720px] lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-5 flex flex-col gap-4 lg:gap-6 2xl:gap-8">
      
        {/* SECTION 1 — HERO */}
        <Reveal direction="up" stagger={100}>
          <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 text-center shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-foundation-primary" />
            <h1 className="ds-heading-1 text-foundation-primary mt-2 mb-4 lg:mb-6 2xl:mb-8">
              This Eid, you can feed a family that has nothing.
            </h1>
            <p className="ds-subheading text-stone-500 mb-8 xl:mb-10 max-w-xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
              While you sit at a full table, somewhere a mother is dividing one bowl of rice between four children. You have the power to change that. One donation. One sacred act. One Eid turned from hunger into mercy.
            </p>
            <Button
              variant="primary"
              onClick={() => window.open('https://www.gofundme.com/f/the-latif-foundation-qurbani-support-for-nigeria-senegal/donate?source=btn_donate', '_blank')}
            >
              Give Qurbani
            </Button>
          </section>
        </Reveal>

        {/* SECTION 2 — PROBLEM */}
        <Reveal direction="up" delay={100}>
          <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 shadow-sm">
            <p className="ds-body-lg m-0 text-stone-700">
              Right now, across Senegal and Nigeria, mothers are skipping meals so their children can eat. Fathers are walking home empty-handed. Eid is coming, and for too many families, there will be no meat on the table, no celebration, no relief. Just another day of going without.
            </p>
          </section>
        </Reveal>

        {/* SECTION 3 — PLAN */}
        <Reveal direction="up" delay={150}>
          <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 xl:gap-6">
              <div className="bg-[#f1efe8] rounded-xl p-5 xl:p-8">
                <div className="text-xs xl:text-sm 2xl:text-base text-stone-500 mb-2 xl:mb-4">Step 1</div>
                <p className="ds-body-lg font-medium m-0 mb-1.5 xl:mb-3 text-foundation-dark">Donate</p>
                <p className="ds-body text-stone-600 m-0">Give to the Qurbani fund.</p>
              </div>
              <div className="bg-[#f1efe8] rounded-xl p-5 xl:p-8">
                <div className="text-xs xl:text-sm 2xl:text-base text-stone-500 mb-2 xl:mb-4">Step 2</div>
                <p className="ds-body-lg font-medium m-0 mb-1.5 xl:mb-3 text-foundation-dark">Our partners perform it</p>
                <p className="ds-body text-stone-600 m-0">Trusted local hands, following the full Sunnah, on the days of Eid.</p>
              </div>
              <div className="bg-[#f1efe8] rounded-xl p-5 xl:p-8">
                <div className="text-xs xl:text-sm 2xl:text-base text-stone-500 mb-2 xl:mb-4">Step 3</div>
                <p className="ds-body-lg font-medium m-0 mb-1.5 xl:mb-3 text-foundation-dark">A family eats for weeks</p>
                <p className="ds-body text-stone-600 m-0">Fresh meat and a food pack, delivered with dignity.</p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* SECTION 4 — SOCIAL PROOF */}
        <Reveal direction="up" delay={200}>
          <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 shadow-sm">
            <p className="ds-body-lg mb-6 xl:mb-10 text-stone-700">
              Last Ramadan, your donations reached families in Niger State who hadn't seen a full sack of food in months. Real hands. Real homes. Real relief. This is what your Qurbani builds on.
            </p>
            
            <img 
              src="/qurbani-1.jpg" 
              alt="Latif Foundation partner standing with a recipient who received a sack of food" 
              className="w-full aspect-[4/3] object-cover rounded-xl mb-2.5 border border-stone-100"
              loading="lazy"
            />
            
            <div className="grid grid-cols-3 gap-2.5 mb-5">
              <img 
                src="/qurbani-2.jpg" 
                alt="Latif Foundation recipient holding food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                loading="lazy"
              />
              <img 
                src="/qurbani-3.jpg" 
                alt="Latif Foundation recipient smiling with food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                loading="lazy"
              />
              <img 
                src="/qurbani-4.jpg" 
                alt="Latif Foundation recipient and partner with food aid" 
                className="w-full aspect-square object-cover rounded-lg border border-stone-100"
                loading="lazy"
              />
            </div>
            
            <p className="text-[13px] text-stone-500 text-center italic m-0">
              Ramadan 2026 · Niger State · Latif Foundation field team
            </p>
          </section>
        </Reveal>

        {/* SECTION 5 — STAKES */}
        <Reveal direction="up" delay={250}>
          <section className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 shadow-sm">
            <p className="ds-heading-3 leading-relaxed text-foundation-primary">
              Most people will never get to do what you are about to do. Skip Qurbani, and a sacred obligation passes you by. Give it, and you fulfil the Sunnah of Ibrahim (AS). You feed a family who has waited all year for this single moment. You become the answer to a prayer made before dawn, by a mother you will never meet, in a village you will never see.
            </p>
          </section>
        </Reveal>

        {/* SECTION 6 — MEMORIAL CTA */}
        <Reveal direction="up" delay={300}>
          <section id="donate" className="bg-white border border-black/10 rounded-2xl p-8 md:p-10 xl:p-14 2xl:p-16 text-center shadow-sm">
            <p className="ds-body-lg mb-5 xl:mb-8 text-stone-700">
              Every Qurbani is given in his name. You carry his legacy now.
            </p>
            <div className="ds-heading-3 text-stone-700 mb-8 xl:mb-12">
              <p className="m-0 mb-1 xl:mb-2">Turn your grief into a gift.</p>
              <p className="m-0 mb-1 xl:mb-2">Turn his memory into a meal.</p>
              <p className="m-0">Turn one life remembered into many lives fed.</p>
            </div>
            <Button
              variant="primary"
              onClick={() => window.open('https://www.gofundme.com/f/the-latif-foundation-qurbani-support-for-nigeria-senegal/donate?source=btn_donate', '_blank')}
            >
              Give Qurbani in his memory
            </Button>
          </section>
        </Reveal>

      </div>
    </div>
  );
};
