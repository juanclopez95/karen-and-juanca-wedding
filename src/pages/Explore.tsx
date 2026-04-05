import { motion } from "motion/react";

export default function Explore() {
  const sections = [
    {
      title: "COASTAL LIMA",
      items: [
        { name: "Larcomar", desc: "Cliffside shopping & dining with Pacific views.", eta: "2 min walk" },
        { name: "The Malecón", desc: "Scenic coastal path stretching through Miraflores.", eta: "1 min walk" },
        { name: "Huaca Pucllana", desc: "Pre-Incan pyramid in the heart of the city.", eta: "8 min drive" },
        { name: "La Rosa Náutica", desc: "Iconic restaurant perched over the ocean waves.", eta: "5 min drive" },
        { name: "Costa Verde", desc: "The dramatic highway and beach strip below the cliffs.", eta: "5 min drive" },
        { name: "Parque del Amor", desc: "Dedicated to lovers, featuring Gaudi-inspired mosaics.", eta: "10 min walk" },
      ],
      images: [
        "https://images.unsplash.com/photo-1577587230708-187fdbf4a511?auto=format&fit=crop&q=80&w=800", // Larcomar
        "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=800", // Costa Verde
      ]
    },
    {
      title: "ARTS & CULTURE",
      items: [
        { name: "Barranco Walk", desc: "Bohemian district filled with street art and history.", eta: "10 min drive" },
        { name: "Puente de los Suspiros", desc: "The famous \"Bridge of Sighs\" in Barranco.", eta: "12 min drive" },
        { name: "MATE Museum", desc: "Dedicated to the photography of Mario Testino.", eta: "15 min drive" },
        { name: "Museo Larco", desc: "Pre-Columbian art housed in an 18th-century mansion.", eta: "25 min drive" },
        { name: "MAC Lima", desc: "Contemporary Art Museum with beautiful gardens.", eta: "12 min drive" },
        { name: "Dedalo", desc: "A curated gallery and shop for Peruvian handicrafts.", eta: "12 min drive" },
        { name: "Ayahuasca Restobar", desc: "A stunning converted mansion for evening cocktails.", eta: "12 min drive" },
      ],
      images: [
        "https://images.unsplash.com/photo-1599147782282-982097701624?auto=format&fit=crop&q=80&w=800", // Barranco
        "https://images.unsplash.com/photo-1531968455001-5c5277a9b111?auto=format&fit=crop&q=80&w=800", // Puente de los Suspiros
      ]
    },
    {
      title: "HISTORY",
      items: [
        { name: "Plaza de Armas", desc: "The majestic main square of Lima.", eta: "35 min drive" },
        { name: "Cathedral of Lima", desc: "A landmark of colonial architecture.", eta: "35 min drive" },
        { name: "Convento de San Francisco", desc: "Famous for its library and catacombs.", eta: "35 min drive" },
        { name: "Palacio de Gobierno", desc: "Watch the changing of the guard ceremony.", eta: "35 min drive" },
        { name: "Magic Water Circuit", desc: "A Guinness record-holding fountain park.", eta: "20 min drive" },
        { name: "Casa de Aliaga", desc: "The oldest house in the Americas, owned by the same family since 1535.", eta: "35 min drive" },
      ],
      images: [
        "https://images.unsplash.com/photo-1585654901283-22515e39399e?auto=format&fit=crop&q=80&w=800", // Plaza de Armas
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80&w=800", // Cathedral
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-40 min-h-screen flex flex-col items-center bg-milk"
    >
      {/* Header */}
      <div className="w-full max-w-4xl px-8 mb-24 space-y-4">
        <h1 className="text-6xl md:text-8xl font-serif tracking-tighter uppercase leading-none">
          BEYOND THE GARÚA
        </h1>
        <p className="text-xl md:text-2xl font-serif italic opacity-60">
          A guide to the city of kings & hidden spirits
        </p>
      </div>

      {/* Sections */}
      <div className="w-full max-w-4xl px-8 space-y-32">
        {sections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">{section.title}</h2>
              <div className="w-full h-[1px] bg-pitch-black opacity-20" />
            </div>

            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-sans text-sm md:text-base leading-relaxed">
                    <span className="font-bold">{item.name}</span> — {item.desc}
                  </p>
                  <p className="text-[10px] tracking-widest font-sans opacity-40 uppercase">
                    ETA: {item.eta} from Intercontinental Hotel (Barranco)
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
              {section.images.map((img, i) => (
                <div key={i} className="w-full max-w-[300px] aspect-[3/4] overflow-hidden bg-surface-low">
                  <img 
                    src={img} 
                    alt={`${section.title} ${i}`}
                    className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to picsum if unsplash fails
                      const target = e.target as HTMLImageElement;
                      target.src = `https://picsum.photos/seed/${section.title.replace(/\s/g, '')}${i}/800/1000?grayscale`;
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
