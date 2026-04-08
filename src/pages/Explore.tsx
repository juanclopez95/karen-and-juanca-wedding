import { motion } from "motion/react";

export default function Explore() {
  const isColombiaVersion = typeof window !== "undefined" && sessionStorage.getItem("colombiaContext") === "1";
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
      ]
    }
  ];


  const sectionsEs = [
    {
      title: "LIMA COSTERA",
      items: [
        { name: "Larcomar", desc: "Tiendas y restaurantes al borde del acantilado con vistas al Pacífico.", eta: "2 min walk" },
        { name: "The Malecón", desc: "Pintoresco camino costero a lo largo de Miraflores.", eta: "1 min walk" },
        { name: "Huaca Pucllana", desc: "Pirámide pre-inca en el corazón de la ciudad.", eta: "8 min drive" },
        { name: "La Rosa Náutica", desc: "Restaurante icónico sobre las olas del océano.", eta: "5 min drive" },
        { name: "Costa Verde", desc: "La dramática carretera y franja de playa bajo los acantilados.", eta: "5 min drive" },
        { name: "Parque del Amor", desc: "Dedicado a los amantes, con mosaicos inspirados en Gaudí.", eta: "10 min walk" },
      ]
    },
    {
      title: "ARTE & CULTURA",
      items: [
        { name: "Barranco Walk", desc: "Barrio bohemio lleno de arte urbano e historia.", eta: "10 min drive" },
        { name: "Puente de los Suspiros", desc: 'El famoso "Puente de los Suspiros" en Barranco.', eta: "12 min drive" },
        { name: "MATE Museum", desc: "Dedicado a la fotografía de Mario Testino.", eta: "15 min drive" },
        { name: "Museo Larco", desc: "Arte precolombino en una mansión del siglo XVIII.", eta: "25 min drive" },
        { name: "MAC Lima", desc: "Museo de Arte Contemporáneo con hermosos jardines.", eta: "12 min drive" },
        { name: "Dedalo", desc: "Galería y tienda curada de artesanías peruanas.", eta: "12 min drive" },
        { name: "Ayahuasca Restobar", desc: "Una impresionante mansión convertida para cocteles nocturnos.", eta: "12 min drive" },
      ]
    },
    {
      title: "HISTORIA",
      items: [
        { name: "Plaza de Armas", desc: "La majestuosa plaza mayor de Lima.", eta: "35 min drive" },
        { name: "Cathedral of Lima", desc: "Un hito de la arquitectura colonial.", eta: "35 min drive" },
        { name: "Convento de San Francisco", desc: "Famoso por su biblioteca y catacumbas.", eta: "35 min drive" },
        { name: "Palacio de Gobierno", desc: "Presencia el cambio de guardia.", eta: "35 min drive" },
        { name: "Magic Water Circuit", desc: "Un parque de fuentes con récord Guinness.", eta: "20 min drive" },
        { name: "Casa de Aliaga", desc: "La casa más antigua de América, en manos de la misma familia desde 1535.", eta: "35 min drive" },
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
          {isColombiaVersion ? "MÁS ALLÁ DE LA GARÚA" : "BEYOND THE GARÚA"}
        </h1>
        <p className="text-xl md:text-2xl font-serif italic opacity-60">
          {isColombiaVersion ? "Una guía a la ciudad de los reyes y espíritus ocultos" : "A guide to the city of kings & hidden spirits"}
        </p>
      </div>

      {/* Sections */}
      <div className="w-full max-w-4xl px-8 space-y-32">
        {(isColombiaVersion ? sectionsEs : sections).map((section, idx) => (
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
                    <span className="font-serif italic text-lg">{item.name}</span> — {item.desc}
                  </p>
                  <p className="text-[10px] md:text-xs tracking-metadata font-serif italic opacity-40 uppercase">
                    {isColombiaVersion ? `ETA: ${item.eta} desde el Hotel Intercontinental (Barranco)` : `ETA: ${item.eta} from Intercontinental Hotel (Barranco)`}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
