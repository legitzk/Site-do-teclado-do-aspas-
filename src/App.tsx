/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, Cpu, Zap, MousePointer2, Target, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-glass p-6 rounded-xl group hover:border-brand-purple/50 transition-colors"
  >
    <div className="w-12 h-12 bg-brand-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="text-brand-purple" size={24} />
    </div>
    <h3 className="text-xl font-display font-bold mb-2 uppercase tracking-tight">{title}</h3>
    <p className="text-white/60 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.2], [1.1, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.4, 0.6, 0.6, 0.2]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Background Video Layer */}
      <motion.div 
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="fixed inset-0 z-0 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        >
          <source src="https://storage.googleapis.com/veo-public-assets/atk_aspas_keyboard.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isLoaded ? { width: "auto" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="overflow-hidden whitespace-nowrap mx-auto"
            >
              <span className="text-brand-yellow font-mono text-sm tracking-[0.3em] uppercase">
                Limited Edition Collaboration
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-none">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="block"
              >
                ATK × Aspas
              </motion.span>
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="block text-brand-purple text-glow"
              >
                RS6 Ultra HE
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="max-w-2xl mx-auto text-lg text-white/70 font-light"
            >
              The ultimate weapon for the world's best duelist. 
              Engineered with Hall Effect technology for instantaneous response.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <button className="px-8 py-4 bg-brand-purple hover:bg-brand-purple/80 text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider">
                Pre-Order Now
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm uppercase tracking-wider border border-white/20">
                Explore Tech
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* Specs Grid */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Zap}
              title="Hall Effect Gen 2"
              description="Magnetic switches with adjustable actuation from 0.1mm to 4.0mm. Zero physical contact, infinite durability."
              delay={0.1}
            />
            <FeatureCard 
              icon={Cpu}
              title="8000Hz Polling"
              description="8x faster than standard gaming keyboards. 0.125ms latency for the most precise inputs possible."
              delay={0.2}
            />
            <FeatureCard 
              icon={Target}
              title="Rapid Trigger"
              description="Dynamic reset points for lightning-fast counter-strafing. Stop on a dime, shoot with precision."
              delay={0.3}
            />
            <FeatureCard 
              icon={MousePointer2}
              title="Aspas Signature"
              description="Custom purple and yellow aesthetic inspired by the world champion's iconic style and setup."
              delay={0.4}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="CNC Aluminum"
              description="Premium aerospace-grade aluminum chassis for zero flex and maximum desk stability."
              delay={0.5}
            />
            <FeatureCard 
              icon={Zap}
              title="Ultra Low Latency"
              description="Proprietary ATK firmware optimized for competitive Valorant play at the highest level."
              delay={0.6}
            />
          </div>
        </section>

        {/* "Building Itself" Interactive Section */}
        <section className="py-32 px-4 bg-brand-purple/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl md:text-6xl font-display font-bold mb-12 uppercase tracking-tighter"
            >
              Built for <span className="text-brand-purple italic">Champions</span>
            </motion.h2>
            
            <div className="relative aspect-video bg-black/40 rounded-2xl border border-white/10 overflow-hidden group">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Simulated "Building" animation with floating parts */}
                <div className="relative w-full h-full">
                   {[...Array(12)].map((_, i) => (
                     <motion.div
                        key={i}
                        initial={{ 
                          x: Math.random() * 400 - 200, 
                          y: Math.random() * 400 - 200, 
                          rotate: Math.random() * 360,
                          opacity: 0 
                        }}
                        whileInView={{ 
                          x: 0, 
                          y: 0, 
                          rotate: 0,
                          opacity: 0.8
                        }}
                        transition={{ 
                          duration: 2, 
                          delay: i * 0.1,
                          ease: "circOut"
                        }}
                        className="absolute w-12 h-12 bg-brand-purple/30 border border-brand-purple/50 rounded flex items-center justify-center text-[10px] font-mono"
                        style={{
                          left: `${20 + (i % 4) * 20}%`,
                          top: `${20 + Math.floor(i / 4) * 25}%`
                        }}
                     >
                       KEY_{i}
                     </motion.div>
                   ))}
                   <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                   >
                     <div className="text-brand-yellow font-display text-2xl font-black uppercase tracking-widest bg-black/80 px-8 py-4 rounded-lg border border-brand-yellow/30">
                        Assembly Complete
                     </div>
                   </motion.div>
                </div>
              </motion.div>
            </div>
            
            <p className="mt-12 text-white/50 font-mono text-sm uppercase tracking-widest">
              Precision Engineering × Pro Performance
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-yellow rounded-full blur-[120px]" />
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <h2 className="text-2xl font-display font-bold tracking-tighter uppercase">ATK × Aspas</h2>
              <p className="text-white/40 text-sm">© 2026 ATK Peripherals. All rights reserved.</p>
            </div>
            <div className="flex gap-8 text-sm font-mono uppercase tracking-wider text-white/60">
              <a href="#" className="hover:text-brand-purple transition-colors">Support</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Software</a>
              <a href="#" className="hover:text-brand-purple transition-colors">Warranty</a>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-colors cursor-pointer">
                <Zap size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple transition-colors cursor-pointer">
                <Target size={18} />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
