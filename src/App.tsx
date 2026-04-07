/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import Home from "./pages/Home";
import Peru from "./pages/Peru";
import RSVP from "./pages/RSVP";
import Eat from "./pages/Eat";
import Explore from "./pages/Explore";
import Style from "./pages/Style";
import FAQ from "./pages/FAQ";

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persist peru context: if user entered via /peru, keep them in the peru experience
  // across all sub-pages (Eat, Style, etc.) so HOME never routes back to Act I.
  const isPeruEntry = location.pathname === "/peru";
  useEffect(() => {
    if (isPeruEntry) sessionStorage.setItem("peruContext", "1");
  }, [isPeruEntry]);
  const isPeruVersion = isPeruEntry || sessionStorage.getItem("peruContext") === "1";
  const navItems = [
    { name: isPeruVersion ? "INICIO" : "HOME", path: isPeruVersion ? "/peru" : "/" },
    ...(!isPeruVersion ? [{ name: "EAT", path: "/eat" }] : []),
    ...(!isPeruVersion ? [{ name: "EXPLORE", path: "/explore" }] : []),
    { name: isPeruVersion ? "ESTILO" : "STYLE", path: "/style" },
    { name: isPeruVersion ? "PREGUNTAS" : "FAQ", path: "/faq" },
    ...(!isPeruVersion ? [{ name: "RSVP", path: "/rsvp" }] : []),
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
        isScrolled 
          ? "bg-milk/80 backdrop-blur-md border-pitch-black/5 py-4" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="editorial-margin flex justify-center items-center gap-8 md:gap-16">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "text-[10px] md:text-xs tracking-metadata font-sans transition-all hover:opacity-60",
              location.pathname === item.path ? "font-black" : "font-medium"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-40 editorial-margin min-h-screen flex flex-col items-center">
    <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tight">{title}</h1>
    <p className="max-w-2xl text-center leading-loose font-sans text-lg opacity-80">
      This section is currently being curated to provide the best experience for our guests. 
      Please check back soon for more details about our celebration in Lima.
    </p>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-pitch-black selection:text-milk">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/peru" element={<Peru />} />
              <Route path="/eat" element={<Eat />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/style" element={<Style />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/rsvp" element={<RSVP />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="py-24 text-center opacity-40 text-[10px] tracking-metadata font-sans">
          Karen & Juanca — Lima 2026
        </footer>

        {/* Global WhatsApp Button */}
        <a
          href="https://chat.whatsapp.com/Kf9hMpxmntpJ8mHySeqaUE?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-pitch-black text-milk px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform group"
        >
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-sans font-bold tracking-widest uppercase opacity-50 leading-none mb-1">Join Group</span>
            <span className="text-[10px] font-sans font-bold tracking-widest uppercase whitespace-nowrap">WhatsApp</span>
          </div>
          <div className="w-10 h-10 bg-milk/10 rounded-full flex items-center justify-center group-hover:bg-milk/20 transition-colors">
            <svg 
              viewBox="0 0 24 24" 
              className="w-5 h-5 fill-milk"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 0 1-4.126-1.127l-.297-.175-3.07.805.82-2.992-.192-.306a8.104 8.104 0 0 1-1.244-4.302c0-4.473 3.64-8.112 8.113-8.112 2.166 0 4.203.843 5.735 2.375 1.532 1.532 2.375 3.57 2.375 5.737 0 4.474-3.64 8.113-8.113 8.113m0-17.505C7.635 1.631 3.571 5.695 3.571 10.697c0 1.6.418 3.161 1.212 4.537l-1.288 4.705 4.814-1.262c1.328.725 2.823 1.107 4.355 1.108h.004c5.06 0 9.126-4.063 9.126-9.067 0-2.424-.944-4.703-2.658-6.418-1.715-1.715-3.993-2.659-6.415-2.659" />
            </svg>
          </div>
        </a>
      </div>
    </Router>
  );
}

