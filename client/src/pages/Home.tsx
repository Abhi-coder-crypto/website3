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
import section3Bg from "@assets/Rectangle_(2)_1768205296891.png";
import cardImg from "@assets/image_1768205726228.png";

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
        {/* Main Vinyl Record - Restored to user's preferred alignment */}
        <div className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] z-10">
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
              className="absolute left-[8%] top-[35%] w-24 md:w-32 rotate-[-15deg]"
            >
              <img src={cassette} alt="Cassette Tape" className="w-full h-auto pointer-events-auto" />
            </motion.div>

            {/* Music Notes (Bottom Left) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-[30%] bottom-[15%] w-12 md:w-16 rotate-[10deg]"
            >
              <img src={musicNotes} alt="Music Notes" className="w-full h-auto pointer-events-auto" />
            </motion.div>

            {/* Headphones (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute right-[8%] bottom-[25%] w-24 md:w-32 rotate-[5deg]"
            >
              <img src={headphones} alt="Headphones" className="w-full h-auto pointer-events-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DIGITAL PRESENCE */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col items-center">
        {/* Crumpled Paper Background */}
        <div className="absolute inset-0 z-0 h-[60%]">
          <img 
            src={section3Bg} 
            alt="Background Texture" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-12 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-sans mb-8 tracking-tight text-white leading-tight">
              Abhijit Vaghani - Digital Presence <br /> & Artist Marketing
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6 font-sans">
              We partnered with singer Abhijit Vaghani to strengthen his digital presence through strategic content ideation and social media marketing. Our approach focused on showcasing his musical journey, personality, and artistry while building consistent audience engagement across platforms.
            </p>
          </div>
        </div>

        {/* Cards Section with overlap */}
        <div className="relative z-20 w-full bg-white pb-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto -mt-8 md:-mt-12">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-[30px_30px_0_0] md:rounded-[50px_50px_0_0] shadow-xl flex-shrink-0"
                  style={{ width: "318.13px", height: "522.98px" }}
                >
                  <img src={cardImg} alt={`Project ${i}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Music Player Placeholder */}
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-lg bg-black rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-800 rounded-lg overflow-hidden flex-shrink-0">
                    {/* Placeholder for music cover */}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">Manzoor</div>
                    <div className="text-zinc-500 text-xs">Abhijit Vaghani</div>
                  </div>
                </div>
              </div>
            </div>
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
