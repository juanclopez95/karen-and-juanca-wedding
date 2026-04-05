import { motion } from "motion/react";

export default function Eat() {
  const categories = [
    {
      title: "Classic Peruvian & Seafood",
      items: [
        { name: "El Mercado", price: "$$$", mapsUrl: "https://www.google.com/maps/place/El+Mercado/@-12.108422,-77.041544,17z", eta: "8 min", rsvpUrl: "http://www.elmercado.pe/", ig: "elmercadoperu", desc: "Fresh, vibrant seafood in a casual setting." },
        { name: "La Mar", price: "$$$", mapsUrl: "https://www.google.com/maps/place/La+Mar+Cebicheria/@-12.110756,-77.042322,17z", eta: "10 min", rsvpUrl: "#", ig: "lamarcebicherialima", desc: "The quintessential cebichería experience (Walk-in only)." },
        { name: "Central", price: "$$$$", mapsUrl: "https://www.google.com/maps/place/Central+Restaurante/@-12.154737,-77.022378,17z", eta: "12 min", rsvpUrl: "https://centralrestaurante.com.pe/reservas.html", ig: "centralrest", desc: "The world-renowned flagship of Peruvian gastronomy." },
        { name: "Canta Rana", price: "$$", mapsUrl: "https://www.google.com/maps/place/Canta+Rana/@-12.148892,-77.022211,17z", eta: "13 min", rsvpUrl: "#", ig: "cantarana_barranco", desc: "A beloved local classic for ceviche and atmosphere (Walk-in only)." },
      ]
    },
    {
      title: "Criollo",
      items: [
        { name: "Panchita", price: "$$$", mapsUrl: "https://www.google.com/maps/place/Panchita/@-12.119444,-77.028889,17z", eta: "7 min", rsvpUrl: "https://mesa247.pe/lima/restaurante/panchita", ig: "panchita.pe", desc: "The best of Peruvian street food and anticuchos." },
        { name: "Alegria", price: "$$", mapsUrl: "https://www.google.com/maps/place/Alegr%C3%ADa+Picanter%C3%ADa/@-12.11,-77.03,17z", eta: "8 min", rsvpUrl: "https://mesa247.pe/lima/restaurante/alegria", ig: "alegria.picanteria", desc: "Traditional picantería flavors with a modern twist." },
        { name: "Isolina", price: "$$$", mapsUrl: "https://www.google.com/maps/place/Isolina+Taberna+Peruana/@-12.148556,-77.022122,17z", eta: "12 min", rsvpUrl: "https://isolina.pe/reservas", ig: "isolinataberna", desc: "Traditional limeño tavern for hearty, authentic dishes." },
      ]
    },
    {
      title: "Nikkei",
      items: [
        { name: "Maido", price: "$$$$", mapsUrl: "https://www.google.com/maps/place/Maido/@-12.124722,-77.029444,17z", eta: "5 min", rsvpUrl: "https://www.maido.pe/reservas", ig: "maidonikkei", desc: "Incredible Nikkei fusion experience." },
        { name: "Osaka", price: "$$$$", mapsUrl: "https://www.google.com/maps/search/Osaka+Nikkei+Lima", eta: "10 min", rsvpUrl: "https://osakanikkei.com/es/lima", ig: "osakanikkei", desc: "Sophisticated blend of Japanese techniques and Peruvian flavors." },
        { name: "Kero (Osaka Bar)", price: "$$$", mapsUrl: "https://www.google.com/maps/search/Kero+Osaka+Bar+Lima", eta: "10 min", rsvpUrl: "https://osakanikkei.com/es/lima", ig: "osakanikkei", desc: "The vibrant bar experience at Osaka." },
      ]
    },
    {
      title: "Café",
      items: [
        { name: "Amarena", price: "$$", mapsUrl: "https://www.google.com/maps/place/Amarena+Caf%C3%A9+Urbano/@-12.12,-77.03,17z", eta: "6 min", rsvpUrl: "https://www.instagram.com/amarenacafe/", ig: "amarenacafe", desc: "Charming spot for specialty coffee and pastries." },
        { name: "San Antonio", price: "$$", mapsUrl: "https://www.google.com/maps/search/Pasteleria+San+Antonio+Lima", eta: "8 min", rsvpUrl: "https://pasteleriasanantonio.com/", ig: "pasteleriasanantonio", desc: "A classic limeño pastry shop and cafe." },
        { name: "Pan De La Chola", price: "$$", mapsUrl: "https://www.google.com/maps/place/El+Pan+de+la+Chola/@-12.11,-77.04,17z", eta: "10 min", rsvpUrl: "https://www.elpandelachola.com/", ig: "elpandelachola", desc: "Artisanal bread and coffee for a casual morning." },
        { name: "Entremigas", price: "$$", mapsUrl: "https://www.google.com/maps/search/Entremigas+Lima", eta: "10 min", rsvpUrl: "https://www.instagram.com/entremigas.pe/", ig: "entremigas.pe", desc: "Cozy bakery focused on sourdough and quality coffee." },
        { name: "Demo", price: "$$", mapsUrl: "https://www.google.com/maps/place/Demo+Barranco/@-12.14,-77.02,17z", eta: "12 min", rsvpUrl: "https://www.instagram.com/demo_barranco/", ig: "demo_barranco", desc: "Modern bakery and cafe in the heart of Barranco." },
      ]
    },
    {
      title: "Cocktails",
      items: [
        { name: "Belo Bar", price: "$$$", mapsUrl: "https://www.google.com/maps/place/Belo+Bar/@-12.13,-77.03,17z", eta: "2 min", rsvpUrl: "https://www.belmond.com/hotels/south-america/peru/lima/belmond-miraflores-park/dining", ig: "belmondmiraflorespark", desc: "Sophisticated hotel bar with a curated cocktail list." },
        { name: "Bazar", price: "$$", mapsUrl: "https://www.google.com/maps/place/Bazar+Restobar/@-12.12,-77.03,17z", eta: "5 min", rsvpUrl: "https://wa.me/51944247277", ig: "bazar_restobar", desc: "Vibrant restobar with a great atmosphere and live music." },
        { name: "Santería Bar", price: "$$", mapsUrl: "https://www.google.com/maps/place/Santer%C3%ADa/@-12.12,-77.03,17z", eta: "6 min", rsvpUrl: "https://mesa247.pe/lima/restaurante/santeria", ig: "santeria.bar", desc: "Mystical vibes and creative cocktails in the heart of Miraflores." },
        { name: "Damián", price: "$$$", mapsUrl: "https://www.google.com/maps/search/Damian+Club+Barranco", eta: "10 min", rsvpUrl: "https://damian.club/", ig: "damian.club_", desc: "Exclusive club with a focus on electronic music and late-night energy." },
        { name: "CORDIAL", price: "$$", mapsUrl: "https://www.google.com/maps/place/Cordial/@-12.14,-77.02,17z", eta: "10 min", rsvpUrl: "https://wa.me/51957801199", ig: "cordial_barranco", desc: "Intimate and friendly bar with a great selection of spirits." },
        { name: "Ayahuasca", price: "$$$", mapsUrl: "https://www.google.com/maps/place/Ayahuasca+Restobar/@-12.14,-77.02,17z", eta: "11 min", rsvpUrl: "https://ayahuascarestobar.com/", ig: "ayahuascarestobar", desc: "A stunning converted mansion offering a unique sensory experience." },
        { name: "Carnaval", price: "$$$", mapsUrl: "https://www.google.com/maps/place/Carnaval+Bar/@-12.09,-77.03,17z", eta: "12 min", rsvpUrl: "https://carnavalbar.com/", ig: "carnavalbar", desc: "World-class cocktails and an immersive bar experience." },
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
            DID YOU COME FOR US OR THE CEVICHE?
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
          Your culinary guide to Lima
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl px-8 space-y-32">
        {categories.map((category, catIdx) => (
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
                      ETA: {item.eta} from Intercontinental Hotel
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
                        (RSVP)
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
                      (MAPS)
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
