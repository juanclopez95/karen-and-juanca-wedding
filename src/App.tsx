/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import Home from "./pages/Home";
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

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EAT", path: "/eat" },
    { name: "EXPLORE", path: "/explore" },
    { name: "STYLE", path: "/style" },
    { name: "FAQ", path: "/faq" },
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
      </div>
    </Router>
  );
}

