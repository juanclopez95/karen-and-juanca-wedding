import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  const acts = [
    {
      id: "Act I: Prelude",
      details: "Friday, May 22 | 5:00 PM",
      location: "La Carreta, San Isidro",
      mapUrl: "https://www.google.com/maps/place/la+carreta+lima/data=!4m2!3m1!1s0x9105c865c4d04e5b:0x3633e9a533f74a47?sa=X&ved=1t:242&ictx=111",
      description: "Let us welcome you to Lima with an evening centered around a Traditional Peruvian Peña.\n\nPicture guitars, cajón, pisco, & local bites."
    },
    {
      id: "Act II: Union",
      details: "Saturday, May 23 | 3:30 PM",
      location: "Parroquia Nuestra Señora de Fátima",
      mapUrl: "https://maps.app.goo.gl/E75fRuxKnmKvNqZZ9",
      description: "We reconvene for a sacred promise."
    },
    {
      id: "Act III: Celebration",
      details: "Saturday, May 23 | 6:00 PM - 2:00 AM",
      location: "Asociación Nacional de Criadores y Propietarios de Caballos Peruanos de Paso – Mamacona",
      mapUrl: "https://www.google.com/maps/dir//ANCPCPP+(Asoc.+Nac.+De+Criadores+Y+Propietarios+De+Caballos+Peruanos+De+Paso),+P3QR%2BV6Q,+Alameda+Mamacona,+Lima+15841,+Peru/@25.7910622,-80.1763661,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105bc87b8bbf663:0x6dfa734f18a430b6!2m2!1d-76.90938!2d-12.2602887?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",
      description: "After our Vow, we'll take a ride to the outskirts of Lima, Mamacona. The venue is located in the sanctuary of the famous Caballo Peruano de Paso.\n\nMusic is our love language, so this celebration is decorated by the sound that shaped our time together. \n\n& perhaps, the rhythm deepens."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full flex flex-col items-center"
    >
      {/* Mobile Hero — image with margins, title below */}
      <div className="block md:hidden w-full">
        <div className="w-full px-2 pt-[68px]">
          <div className="relative w-full h-[74vh] overflow-hidden">
            <img
              src="./home.jpeg"
              alt="Karen & Juanca"
              className="w-full h-full object-cover object-center opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 pb-8 px-4 space-y-4">
          <h1 className="text-[clamp(1.6rem,8vw,2.8rem)] font-serif font-normal tracking-[0.04em] text-[#9a3412] text-center">
            KAREN &amp; JUANCA
          </h1>
          <p className="text-sm tracking-[0.05em] font-serif italic opacity-70 text-center">
            Lima, Perú | 23 de Mayo 2026
          </p>
          <a
            href="https://withjoy.com/karen-and-juanca/rsvp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-pitch-black text-[10px] tracking-[0.3em] font-sans font-bold hover:bg-pitch-black hover:text-milk transition-colors"
          >
            RSVP
          </a>
        </div>
      </div>

      {/* Desktop Background Image - fixed full-screen, only md and above */}
      <div className="hidden md:block fixed inset-0 -z-10 overflow-hidden">
        <img
          src="./home.jpeg"
          alt="Karen & Juanca"
          className="w-full h-full object-cover object-[center_20%] opacity-90"
          referrerPolicy="no-referrer"
        />
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Overlay to create the central white column effect */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-xl bg-milk h-full shadow-[0_0_100px_rgba(0,0,0,0.1)]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center pt-8 md:pt-48 pb-32">
        {/* Title Section */}
        <header className="hidden md:flex flex-col items-center mb-16 px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[clamp(1.05rem,4.2vw,3rem)] font-serif font-normal tracking-[0.05em] leading-none mb-4 text-center whitespace-nowrap text-[#9a3412]"
          >
            KAREN & JUANCA
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-xl tracking-[0.05em] font-serif italic opacity-80 mb-8 text-center"
          >
            Lima, Perú | 23 de Mayo 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <a 
              href="https://withjoy.com/karen-and-juanca/rsvp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-pitch-black text-[10px] tracking-[0.3em] font-sans font-bold hover:bg-pitch-black hover:text-milk transition-colors"
            >
              RSVP
            </a>
          </motion.div>
        </header>

        {/* Itinerary Section - Inside the central white area */}
        <section className="w-full max-w-lg flex flex-col items-center space-y-16 px-8 md:px-12">
          {acts.map((act, index) => (
            <motion.div 
              key={act.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.6 }}
              className="w-full flex flex-col items-center text-center space-y-6"
            >
              <h2 className="text-2xl md:text-4xl font-serif italic tracking-tight">{act.id}</h2>
              
              <div className="space-y-2">
                <p className="text-sm md:text-lg font-serif italic opacity-80">{act.details}</p>
                <div className="space-y-1">
                  <p className="text-sm md:text-lg font-serif italic opacity-80">{act.location}</p>
                  <a 
                    href={act.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.2em] font-sans font-bold underline hover:opacity-60 transition-opacity block"
                  >
                    (DIRECTIONS)
                  </a>
                </div>
              </div>

              <p className="text-sm md:text-base font-serif leading-relaxed max-w-lg opacity-90 whitespace-pre-line">
                {act.description}
              </p>
              
              <div className="w-64 h-[1px] bg-pitch-black mt-12" />
            </motion.div>
          ))}

          {/* Registry Section */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full flex flex-col items-center text-center space-y-8 pt-8"
          >
            <h2 className="text-2xl md:text-4xl font-serif italic tracking-tight">Registry</h2>
            
            <div className="space-y-4">
              <p className="text-sm md:text-base font-serif leading-relaxed max-w-lg opacity-90">
                Your presence is what matters most.
              </p>
              <p className="text-sm md:text-base font-serif leading-relaxed max-w-lg opacity-90">
                For those that wish to gift, find our registry here:
              </p>
            </div>

            <a 
              href="https://withjoy.com/karen-and-juanca/registry/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-pitch-black text-[10px] tracking-[0.3em] font-sans font-bold hover:bg-pitch-black hover:text-milk transition-colors uppercase"
            >
              Karen & Juanca Registry
            </a>

            {/* Kira Confetti Trigger */}
            <div className="pt-32 pb-16 flex flex-col items-center space-y-4">
              <button 
                id="kira-trigger"
                onClick={() => {
                  const container = document.createElement('div');
                  container.style.position = 'fixed';
                  container.style.top = '0';
                  container.style.left = '0';
                  container.style.width = '100vw';
                  container.style.height = '100vh';
                  container.style.pointerEvents = 'none';
                  container.style.zIndex = '9999';
                  document.body.appendChild(container);

                  // Each dog flies from left to right in an ascending arc
                  for (let i = 0; i < 12; i++) {
                    const delay = i * 180; // stagger so they feel like a parade
                    setTimeout(() => {
                      const kira = document.createElement('img');
                      kira.src = './kira-dog.png';
                      kira.style.position = 'fixed';
                      kira.style.width = '100px';
                      kira.style.imageRendering = 'auto';

                      // Start: off-screen left, random vertical band (lower half of screen)
                      const startY = 50 + Math.random() * 35; // 50–85% down
                      const endY = 5 + Math.random() * 35;    // 5–40% down (ascending)
                      const duration = 2.8 + Math.random() * 1.4; // 2.8–4.2s

                      kira.style.left = '-120px';
                      kira.style.top = startY + 'vh';
                      // Slight upward tilt to suggest flight
                      kira.style.transform = 'scaleX(-1) rotate(-12deg)';
                      kira.style.transition = `left ${duration}s cubic-bezier(0.25, 0.1, 0.6, 1), top ${duration}s cubic-bezier(0.4, 0, 0.2, 1)`;

                      container.appendChild(kira);
                      kira.getBoundingClientRect(); // force reflow

                      kira.style.left = '110vw';
                      kira.style.top = endY + 'vh';

                      setTimeout(() => {
                        kira.remove();
                        if (container.children.length === 0) container.remove();
                      }, duration * 1000 + 300);
                    }, delay);
                  }
                }}
                className="group flex flex-col items-center space-y-2 focus:outline-none"
              >
                <h3 className="text-xl md:text-2xl font-serif italic tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 text-center">
                  <span>& Kira?</span>
                  <div className="flex flex-col items-center gap-1">
                    <img src="./kira_no_bg.png" alt="Kira" className="h-16 md:h-24 w-auto object-contain" />
                    <span className="text-[8px] tracking-[0.2em] font-sans font-bold uppercase opacity-60">(CLICK ME)</span>
                  </div>
                  <span>Yes, I'm coming</span>
                </h3>
                <div className="w-12 h-[1px] bg-pitch-black opacity-20 group-hover:w-24 group-hover:opacity-100 transition-all duration-700" />
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

