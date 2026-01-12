import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Asset imports based on implementation notes
import heroImg from "@assets/image_1768197853617.png";
import vinylRecord from "@assets/image_1768197905813.png";
import vinylCenter from "@assets/Rectangle_(1)_1768203634425.png";
import cassette from "@assets/Group_(1)_1768203634424.png";
import musicNotes from "@assets/Group_(2)_1768203634423.png";
import headphones from "@assets/Group_1768203634425.png";

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

      {/* SECTION 2: WHITE BACKGROUND SECTION */}
      <section className="relative w-full bg-white overflow-hidden py-32 md:py-48 min-h-[500px]">
        {/* Main Vinyl Record - Positioned to attach perfectly to the section line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-48px)] w-full max-w-[800px] z-10">
          <img 
            src={vinylCenter} 
            alt="Vinyl Record" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Floating Elements Container */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="container mx-auto h-full relative">
            {/* Cassette Tape (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute left-[5%] top-[25%] w-24 md:w-32 rotate-[-15deg]"
            >
              <img src={cassette} alt="Cassette Tape" className="w-full h-auto pointer-events-auto" />
            </motion.div>

            {/* Music Notes (Below CD / Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-[20%] bottom-[10%] w-12 md:w-16"
            >
              <img src={musicNotes} alt="Music Notes" className="w-full h-auto pointer-events-auto" />
            </motion.div>

            {/* Headphones (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-[5%] bottom-[25%] w-24 md:w-32"
            >
              <img src={headphones} alt="Headphones" className="w-full h-auto pointer-events-auto" />
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
