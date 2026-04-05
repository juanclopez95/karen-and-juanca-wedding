import { useEffect } from "react";
import { motion } from "motion/react";

export default function Style() {
  useEffect(() => {
    // Load Pinterest script
    const script = document.createElement("script");
    script.src = "//assets.pinterest.com/js/pinit.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//assets.pinterest.com/js/pinit.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
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
          STYLE & BEAUTY
        </h1>
        <div className="max-w-2xl space-y-6">
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed opacity-90">
            Our devotion to style and fearless expression runs deep. This weekend is the ultimate canvas.
          </p>
          <p className="text-lg md:text-xl font-serif leading-relaxed opacity-80">
            We invite you to dress elegantly, radiant, extra.
          </p>
        </div>
      </div>

      {/* Moodboards Section */}
      <div className="w-full max-w-5xl px-8 mb-24">
        <div className="border-t border-pitch-black/10 pt-12 space-y-12">
          <p className="text-xs tracking-widest font-sans uppercase opacity-60">Live moodboards from Pinterest:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Act I Moodboard */}
            <div className="space-y-6">
              <div className="p-8 border border-pitch-black/10 flex flex-col h-full">
                <div className="mb-8 space-y-4">
                  <p className="text-[10px] tracking-widest font-sans uppercase opacity-40">Act I: Prelude</p>
                  <h3 className="text-2xl font-serif italic">Sunset Chic —</h3>
                  <p className="font-sans text-sm leading-relaxed opacity-80">
                    <span className="font-bold uppercase tracking-wider">ACT I: WELCOME PARTY.</span> Casual Chic. Think stylish comfort for a sunset gathering. <span className="italic opacity-70">Beauty: Soft, natural makeup with undone texture or a relaxed ponytail.</span>
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

            {/* Act II & III Moodboard */}
            <div className="space-y-6">
              <div className="p-8 border border-pitch-black/10 flex flex-col h-full">
                <div className="mb-8 space-y-4">
                  <p className="text-[10px] tracking-widest font-sans uppercase opacity-40">Act II & III: Portal</p>
                  <h3 className="text-2xl font-serif italic">Fashionably Elegant —</h3>
                  <p className="font-sans text-sm leading-relaxed opacity-80">
                    <span className="font-bold uppercase tracking-wider">ACTS II & III: WEDDING CEREMONY & RECEPTION.</span> Fashionably elegant, Suit & Tie, but spice it up. <span className="italic opacity-70">Ceremony is on grass; please consider block heels or flats.</span>
                  </p>
                </div>
                <div className="w-full overflow-hidden rounded-sm mt-auto">
                  <a 
                    data-pin-do="embedBoard" 
                    data-pin-board-width="auto" 
                    data-pin-scale-height="400" 
                    data-pin-scale-width="80" 
                    href="https://www.pinterest.com/karentelge/fashionably-elegant/"
                  ></a>
                </div>
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
                <h2 className="text-3xl md:text-4xl font-serif tracking-tight uppercase">HAIR & MAKE-UP</h2>
                <p className="font-serif italic opacity-70">For our female guests looking to book professional services in Lima.</p>
              </div>

              <div className="space-y-10">
                {/* Artist 1 */}
                <div className="space-y-3 border-b border-pitch-black/5 pb-6">
                  <div className="flex justify-between items-baseline">
                    <p className="font-sans text-sm font-bold uppercase tracking-wider">Artist Name / Studio</p>
                    <p className="text-[10px] font-sans opacity-50">$$$</p>
                  </div>
                  <p className="font-sans text-sm opacity-70 leading-relaxed">
                    Specializing in editorial glam and natural finishes. 
                  </p>
                  <div className="flex gap-4 pt-2">
                    <a href="#" className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity">Instagram</a>
                    <a href="#" className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity">WhatsApp / Reserve</a>
                  </div>
                </div>

                {/* Artist 2 */}
                <div className="space-y-3 border-b border-pitch-black/5 pb-6">
                  <div className="flex justify-between items-baseline">
                    <p className="font-sans text-sm font-bold uppercase tracking-wider">Artist Name / Studio</p>
                    <p className="text-[10px] font-sans opacity-50">$$</p>
                  </div>
                  <p className="font-sans text-sm opacity-70 leading-relaxed">
                    Known for sophisticated updos and long-lasting wedding looks.
                  </p>
                  <div className="flex gap-4 pt-2">
                    <a href="#" className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity">Instagram</a>
                    <a href="#" className="text-[10px] font-sans font-bold underline tracking-widest uppercase hover:opacity-50 transition-opacity">WhatsApp / Reserve</a>
                  </div>
                </div>

                <div className="p-6 bg-surface-low border border-pitch-black/5 space-y-4">
                  <p className="text-[10px] tracking-widest font-sans uppercase font-bold">Booking Note:</p>
                  <p className="font-sans text-xs leading-relaxed opacity-70">
                    We recommend booking at least 2-3 months in advance as May is a busy wedding season in Lima. Price ranges typically vary between $80 - $200 for full hair and makeup services.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-[4/5] overflow-hidden bg-surface-low">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800" 
                  alt="Beauty Inspiration"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[10px] tracking-widest font-sans uppercase opacity-40">Grooming Standards</p>
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  For the gentlemen: Sharp, clean, and intentional. We encourage a polished look that complements the formal nature of the celebration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
