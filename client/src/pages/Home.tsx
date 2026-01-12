import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Asset imports based on implementation notes
import heroImg from "@assets/image_1768197853617.png";
import vinylRecord from "@assets/image_1768197905813.png";
import headphones from "@assets/Group_(2)_1768197915626.png";
import playlistTape from "@assets/Group_(1)_1768197915627.png";
import musicNotes from "@assets/Group_1768197915627.png";
import vinylCenter from "@assets/Rectangle_(1)_1768197915628.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-hidden">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Full Cover */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Abhijit Vaghani" 
            className="w-full h-full object-cover object-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black tracking-tight leading-none text-white">
              ABHIJIT
              <span className="block font-script text-primary text-6xl md:text-8xl lg:text-[10rem] mt-2 md:-mt-8 ml-4 md:ml-20">Vaghani</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-xl font-light tracking-wide border-l-2 border-primary pl-6">
              Music Producer • Composer • Artist
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="text-white/50 w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: CREATIVE COMPOSITION */}
      <section id="music" className="relative min-h-screen w-full bg-white flex items-center justify-center py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-black order-2 lg:order-1"
            >
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6 text-black">
                THE <br/>
                <span className="text-primary italic">SOUND</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md font-medium leading-relaxed">
                Crafting sonic landscapes that transcend boundaries. A fusion of classical roots and modern production.
              </p>
              <div className="flex gap-4">
                 <button className="px-8 py-4 bg-black text-white font-bold tracking-widest hover:bg-primary transition-colors duration-300">
                   LISTEN NOW
                 </button>
                 <button className="px-8 py-4 border-2 border-black text-black font-bold tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                   DISCOGRAPHY
                 </button>
              </div>
            </motion.div>

            {/* Right: Composition */}
            <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center order-1 lg:order-2">
              
              {/* Central Element - Vinyl */}
              <motion.div 
                style={{ rotate }}
                className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] z-10"
              >
                <img 
                  src={vinylRecord} 
                  alt="Vinyl Record" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Center Cap */}
              <div className="absolute z-20 w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden shadow-inner">
                 <img 
                  src={vinylCenter} 
                  alt="Center" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Element: Headphones */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute -top-10 -right-10 md:top-0 md:right-0 w-32 md:w-48 z-30"
              >
                <img 
                  src={headphones} 
                  alt="Headphones" 
                  className="w-full h-full object-contain drop-shadow-xl filter saturate-0 hover:saturate-100 transition-all duration-500"
                />
              </motion.div>

              {/* Floating Element: Cassette */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 md:bottom-10 md:-left-10 w-40 md:w-56 z-30"
              >
                <img 
                  src={playlistTape} 
                  alt="Cassette Tape" 
                  className="w-full h-full object-contain drop-shadow-xl filter sepia hover:sepia-0 transition-all duration-500"
                />
              </motion.div>

              {/* Floating Element: Notes */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5] 
                }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 scale-150 opacity-20"
              >
                 <img 
                  src={musicNotes} 
                  alt="Notes" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

            </div>
          </div>
        </div>
        
        {/* Background texture noise */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
      </section>

      {/* SECTION 3: CONTACT */}
      <section id="contact" className="relative py-32 bg-zinc-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                LET'S <span className="text-primary font-script font-normal block text-7xl md:text-9xl">Connect</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 max-w-sm">
                For collaborations, bookings, or inquiries, please use the form or reach out directly.
              </p>
              
              <div className="space-y-6 text-zinc-300">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Email</span>
                  <a href="mailto:hello@abhijitvaghani.com" className="text-2xl hover:text-primary transition-colors font-display">
                    hello@abhijitvaghani.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Socials</span>
                  <div className="flex gap-6 mt-2">
                    {["Instagram", "Twitter", "Spotify", "YouTube"].map((social) => (
                      <a key={social} href="#" className="text-sm uppercase tracking-wider hover:text-primary hover:underline underline-offset-4 transition-all">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-2xl relative overflow-hidden group">
                {/* Decorative gradient blob */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
                
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Abhijit Vaghani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
