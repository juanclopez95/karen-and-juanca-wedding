import { motion } from "motion/react";

export default function Eat() {
  const isColombiaVersion = typeof window !== "undefined" && sessionStorage.getItem("colombiaContext") === "1";
  const categories = [
    {
      title: "Classic Peruvian & Seafood",
      items: [
        { name: "El Mercado", price: "$$$", mapsUrl: "https://maps.app.goo.gl/oTcxFRz4yUgW7NDcA", eta: "8 min", rsvpUrl: "http://www.elmercado.pe/", ig: "elmercadorestaurante", desc: "Fresh, vibrant seafood in a casual setting." },
        { name: "La Mar", price: "$$$", mapsUrl: "https://maps.app.goo.gl/Ag2m2pXZAarCnQX66", eta: "10 min", rsvpUrl: "#", ig: "lamarcebicherialima", desc: "The quintessential cebichería experience (Walk-in only)." },
        { name: "Central", price: "$$$$", mapsUrl: "https://maps.app.goo.gl/8jjAKCivEU8KGtxK7", eta: "12 min", rsvpUrl: "https://centralrestaurante.com.pe/reservas.html", ig: "centralrest", desc: "The world-renowned flagship of Peruvian gastronomy." },
        { name: "Canta Rana", price: "$$", mapsUrl: "https://maps.app.goo.gl/eom2LA13rHLxj53G6", eta: "13 min", rsvpUrl: "#", ig: "cantaranaoficial", desc: "A beloved local classic for ceviche and atmosphere (Walk-in only)." },
      ]
    },
    {
      title: "Criollo",
      items: [
        { name: "Panchita", price: "$$$", mapsUrl: "https://maps.app.goo.gl/iXnRL5fMaB96F6m38", eta: "7 min", rsvpUrl: "https://panchita.pe/", ig: "panchitasazoncriolla", desc: "The best of Peruvian street food and anticuchos." },
        { name: "Alegria", price: "$$", mapsUrl: "https://maps.app.goo.gl/iXnRL5fMaB96F6m38", eta: "8 min", rsvpUrl: "https://wa.link/36qi28", ig: "alegria.picanteria.piurana", desc: "Traditional picantería flavors with a modern twist." },
        { name: "Isolina", price: "$$$", mapsUrl: "https://maps.app.goo.gl/oyQY31QBXRiRj3yt8", eta: "12 min", rsvpUrl: "https://isolina.pe/reservas", ig: "isolinataberna", desc: "Traditional limeño tavern for hearty, authentic dishes." },
      ]
    },
    {
      title: "Nikkei",
      items: [
        { name: "Maido", price: "$$$$", mapsUrl: "https://maps.app.goo.gl/nQAZE6iJB8LpHzEQA", eta: "5 min", rsvpUrl: "https://www.maido.pe/reservas", ig: "mitsuharu_maido", desc: "Incredible Nikkei fusion experience." },
        { name: "Tomo", price: "$$$", mapsUrl: "https://maps.app.goo.gl/JyhmDJZcNhZBeuPL9", eta: "8 min", rsvpUrl: "https://tomococinanikkei.meitre.com/?fbclid=PAAaa4ogakxsIsKxSl8VwKLt8EXzJ7pS--FEUGC2BfIad-ocfMWaeOhb273Z4", ig: "tomococinanikkei", desc: "Nikkei cuisine with clean, precise flavors." },
      ]
    },
    {
      title: "Café",
      items: [
        { name: "Amarena", price: "$$", mapsUrl: "https://maps.app.goo.gl/82vnovWQGpevX4E99", eta: "6 min", rsvpUrl: "#", ig: "amarena.___", desc: "Charming spot for specialty coffee and pastries." },
        { name: "San Antonio", price: "$$", mapsUrl: "https://maps.app.goo.gl/9PwejVQHhwrsC5iY9", eta: "8 min", rsvpUrl: "https://pasteleriasanantonio.com/", ig: "pasteleria_sanantonio", desc: "A classic limeño pastry shop and cafe." },
        { name: "Pan De La Chola", price: "$$", mapsUrl: "https://maps.app.goo.gl/GrWhPorpVQ12aiaC9", eta: "10 min", rsvpUrl: "https://www.elpandelachola.com/", ig: "elpandelachola", desc: "Artisanal bread and coffee for a casual morning." },
        { name: "Entremigas", price: "$$", mapsUrl: "https://www.google.com/maps/search/Entremigas+Lima", eta: "10 min", rsvpUrl: "#", ig: "entremigas.lima", desc: "Cozy bakery focused on sourdough and quality coffee." },
        { name: "Demo", price: "$$", mapsUrl: "https://maps.app.goo.gl/jBwxzxmzk6htJ6XD7", eta: "12 min", rsvpUrl: "#", ig: "demo.lima", desc: "Modern bakery and cafe in the heart of Barranco." },
      ]
    },
    {
      title: "Cocktails",
      items: [
        { name: "Santería Bar", price: "$$", mapsUrl: "https://maps.app.goo.gl/XrkRQ5fpifacvnt4A", eta: "6 min", rsvpUrl: "#", ig: "santeria.bar", desc: "Mystical vibes and creative cocktails in the heart of Miraflores." },
        { name: "Damián", price: "$$$", mapsUrl: "https://maps.app.goo.gl/X7QjSxoAurtXq2AW8", eta: "10 min", rsvpUrl: "https://damian.club/", ig: "damian.club", desc: "Exclusive club with a focus on electronic music and late-night energy." },
        { name: "CORDIAL", price: "$$", mapsUrl: "https://maps.app.goo.gl/T6wMX9dV9SdSc28BA", eta: "10 min", rsvpUrl: "https://wa.me/51957801199", ig: "cordial_barranco", desc: "Intimate and friendly bar with a great selection of spirits." },
        { name: "Ayahuasca", price: "$$$", mapsUrl: "https://maps.app.goo.gl/Dw62YwsL6NCvN3wB9", eta: "11 min", rsvpUrl: "https://ayahuascarestobar.com/", ig: "ayahuascarestobar", desc: "A stunning converted mansion offering a unique sensory experience." },
        { name: "Carnaval", price: "$$$", mapsUrl: "https://maps.app.goo.gl/2jMTi4SosXqfKQyW6", eta: "12 min", rsvpUrl: "https://carnavalbar.com/", ig: "carnavalbar", desc: "World-class cocktails and an immersive bar experience." },
        { name: "Lady Bee", price: "$$", mapsUrl: "https://www.google.com/maps/search/Lady+Bee+Lima", eta: "8 min", rsvpUrl: "#", ig: "ladybee.lima", desc: "Charming bar with creative cocktails and a great vibe." },
      ]
    }
  ];


  const categoriesEs = [
    {
      title: "Clásico Peruano & Mariscos",
      items: [
        { name: "El Mercado", price: "$$$", mapsUrl: "https://maps.app.goo.gl/oTcxFRz4yUgW7NDcA", eta: "8 min", rsvpUrl: "http://www.elmercado.pe/", ig: "elmercadorestaurante", desc: "Mariscos frescos y vibrantes en un ambiente relajado." },
        { name: "La Mar", price: "$$$", mapsUrl: "https://maps.app.goo.gl/Ag2m2pXZAarCnQX66", eta: "10 min", rsvpUrl: "#", ig: "lamarcebicherialima", desc: "La experiencia cebichería por excelencia (sin reserva)." },
        { name: "Central", price: "$$$$", mapsUrl: "https://maps.app.goo.gl/8jjAKCivEU8KGtxK7", eta: "12 min", rsvpUrl: "https://centralrestaurante.com.pe/reservas.html", ig: "centralrest", desc: "El buque insignia de la gastronomía peruana, reconocido mundialmente." },
        { name: "Canta Rana", price: "$$", mapsUrl: "https://maps.app.goo.gl/eom2LA13rHLxj53G6", eta: "13 min", rsvpUrl: "#", ig: "cantaranaoficial", desc: "Un clásico local para ceviche y ambiente inigualable (sin reserva)." },
      ]
    },
    {
      title: "Criollo",
      items: [
        { name: "Panchita", price: "$$$", mapsUrl: "https://maps.app.goo.gl/iXnRL5fMaB96F6m38", eta: "7 min", rsvpUrl: "https://panchita.pe/", ig: "panchitasazoncriolla", desc: "Lo mejor de la comida callejera peruana y anticuchos." },
        { name: "Alegria", price: "$$", mapsUrl: "https://maps.app.goo.gl/iXnRL5fMaB96F6m38", eta: "8 min", rsvpUrl: "https://wa.link/36qi28", ig: "alegria.picanteria.piurana", desc: "Sabores tradicionales de picantería con un toque moderno." },
        { name: "Isolina", price: "$$$", mapsUrl: "https://maps.app.goo.gl/oyQY31QBXRiRj3yt8", eta: "12 min", rsvpUrl: "https://isolina.pe/reservas", ig: "isolinataberna", desc: "Taberna limeña tradicional para platos contundentes y auténticos." },
      ]
    },
    {
      title: "Nikkei",
      items: [
        { name: "Maido", price: "$$$$", mapsUrl: "https://maps.app.goo.gl/nQAZE6iJB8LpHzEQA", eta: "5 min", rsvpUrl: "https://www.maido.pe/reservas", ig: "mitsuharu_maido", desc: "Una experiencia de fusión Nikkei increíble." },
        { name: "Tomo", price: "$$$", mapsUrl: "https://maps.app.goo.gl/JyhmDJZcNhZBeuPL9", eta: "8 min", rsvpUrl: "https://tomococinanikkei.meitre.com/?fbclid=PAAaa4ogakxsIsKxSl8VwKLt8EXzJ7pS--FEUGC2BfIad-ocfMWaeOhb273Z4", ig: "tomococinanikkei", desc: "Cocina Nikkei con sabores limpios y precisos." },
      ]
    },
    {
      title: "Café",
      items: [
        { name: "Amarena", price: "$$", mapsUrl: "https://maps.app.goo.gl/82vnovWQGpevX4E99", eta: "6 min", rsvpUrl: "#", ig: "amarena.___", desc: "Lugar encantador para café de especialidad y pasteles." },
        { name: "San Antonio", price: "$$", mapsUrl: "https://maps.app.goo.gl/9PwejVQHhwrsC5iY9", eta: "8 min", rsvpUrl: "https://pasteleriasanantonio.com/", ig: "pasteleria_sanantonio", desc: "Una clásica pastelería y café limeño." },
        { name: "Pan De La Chola", price: "$$", mapsUrl: "https://maps.app.goo.gl/GrWhPorpVQ12aiaC9", eta: "10 min", rsvpUrl: "https://www.elpandelachola.com/", ig: "elpandelachola", desc: "Pan artesanal y café para una mañana relajada." },
        { name: "Entremigas", price: "$$", mapsUrl: "https://www.google.com/maps/search/Entremigas+Lima", eta: "10 min", rsvpUrl: "#", ig: "entremigas.lima", desc: "Panadería acogedora especializada en masa madre y café de calidad." },
        { name: "Demo", price: "$$", mapsUrl: "https://maps.app.goo.gl/jBwxzxmzk6htJ6XD7", eta: "12 min", rsvpUrl: "#", ig: "demo.lima", desc: "Panadería y café moderno en el corazón de Barranco." },
      ]
    },
    {
      title: "Cocteles",
      items: [
        { name: "Santería Bar", price: "$$", mapsUrl: "https://maps.app.goo.gl/XrkRQ5fpifacvnt4A", eta: "6 min", rsvpUrl: "#", ig: "santeria.bar", desc: "Ambiente místico y cocteles creativos en el corazón de Miraflores." },
        { name: "Damián", price: "$$$", mapsUrl: "https://maps.app.goo.gl/X7QjSxoAurtXq2AW8", eta: "10 min", rsvpUrl: "https://damian.club/", ig: "damian.club", desc: "Club exclusivo con enfoque en música electrónica y energía nocturna." },
        { name: "CORDIAL", price: "$$", mapsUrl: "https://maps.app.goo.gl/T6wMX9dV9SdSc28BA", eta: "10 min", rsvpUrl: "https://wa.me/51957801199", ig: "cordial_barranco", desc: "Bar íntimo y acogedor con gran selección de destilados." },
        { name: "Ayahuasca", price: "$$$", mapsUrl: "https://maps.app.goo.gl/Dw62YwsL6NCvN3wB9", eta: "11 min", rsvpUrl: "https://ayahuascarestobar.com/", ig: "ayahuascarestobar", desc: "Una impresionante mansión convertida con una experiencia sensorial única." },
        { name: "Carnaval", price: "$$$", mapsUrl: "https://maps.app.goo.gl/2jMTi4SosXqfKQyW6", eta: "12 min", rsvpUrl: "https://carnavalbar.com/", ig: "carnavalbar", desc: "Cocteles de clase mundial y una experiencia de bar inmersiva." },
        { name: "Lady Bee", price: "$$", mapsUrl: "https://www.google.com/maps/search/Lady+Bee+Lima", eta: "8 min", rsvpUrl: "#", ig: "ladybee.lima", desc: "Bar encantador con cocteles creativos y buen ambiente." },
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
      <div className="w-full max-w-4xl px-8 mb-24 space-y-6">
        <div className="relative inline-block max-w-[18ch]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter uppercase leading-[0.9] pr-12 md:pr-24">
            {isColombiaVersion ? "\u00bfVINISTE POR NOSOTROS O POR EL CEVICHE?" : "DID YOU COME FOR US OR THE CEVICHE?"}
          </h1>
          <img 
            src="./kirafood.png" 
            alt="Kira Food" 
            className="absolute -right-4 -top-8 md:-right-12 md:-top-12 h-20 md:h-32 w-auto object-contain rotate-[15deg] drop-shadow-xl z-10" 
            style={{
              maskImage: 'radial-gradient(circle, black 60%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 95%)'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/kira_no_bg.png";
            }}
          />
        </div>
        <p className="text-xl md:text-2xl font-serif italic opacity-80">
          {isColombiaVersion ? "Tu gu\u00eda culinaria de Lima" : "Your culinary guide to Lima"}
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl px-8 space-y-32">
        {(isColombiaVersion ? categoriesEs : categories).map((category, catIdx) => (
          <motion.div 
            key={catIdx}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">{category.title}</h2>
              <div className="w-full h-[1px] bg-pitch-black opacity-20" />
            </div>

            <div className="space-y-12">
              {category.items.map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <h3 className="font-serif text-xl md:text-2xl italic">
                      {item.name} <span className="text-sm font-sans not-italic opacity-40 ml-2">{item.price}</span>
                    </h3>
                    <span className="text-[10px] md:text-xs tracking-metadata font-serif italic opacity-40 uppercase">
                      {isColombiaVersion ? `ETA: ${item.eta} desde el Hotel Intercontinental` : `ETA: ${item.eta} from Intercontinental Hotel`}
                    </span>
                  </div>
                  <p className="font-sans text-sm md:text-base leading-relaxed opacity-80">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4">
                    {item.rsvpUrl !== "#" && (
                      <a 
                        href={item.rsvpUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] tracking-[0.2em] font-sans font-bold underline hover:opacity-60 transition-opacity block uppercase"
                      >
                        {isColombiaVersion ? "(RESERVAR)" : "(RSVP)"}
                      </a>
                    )}
                    {item.rsvpUrl !== "#" && <span className="text-[10px] opacity-20">/</span>}
                    <a 
                      href={`https://www.instagram.com/${item.ig}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] tracking-[0.2em] font-sans font-bold underline hover:opacity-60 transition-opacity block uppercase"
                    >
                      (IG)
                    </a>
                    <span className="text-[10px] opacity-20">/</span>
                    <a 
                      href={item.mapsUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] tracking-[0.2em] font-sans font-bold underline hover:opacity-60 transition-opacity block uppercase"
                    >
                      {isColombiaVersion ? "(MAPA)" : "(MAPS)"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
