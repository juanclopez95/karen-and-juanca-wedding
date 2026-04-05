import { motion } from "motion/react";

export default function FAQ() {
  const faqs = [
    { 
      q: "How do I move around?", 
      a: (
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="font-serif italic text-sm tracking-metadata opacity-60">Shuttles</p>
            <p>Shuttles will be offered from the church to the celebration and back. <a href="https://withjoy.com/karen-and-juanca/rsvp" target="_blank" rel="noopener noreferrer" className="font-bold underline">Please RSVP</a> so we can ensure enough space. Shuttles will return to Lima at 11:00 PM and 2:00 AM, dropping off directly at the <a href="https://www.google.com/maps/place/InterContinental+Lima,+an+IHG+Hotel" target="_blank" rel="noopener noreferrer" className="underline">Intercontinental Hotel (Barranco)</a>.</p>
            <p className="text-sm opacity-70 italic">In case you miss the shuttle, the venue is accessible via Uber, Taxi, or private driver. Uber is reliable in Lima and a great option for short trips.</p>
          </div>

          <div className="space-y-2">
            <p className="font-serif italic text-sm tracking-metadata opacity-60">Trusted Private Services</p>
            <ul className="space-y-1 italic">
              <li>
                <a href="https://wa.me/+51992784251" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">
                  A&C Remisse — Reach out to Carlos via WhatsApp.
                </a>
              </li>
              <li>
                <a href="https://wa.me/+51991479547" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-60">
                  Transporte Security — Reach out to Mario via WhatsApp.
                </a>
              </li>
            </ul>
            <p className="text-sm opacity-70">They can accommodate groups and handle airport transfers or venue trips.</p>
          </div>

          <div className="space-y-2">
            <p className="font-serif italic text-sm tracking-metadata opacity-60">The Venues</p>
            <p>The ceremony is at <a href="https://maps.app.goo.gl/E75fRuxKnmKvNqZZ9" target="_blank" rel="noopener noreferrer" className="italic underline">Parroquia Nuestra Señora de Fátima</a>. It’s an easy walk from the recommended hotels or a quick Uber ride.</p>
            <p>The celebration is 40 minutes away at the <a href="https://www.google.com/maps/dir//ANCPCPP+(Asoc.+Nac.+De+Criadores+Y+Propietarios+De+Caballos+Peruanos+De+Paso),+P3QR%2BV6Q,+Alameda+Mamacona,+Lima+15841,+Peru/@25.7910622,-80.1763661,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9105bc87b8bbf663:0x6dfa734f18a430b6!2m2!1d-76.90938!2d-12.2602887?entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="italic underline">Asociación Nacional de Criadores y Propietarios de Caballos Peruanos de Paso – Mamacona</a>. Please consider Lima traffic when planning your departure.</p>
          </div>
        </div>
      )
    },
    {
      q: "Flights",
      a: (
        <div className="space-y-6">
          <p>We recommend arriving <span className="font-bold">Thursday May 21</span> to experience everything we’ve planned.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="font-serif italic text-sm tracking-metadata opacity-60">From Bogotá</p>
              <ul className="space-y-1 italic">
                <li>AV 51 — 4:15 PM</li>
                <li>LA 4906 — 11:55 AM</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-serif italic text-sm tracking-metadata opacity-60">From Miami</p>
              <ul className="space-y-1 italic">
                <li>LA 2695 — 5:20 PM</li>
                <li>AA 917 — 5:35 PM</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      q: "Stay",
      a: (
        <div className="space-y-8">
          <p>To make the most out of Lima, we recommend staying in <span className="font-bold">Miraflores</span>. All hotels listed below are a short walk from each other and the church.</p>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline border-b border-pitch-black/10 pb-2">
                <p className="font-serif text-xl italic">Intercontinental Hotel (Barranco)</p>
                <p className="font-sans text-sm font-bold">$220/night</p>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                To reserve, contact <a href="mailto:reservas.limha@R-HR.COM" className="underline">reservas.limha@R-HR.COM</a> and mention <span className="italic">“boda Juan Carlos López y Karen Telge”</span> in the subject line to secure the preferred rate.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline border-b border-pitch-black/10 pb-2">
                  <p className="font-serif text-xl italic">AC Hotel</p>
                  <p className="font-sans text-sm font-bold">$170/night</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline border-b border-pitch-black/10 pb-2">
                  <p className="font-serif text-xl italic">Aloft</p>
                  <p className="font-sans text-sm font-bold">$100/night</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                To reserve with the preferred rate at AC Hotel or Aloft, contact <a href="mailto:corporativo@intursa.com.pe" className="underline">corporativo@intursa.com.pe</a> (they manage both hotels). Make sure to mention <span className="italic">“Boda Karen y Juanca”</span> in the subject line to secure the rates listed above.
              </p>
            </div>
          </div>

          <p className="text-sm opacity-60 italic pt-4">
            You can also find affordable options on Airbnb or Wynwood House.
          </p>
        </div>
      )
    },
    {
      q: "While In Perú",
      a: (
        <div className="space-y-6">
          <div className="space-y-4">
            <p><span className="font-bold">Cuzco</span> – Holds one of the 7 wonders of the world, Machu Picchu. Feel free to hang back after Mirage.</p>
            <p><span className="font-bold">Tambopata</span> – Lush Amazon wonders</p>
            <p><span className="font-bold">Paracas</span> – Endless dunes ~3.5 hour drive from Lima.</p>
            <p><span className="font-bold">Mancora</span> – In the North Coast of Peru, where desert meets ocean.</p>
          </div>
          <div className="pt-4 border-t border-pitch-black/10 space-y-2">
            <p>Our family travel expert Rosario can help you design the perfect detour before or after the wedding.</p>
            <p>Feel free to email (<a href="mailto:Rosario.griffiths@gmail.com" className="underline">Rosario.griffiths@gmail.com</a>) or reach her via <a href="https://wa.me/51998116666" target="_blank" rel="noopener noreferrer" className="underline">Whatsapp</a> for more info.</p>
          </div>
        </div>
      )
    },
    {
      q: "Registry",
      a: (
        <div className="space-y-4">
          <p>Your presence is what matters most.</p>
          <p>For those that wish to gift, find our registry here:</p>
          <a 
            href="https://withjoy.com/karen-and-juanca/registry/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 border border-pitch-black text-[10px] tracking-[0.3em] font-sans font-bold hover:bg-pitch-black hover:text-milk transition-colors uppercase"
          >
            Karen & Juanca Registry
          </a>
        </div>
      )
    },
    { 
      q: "What’s the weather like?", 
      a: "May in Lima is soft and dry—65 to 75°F. The days are pleasant, but the nights invite layers or a chal as the coastal breeze picks up." 
    },
    { 
      q: "Can I bring kids?", 
      a: "The celebration is adults-only. If you are traveling with family, please reach out and we can offer trusted caretaker or nanny options for the evening." 
    },
    { 
      q: "Do I need a visa?", 
      a: (
        <div className="space-y-4">
          <p>Please check your country’s specific guidelines. American and Colombian passports are typically valid to enter Peru for tourism for up to 90 days.</p>
          <p className="font-bold border-l-2 border-pitch-black pl-4 py-1">
            CRITICAL: Your passport must be valid for at least six months post-departure date. Peru is strict on this and will deny entry otherwise.
          </p>
        </div>
      )
    },
    { 
      q: "More questions?", 
      a: "Reach out to either of us directly if you need anything. You’ll also receive a link to join our guest WhatsApp group leading up to the wedding where we will share further details and live updates." 
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 editorial-margin min-h-screen flex flex-col items-center space-y-40 pb-40"
    >
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-serif italic tracking-tight">FAQ</h1>
        <p className="text-[10px] tracking-metadata font-sans opacity-40">Frequently Asked Questions</p>
      </div>

      <div className="w-full max-w-3xl space-y-24">
        <div className="space-y-12">
          <div className="grid gap-16">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-6 border-b border-outline-variant/20 pb-12">
                <h3 className="text-2xl md:text-3xl font-serif italic tracking-tight">{faq.q}</h3>
                <div className="font-sans text-base md:text-lg opacity-80 leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
