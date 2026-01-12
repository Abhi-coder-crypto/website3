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
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-32 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
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
      <section id="music" className="relative min-h-[60vh] w-full bg-white flex items-center justify-center overflow-hidden py-12">
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
          <div className="relative w-full max-w-4xl aspect-[21/9] flex items-center justify-center">
            
            {/* Background Vinyl Record (Tilted and partially visible) */}
            <motion.div 
              style={{ rotate: -30 }}
              className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] z-0 -translate-x-[15%] translate-y-[10%]"
            >
              <img 
                src={vinylRecord} 
                alt="Vinyl Record Background" 
                className="w-full h-full object-contain opacity-100"
              />
            </motion.div>

            {/* Foreground Vinyl Record (The main one in the center) */}
            <motion.div 
              style={{ rotate }}
              className="absolute w-[200px] h-[200px] md:w-[450px] md:h-[450px] z-10"
            >
              <img 
                src={vinylRecord} 
                alt="Vinyl Record Foreground" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Center Cap */}
            <div className="absolute z-20 w-16 h-16 md:w-36 md:h-36 rounded-full overflow-hidden">
               <img 
                src={vinylCenter} 
                alt="Center" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Element: Headphones (Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-[5%] left-[5%] md:bottom-[10%] md:left-[20%] w-16 md:w-32 z-30"
            >
              <img 
                src={headphones} 
                alt="Headphones" 
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Floating Element: Headphones (Top Center/Right) */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute top-[10%] left-[40%] md:top-[15%] md:left-[35%] w-12 md:w-24 z-30"
            >
              <img 
                src={headphones} 
                alt="Headphones Small" 
                className="w-full h-full object-contain opacity-80"
              />
            </motion.div>

            {/* Floating Element: Cassette (Top Left) */}
            <motion.div 
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute top-[30%] -left-[10%] md:top-[35%] md:left-[0%] w-24 md:w-48 z-30"
            >
              <img 
                src={playlistTape} 
                alt="Cassette Tape" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Floating Element: Cassette (Bottom Right) */}
            <motion.div 
              className="absolute bottom-[20%] right-[10%] md:bottom-[15%] md:right-[25%] w-10 md:w-20 z-30"
            >
              <img 
                src={playlistTape} 
                alt="Cassette Small" 
                className="w-full h-full object-contain opacity-70"
              />
            </motion.div>

            {/* Floating Element: Notes (Right) */}
            <motion.div 
              animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-[20%] right-[0%] md:top-[25%] md:right-[5%] w-16 md:w-32 z-30"
            >
               <img 
                src={musicNotes} 
                alt="Notes" 
                className="w-full h-full object-contain"
              />
            </motion.div>

          </div>
        </div>
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
