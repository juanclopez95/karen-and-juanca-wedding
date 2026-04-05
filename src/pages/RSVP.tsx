import { motion } from "motion/react";
import { useState, type FormEvent } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-40 editorial-margin min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-6xl md:text-8xl font-serif italic mb-12 tracking-tight">Gracias.</h1>
        <p className="max-w-md leading-loose font-sans text-lg opacity-80">
          We have received your response. We look forward to celebrating with you in Lima.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-16 text-xs tracking-metadata font-sans border-b border-pitch-black pb-2 hover:opacity-50 transition-opacity"
        >
          BACK TO FORM
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-40 editorial-margin min-h-screen flex flex-col items-center"
    >
      <h1 className="text-6xl md:text-8xl font-serif italic mb-20 tracking-tight">RSVP</h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-16">
        <div className="space-y-12">
          <div className="group">
            <label className="block text-[10px] tracking-metadata font-sans opacity-40 mb-4">FULL NAME</label>
            <input 
              required
              type="text" 
              className="w-full bg-surface-low border-b border-outline-variant/20 py-4 px-4 focus:border-pitch-black outline-none transition-colors font-serif text-xl"
              placeholder="Your Name"
            />
          </div>

          <div className="group">
            <label className="block text-[10px] tracking-metadata font-sans opacity-40 mb-4">EMAIL ADDRESS</label>
            <input 
              required
              type="email" 
              className="w-full bg-surface-low border-b border-outline-variant/20 py-4 px-4 focus:border-pitch-black outline-none transition-colors font-serif text-xl"
              placeholder="email@example.com"
            />
          </div>

          <div className="group">
            <label className="block text-[10px] tracking-metadata font-sans opacity-40 mb-6">WILL YOU BE ATTENDING?</label>
            <div className="flex flex-col md:flex-row gap-8">
              <label className="flex items-center gap-4 cursor-pointer group">
                <input type="radio" name="attending" value="yes" className="w-5 h-5 accent-pitch-black" required />
                <span className="text-sm tracking-metadata font-sans">JOYFULLY ACCEPT</span>
              </label>
              <label className="flex items-center gap-4 cursor-pointer group">
                <input type="radio" name="attending" value="no" className="w-5 h-5 accent-pitch-black" />
                <span className="text-sm tracking-metadata font-sans">REGRETFULLY DECLINE</span>
              </label>
            </div>
          </div>

          <div className="group">
            <label className="block text-[10px] tracking-metadata font-sans opacity-40 mb-4">DIETARY RESTRICTIONS</label>
            <textarea 
              className="w-full bg-surface-low border-b border-outline-variant/20 py-4 px-4 focus:border-pitch-black outline-none transition-colors font-serif text-xl resize-none h-32"
              placeholder="Allergies, preferences, etc."
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full bg-pitch-black text-milk py-6 text-xs tracking-[0.4em] font-sans hover:bg-surface-highest hover:text-pitch-black transition-all"
        >
          SUBMIT RESPONSE
        </button>
      </form>
    </motion.div>
  );
}
