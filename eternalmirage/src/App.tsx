/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Asterisk } from "lucide-react";
import { useEffect, useRef } from "react";
import eternalCircle from "./eternalmiragecircle.png";
import bgVideo from "./shader-lab-2026-04-22T00-13-47.webm";

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative min-h-screen font-sans selection:bg-white/20 overflow-x-hidden bg-white text-ink">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 bg-[#1c1c1c]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.15] object-[65%_center] transition-opacity duration-700 ease-in-out"
        >
          <source src={bgVideo} type="video/webm" />
        </video>
        {/* Subtle Overlay for Readability */}
        <div className="absolute inset-0 bg-[#000000]/10" />
        <div className="absolute inset-0 bg-[#F9F7F2]/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-grainy opacity-10 pointer-events-none" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[720px] mx-auto px-8 md:px-12 py-24 md:py-32"
      >
        {/* Brand Header */}
        <motion.header variants={itemVariants} className="mb-12">
          <div className="mb-12 relative">
            <h1 className="font-brand text-4xl md:text-7xl leading-none tracking-tight flex items-baseline justify-center drop-shadow-2xl">
              <span className="relative inline-flex items-baseline">
                <span className="font-script text-[5.5rem] md:text-[9rem] absolute -left-[0.35em] md:-left-[0.45em] -top-[0.2em] text-white italic leading-none select-none opacity-90 drop-shadow-sm">E</span>
                <span className="font-medium uppercase translate-x-[0.1em] text-white">ternal</span>
              </span>
              <span className="relative inline-flex items-baseline ml-8 md:ml-10">
                <span className="font-script text-[5.5rem] md:text-[9rem] absolute -left-[0.35em] md:-left-[0.4em] -top-[0.2em] text-white italic leading-none select-none opacity-90 drop-shadow-sm">M</span>
                <span className="font-medium uppercase translate-x-[0.15em] text-white">irage</span>
              </span>
            </h1>
          </div>
          <div className="flex flex-col text-center drop-shadow-md">
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/80">
              Máncora, Peru
            </p>
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.4em] text-white/80 mt-2">
              May 24 – 27, 2026
            </p>
          </div>
        </motion.header>

        {/* UNIFIED CONTENT BOX */}
        <motion.div variants={itemVariants} className="p-[2px] bg-gradient-to-r from-[#000000] via-[#ffffff] to-[#000000] animate-chrome">
          <div className="bg-white flex flex-col shadow-2xl shadow-black/40">
            {/* ITINERARY */}
            <div className="p-8 md:p-12 space-y-16">
              <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-black text-center">Itinerary</h2>
              
              <div className="relative pl-8 md:pl-12 ml-4 md:ml-6 border-l border-black/10 space-y-24">
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 rounded-full bg-sand border-2 border-black flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50">Sunday, May 24th</p>
                      <h3 className="font-serif text-lg uppercase tracking-wider text-black">Arrival</h3>
                    </div>
                    <div className="space-y-4 max-w-lg">
                      <p className="font-sans text-[13px] leading-relaxed text-black/80">
                        We'll board LP2255 together to Talara at 7 p.m. We'll have drivers waiting for us to ride over to Máncora, it's a 90-minute ride. We'll check-in at our villas, get some rest.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 rounded-full bg-sand border-2 border-black flex items-center justify-center">
                    <Asterisk className="w-2.5 h-2.5 text-black" />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50">Monday, May 25th</p>
                      <h3 className="font-serif text-lg uppercase tracking-wider text-black">Eternal Mirage</h3>
                    </div>
                    
                    <div className="space-y-10 pl-4 border-l border-black/5">
                      <div className="space-y-2">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/40">Morning</p>
                        <p className="font-sans text-[13px] leading-relaxed text-black/80">
                          We'll get the day started with an ocean dip, yoga, and breakfast.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/40">Noon</p>
                        <p className="font-sans text-[13px] leading-relaxed text-black/80">
                          We'll reconvene at 12PM at Rosa de Mar (Main House) for Eternal Mirage, where the soundwaves merge with the ocean.
                          <br />
                          <span className="inline-block mt-1">Let us be your guide.</span>
                        </p>
                        <p className="pt-2 text-[10px] font-serif italic text-black/70">
                          music curation by Ro, Italo, Bastian, Delmar, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 rounded-full bg-sand border-2 border-black flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50">Tuesday, May 26th</p>
                      <h3 className="font-serif text-lg uppercase tracking-wider text-black">A Day in Las Positas</h3>
                    </div>
                    <div className="space-y-6 pl-4 border-l border-black/5">
                      <div className="space-y-2">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/40">Morning</p>
                        <p className="font-sans text-[13px] leading-relaxed text-black/80 max-w-lg">
                          We're arranging early morning surf sessions. The full lesson takes ~4 hrs including transportation. Let us know through WhatsApp if you're interested.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/40">Afternoon</p>
                        <p className="font-sans text-[13px] leading-relaxed text-black/80 max-w-lg text-balance">
                          We will reconvene at the main house for some poolside vibes and head to the town for one final night together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="relative">
                  <div className="absolute -left-[33px] md:-left-[49px] top-2 w-4 h-4 rounded-full bg-sand border-2 border-black flex items-center justify-center">
                    <div className="w-2 h-[2px] bg-black rotate-45" />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-1">
                      <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50">Wednesday, May 27th</p>
                      <h3 className="font-serif text-lg uppercase tracking-wider text-black">Check-out</h3>
                    </div>
                    <div className="space-y-6 max-w-lg">
                      <p className="font-sans text-[13px] leading-relaxed text-black/80">
                        Eternally grateful that you came all this way.
                      </p>
                      <p className="font-sans text-[13px] leading-relaxed text-black/80">
                        Since we may have different departures, we will coordinate returns with those leaving at the same time. We will share the contact information of various taxi drivers via WhatsApp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RESIDENCES */}
            <div className="p-12 space-y-16">
              <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-black text-center">Residences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <a href="https://mancoracasarosadelmar.com/index.html" target="_blank" rel="noopener noreferrer" className="block group">
                    <h4 className="font-serif text-lg uppercase text-black group-hover:underline underline-offset-8 decoration-black/30 transition-all">Casa Rosa del Mar</h4>
                    <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50 mt-4">Islanders</p>
                    <p className="font-sans text-[13px] text-black/80 mt-2">Karen, Juanca, Italo, Rodolfo, Amanda, Nico, Cata, JuanPa, Manu, Andy.</p>
                  </a>
                </div>
                <div className="space-y-4">
                  <a href="https://mancorapuntaala.com/casa-punta-ala-2/" target="_blank" rel="noopener noreferrer" className="block group">
                    <h4 className="font-serif text-lg uppercase text-black group-hover:underline underline-offset-8 decoration-black/30 transition-all">Punta Ala + Punta Alita</h4>
                    <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-black/50 mt-4">Islanders</p>
                    <p className="font-sans text-[13px] text-black/80 mt-2 text-balance leading-relaxed">Mica, Adam, Andre, Nico, Tammy, Lara, Morgan, Jose Ignacio, Nico, Sof, Hans, Dani, Bastian, Fabi, Drew, Rafa, Meli, Delmar.</p>
                  </a>
                </div>
              </div>
              
              <p className="text-[9px] font-sans text-black/40 uppercase tracking-widest text-center italic">
                Properties are 10m away from each other.
              </p>
            </div>

            {/* FOOD & DRINKS */}
            <div className="p-12 space-y-16">
              <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-black text-center">Food & Drinks</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="font-serif text-base uppercase tracking-wider text-black">In-house Chef</h3>
                  <p className="font-sans text-[13px] leading-relaxed text-black/80">
                    Each house comes with full staff + chef. We'll divide groceries evenly for simplicity and have curated a menu full of ocean side piqueos, ceviche, and Peruvian classics.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="font-serif text-base uppercase tracking-wider text-black">Alcohol</h3>
                  <p className="font-sans text-[13px] leading-relaxed text-black/80">
                    We'll place one bulk order for our entire stay.
                  </p>
                </div>
              </div>
              
              <p className="text-[9px] font-sans text-black/40 uppercase tracking-widest text-center italic">
                * Cost will be divided per person.
              </p>
            </div>

            {/* STYLE */}
            <div className="p-12 space-y-16 flex flex-col items-center text-center">
              <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-black text-center">Style</h2>
              <div className="flex gap-12">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-black/40">Moodboard TBD</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FOOTER */}
        <footer className="pt-32 pb-48 flex flex-col items-center gap-16">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="w-32 h-32 md:w-48 md:h-48"
          >
            <img 
              src={eternalCircle} 
              alt="Brand Mark" 
              className="w-full h-full object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </footer>
      </motion.div>
    </main>
  );
}
