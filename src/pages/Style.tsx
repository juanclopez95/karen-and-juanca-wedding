import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function Style() {
  const isPeruVersion = typeof window !== "undefined" && sessionStorage.getItem("peruContext") === "1";

  const pinContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPeruVersion) return; // No Pinterest in Spanish version
    // Pinterest replaces <a> tags with iframes, which React can't track.
    // On each mount: clear the container, re-insert a fresh <a>, then trigger Pinterest.
    const container = pinContainerRef.current;
    if (!container) return;

    // Wipe any leftover iframe from a previous visit
    container.innerHTML = "";
    const anchor = document.createElement("a");
    anchor.setAttribute("data-pin-do", "embedBoard");
    anchor.setAttribute("data-pin-board-width", "auto");
    anchor.setAttribute("data-pin-scale-height", "400");
    anchor.setAttribute("data-pin-scale-width", "80");
    anchor.href = "https://www.pinterest.com/karentelge/fashionably-elegant/";
    container.appendChild(anchor);

    // @ts-ignore
    if (window.PinUtils) {
      // @ts-ignore
      window.PinUtils.build();
      return;
    }

    const existing = document.querySelector('script[src*="pinit.js"]');
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = "//assets.pinterest.com/js/pinit.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40 min-h-screen flex flex-col items-center bg-milk"
    >
      {/* Header */}
      <div className="w-full max-w-5xl px-8 mb-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter uppercase leading-[0.9] max-w-4xl mb-12">
          {isPeruVersion ? "ESTILO & BELLEZA" : "STYLE & BEAUTY"}
        </h1>
        <div className="max-w-2xl">
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed opacity-90">
            {isPeruVersion
              ? "Celebra con estilo. Este fin de semana es el lienzo perfecto. Vístete elegante, radiante, increíble."
              : <>Our devotion to style and fearless expression runs deep. <br /><br /> This weekend is the ultimate canvas. We invite you to dress elegantly, radiant, extra.</>
            }
          </p>
        </div>
      </div>

      {/* Moodboards Section */}
      <div className="w-full max-w-5xl px-8 mb-24">
        <div className="border-t border-pitch-black/10 pt-12 space-y-12">
          <p className="text-xs tracking-widest font-sans uppercase opacity-60">
            {isPeruVersion ? "Inspiración:" : "Style Inspo:"}
          </p>

          <div className={isPeruVersion ? "flex flex-col" : "grid grid-cols-1 md:grid-cols-2 gap-12"}>
            {/* Act I Moodboard — English only */}
            {!isPeruVersion && (
              <div className="space-y-6">
                <div className="p-8 border border-pitch-black/10 flex flex-col h-full">
                  <div className="mb-8 space-y-4">
                    <p className="text-[10px] tracking-widest font-sans uppercase opacity-40">Act I: Prelude</p>
                    <h3 className="text-2xl font-serif italic">Cocktail Chic —</h3>
                    <p className="font-sans text-sm leading-relaxed opacity-80">
                      <span className="font-bold uppercase tracking-wider">ACT I: WELCOME PARTY.</span> Think stylish comfort for a sunset gathering.
                    </p>
                  </div>
                  <div className="w-full overflow-hidden rounded-sm mt-auto">
                    <a
                      data-pin-do="embedBoard"
                      data-pin-board-width="auto"
                      data-pin-scale-height="400"
                      data-pin-scale-width="80"
                      href="https://www.pinterest.com/karentelge/juankar-chic/"
                    ></a>
                  </div>
                </div>
              </div>
            )}

            {/* Act II & III Moodboard */}
            <div className="space-y-6">
              <div className="p-8 border border-pitch-black/10 flex flex-col h-full">
                <div className="mb-8 space-y-4">
                  <p className="text-[10px] tracking-widest font-sans uppercase opacity-40">
                    {isPeruVersion ? "Actos I & II: Portal" : "Act II & III: Portal"}
                  </p>
                  <h3 className="text-2xl font-serif italic">
                    {isPeruVersion ? "Elegancia —" : "Fashionably Elegant —"}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed opacity-80">
                    {isPeruVersion
                      ? <><span className="font-bold uppercase tracking-wider">ACTOS I & II: CEREMONIA Y CELEBRACIÓN.</span> Vestido largo, traje y corbata — con tu propio estilo.</>
                      : <><span className="font-bold uppercase tracking-wider">ACTS II & III: WEDDING CEREMONY & RECEPTION.</span> Long dress, Suit &amp; Tie, but make it fun instead.</>
                    }
                  </p>
                </div>
                {!isPeruVersion && <div ref={pinContainerRef} className="w-full overflow-hidden rounded-sm mt-auto" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hair & Make-up Section */}
      <div className="w-full max-w-5xl px-8 mb-24">
        <div className="border-t border-pitch-black/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">
                  {isPeruVersion ? "CABELLO & MAQUILLAJE" : "HAIR & MAKE-UP"}
                </h2>
              </div>

              <div className="space-y-8">
                <p className="text-[10px] tracking-widest font-sans uppercase font-bold opacity-40">
                  {isPeruVersion ? "ARTISTAS DE MAQUILLAJE:" : "MAKEUP ARTISTS:"}
                </p>

                {[
                  { name: "Cinthia Mejia", phone: "+51 972 189 441", ig: "https://www.instagram.com/cinthiamejiabeautyartist?igsh=MWk3cThid2JvYXM0eg==" },
                  { name: "Stef Quiroz", ig: "https://www.instagram.com/stefquirozhairstylist?igsh=MTlzMDZ0ZHg4bHhvcA==" },
                  { name: "Marilyn Córdova", phone: "+51 944 296 305", ig: "https://www.instagram.com/marilyncordova_?igsh=MWx6YXBteW5nOTQ2eg==" },
                  { name: "Carolina Indacoche Studio", phone: "+51 986 670 055", ig: "https://www.instagram.com/carolinaindacocheastudio?igsh=MTV1OHB3bzI2cmtxNw==" },
                  { name: "Paloma Díaz Makeup", ig: "https://www.instagram.com/palomadiazmakeup/" },
                  { name: "Almendra Castellanos", ig: "https://www.instagram.com/almendrabridalstudio?igsh=MXEzMHp2d2xlaWFpZw==" },
                  { name: "Miranda Salaverry", phone: "+51 915 993 471", ig: "https://www.instagram.com/mirandabeautystudio_?igsh=MWR4OTlweDAxb2g0cQ==" },
                  { name: "Rafaella Cayo", phone: "+51 97656 2340", ig: "https://www.instagram.com/rafaellacayomakeup?igsh=MWxldTJjMGV1cmdjdQ==" },
                  { name: "Chris Matta", ig: "https://www.instagram.com/christmatta?igsh=OXh4ZjNoNHBpaW11" }
                ].map((artist, i) => (
                  <div key={i} className="space-y-2 border-b border-pitch-black/5 pb-4">
                    <div className="flex justify-between items-baseline">
                      <p className="font-sans text-sm font-bold uppercase tracking-wider">{artist.name}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                      <a
                        href={artist.ig}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity"
                      >
                        Instagram
                      </a>
                      {artist.phone && (
                        <a
                          href={`https://wa.me/${artist.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity"
                        >
                          WhatsApp: {artist.phone}
                        </a>
                      )}
                    </div>
                  </div>
                ))}

                <div className="p-6 bg-surface-low border border-pitch-black/5 space-y-4 mt-8">
                  <p className="text-[10px] tracking-widest font-sans uppercase font-bold">
                    {isPeruVersion ? "Reserva anticipada:" : "Booking Note:"}
                  </p>
                  <p className="font-sans text-xs leading-relaxed opacity-70">
                    {isPeruVersion
                      ? "Recomendamos reservar con semanas de anticipación — mayo es temporada alta en Lima."
                      : "We recommend booking at least a few weeks in advance as May is a busy wedding season in Lima."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
