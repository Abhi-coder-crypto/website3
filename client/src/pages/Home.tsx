import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, SkipBack, SkipForward, Volume1, Volume2 } from "lucide-react";
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
import manzoorCover from "@assets/image_1768206021449.png";
import playerControls from "@assets/Group_(3)_1768206877954.png";
import footerBg from "@assets/Rectangle_(3)_1768207396961.png";
import social1 from "@assets/image_1768207430692.png";
import social2 from "@assets/image_1768207450556.png";
import social3 from "@assets/image_1768207458634.png";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-hidden">
      {/* SECTION 1: HERO */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Full Cover */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Abhijit Vaghani" 
            className="w-full h-full object-cover object-[45%_center] md:object-top bg-black scale-[1.1] md:scale-100"
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
      </section>

      {/* SECTION 2: WHITE BACKGROUND SECTION */}
      <section className="relative w-full bg-white overflow-hidden py-16 md:py-48 min-h-[300px] md:min-h-[500px]">
        {/* Main Vinyl Record - Restored to user's preferred alignment */}
        <div className="absolute top-20 md:top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] z-10">
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
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 max-w-7xl mx-auto -mt-8 md:-mt-12">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-[20px_20px_0_0] md:rounded-[50px_50px_0_0] shadow-xl flex-shrink-0"
                  style={{ width: "318.13px", height: "522.98px" }}
                >
                  <img src={cardImg} alt={`Project ${i}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Music Player Placeholder */}
            <div className="mt-8 md:mt-16 flex justify-center px-4">
              <div className="w-full max-w-lg bg-black rounded-[16px] md:rounded-[24px] p-3 md:p-4 shadow-2xl">
                <div className="flex items-center gap-3 md:gap-6">
                  {/* Left: Album Art */}
                  <div className="w-20 h-20 md:w-40 md:h-40 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-zinc-800">
                    <img src={manzoorCover} alt="Manzoor Cover" className="w-full h-full object-cover" />
                  </div>

                  {/* Right: Info and Controls */}
                  <div className="flex-1 flex flex-col justify-center space-y-2 md:space-y-4 w-full overflow-hidden">
                    <div className="space-y-0.5">
                      <h3 className="text-white text-base md:text-2xl font-sans font-medium truncate">Manzoor</h3>
                      <p className="text-zinc-400 text-xs md:text-base font-sans truncate">Abhijit Vaghani</p>
                    </div>

                    {/* Simple Player Interface based on reference */}
                    <div className="flex flex-col space-y-2 md:space-y-4">
                      <div className="flex items-center justify-start gap-4 md:gap-8">
                        <button className="text-white hover:text-zinc-300 transition-colors">
                          <SkipBack size={16} fill="currentColor" />
                        </button>
                        <button className="text-white hover:text-zinc-300 transition-colors">
                          <Play size={22} fill="currentColor" />
                        </button>
                        <button className="text-white hover:text-zinc-300 transition-colors">
                          <SkipForward size={16} fill="currentColor" />
                        </button>
                      </div>
                      
                      {/* Volume Slider Mockup */}
                      <div className="flex items-center gap-2 md:gap-3 w-full max-w-[120px] md:max-w-[180px]">
                        <Volume1 size={12} className="text-zinc-500" />
                        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-white rounded-full"></div>
                        </div>
                        <Volume2 size={12} className="text-zinc-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW RED SECTION */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="text-center py-8 md:py-12">
          <h2 className="text-2xl md:text-4xl font-sans font-medium text-black">Social Media Posts</h2>
        </div>
        
        <div className="relative w-full h-auto min-h-[300px] md:min-h-[400px] flex items-center justify-center py-8 md:py-12 px-4 md:px-6">
          <img 
            src={footerBg} 
            alt="Red Section Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10"
            >
              <img src={social1} alt="Social Media 1" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10"
            >
              <img src={social2} alt="Social Media 2" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-square rounded-lg md:rounded-xl overflow-hidden shadow-2xl border-2 md:border-4 border-white/10"
            >
              <img src={social3} alt="Social Media 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
