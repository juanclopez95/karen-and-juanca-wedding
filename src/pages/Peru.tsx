import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Peru() {
  const acts = [
    {
      id: "Acto Uno: Unión",
      details: "Sábado, 23 de mayo | 3:30 PM",
      location: "Parroquia Nuestra Señora de Fátima",
      mapUrl: "https://maps.app.goo.gl/E75fRuxKnmKvNqZZ9",
      description: "El sí, ante Dios."
    },
    {
      id: "Acto Dos: Celebración",
      details: "Sábado, 23 de mayo | 6:00 PM - 2:00 AM",
      location: "Asociación Nacional de Criadores y Propietarios de Caballos Peruanos de Paso – Mamacona",
      mapUrl: "https://www.google.com/maps/dir//ANCPCPP+(Asoc.+Nac.+De+Criadores+Y+Propietarios+De+Caballos+Peruanos+De+Paso),+P3QR%2BV6Q,+Alameda+Mamacona,+Lima+15841,+Peru/@25.7910622,-80.1763661,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105bc87b8bbf663:0x6dfa734f18a430b6!2m2!1d-76.90938!2d-12.2602887?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D",
      description: "La fiesta."
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
      {/* Background Image - Full Screen */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <img
          src="./home.jpeg"
          alt="Karen & Juanca"
          className="w-full h-full object-cover object-[center_20%] opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 flex justify-center">
          <div className="w-full max-w-xl bg-milk h-full shadow-[0_0_100px_rgba(0,0,0,0.1)]" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center pt-32 md:pt-48 pb-32">
        {/* Title Section */}
        <header className="w-full flex flex-col items-center mb-16 px-4">
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

        {/* Itinerary Section */}
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
                    (CÓMO LLEGAR)
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
            <h2 className="text-2xl md:text-4xl font-serif italic tracking-tight">Lista de Regalos</h2>

            <div className="space-y-4">
              <p className="text-sm md:text-base font-serif leading-relaxed max-w-lg opacity-90">
                Tu presencia es lo que más importa.
              </p>
              <p className="text-sm md:text-base font-serif leading-relaxed max-w-lg opacity-90">
                Para quienes deseen obsequiar algo, encuentren nuestra lista aquí:
              </p>
            </div>

            <a
              href="https://withjoy.com/karen-and-juanca/registry/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-pitch-black text-[10px] tracking-[0.3em] font-sans font-bold hover:bg-pitch-black hover:text-milk transition-colors uppercase"
            >
              Lista de Karen & Juanca
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

                  for (let i = 0; i < 30; i++) {
                    const kira = document.createElement('img');
                    kira.src = './kira-croissant.png';
                    kira.style.position = 'absolute';
                    kira.style.top = '-100px';

                    const startX = Math.random() * 100;
                    kira.style.left = startX + 'vw';
                    kira.style.width = '60px';

                    const duration = 2 + Math.random() * 2;
                    const rotation = 360 + Math.random() * 720;
                    const direction = Math.random() > 0.5 ? 1 : -1;
                    const scale = 0.5 + Math.random() * 0.7;
                    const horizontalSpread = (Math.random() - 0.5) * 40;

                    kira.style.transform = `scale(${scale}) rotate(0deg)`;
                    kira.style.transition = `top ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), left ${duration}s linear, transform ${duration}s linear`;

                    container.appendChild(kira);
                    kira.getBoundingClientRect();

                    kira.style.top = '110vh';
                    kira.style.left = (startX + horizontalSpread) + 'vw';
                    kira.style.transform = `scale(${scale}) rotate(${rotation * direction}deg)`;

                    setTimeout(() => {
                      kira.remove();
                      if (container.children.length === 0) {
                        container.remove();
                      }
                    }, duration * 1000);
                  }
                }}
                className="group flex flex-col items-center space-y-2 focus:outline-none"
              >
                <h3 className="text-xl md:text-2xl font-serif italic tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 text-center">
                  <span>& Kira?</span>
                  <div className="flex flex-col items-center gap-1">
                    <img src="./kira_no_bg.png" alt="Kira" className="h-16 md:h-24 w-auto object-contain" />
                    <span className="text-[8px] tracking-[0.2em] font-sans font-bold uppercase opacity-60">(TÓCAME)</span>
                  </div>
                  <span>Sí, voy</span>
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
