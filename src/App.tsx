/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronDown, Cpu, Zap, MousePointer2, Target, ShieldCheck, X } from "lucide-react";

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
  const [showSoftwareModal, setShowSoftwareModal] = useState(false);
  const [showWarrantyModal, setShowWarrantyModal] = useState(false);

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
          <source src="https://raw.githubusercontent.com/legitzk/Site-do-teclado-do-aspas-/main/Keyboard_assembly_stop-motion_202603312129.mp4" type="video/mp4" />
          {/* If you want to use a local file, upload it to /src and use: <source src="/src/Keyboard_assembly_stop-motion_202603312129.mp4" type="video/mp4" /> */}
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
                Colaboração de Edição Limitada
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
              A arma definitiva para o melhor duelista do mundo. 
              Projetado com tecnologia Hall Effect para resposta instantânea.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <a 
                href="https://doctormouse.com.br/produtos/atk-aspas-rs6-ultra-he/?srsltid=AfmBOorj5kphmuLFHYaXQTf33VuNk-affV2Qgi9RN3MSEPXiNT7WKUxF" 
                className="px-8 py-4 bg-brand-purple hover:bg-brand-purple/80 text-white font-bold rounded-full transition-all transform hover:scale-105 active:scale-95 uppercase tracking-wider inline-block text-center"
              >
                Reserve Agora
              </a>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-sm uppercase tracking-wider border border-white/20">
                Explorar Tecnologia
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
              title="Hall Effect Geração 2"
              description="Switches magnéticos com atuação ajustável de 0,1mm a 4,0mm. Zero contato físico, durabilidade infinita."
              delay={0.1}
            />
            <FeatureCard 
              icon={Cpu}
              title="Polling de 8000Hz"
              description="8x mais rápido que teclados gamer padrão. Latência de 0,125ms para os inputs mais precisos possíveis."
              delay={0.2}
            />
            <FeatureCard 
              icon={Target}
              title="Rapid Trigger"
              description="Pontos de reset dinâmicos para counter-strafing ultrarrápido. Pare instantaneamente, atire com precisão."
              delay={0.3}
            />
            <FeatureCard 
              icon={MousePointer2}
              title="Assinatura do Aspas"
              description="Estética personalizada em roxo e amarelo inspirada no estilo e setup icônicos do campeão mundial."
              delay={0.4}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Alumínio CNC"
              description="Chassi de alumínio premium de grau aeroespacial para flexão zero e máxima estabilidade na mesa."
              delay={0.5}
            />
            <FeatureCard 
              icon={Zap}
              title="Latência Ultrabaixa"
              description="Firmware proprietário da ATK otimizado para jogo competitivo de Valorant no mais alto nível."
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
              Feito para <span className="text-brand-purple italic">Campeões</span>
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
                   {/* Assembly Complete removed */}
                </div>
              </motion.div>
            </div>
            
            <p className="mt-12 text-white/50 font-mono text-sm uppercase tracking-widest">
              Engenharia de Precisão × Performance Profissional
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
              <p className="text-white/40 text-sm">© 2026 ATK Peripherals. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-8 text-sm font-mono uppercase tracking-wider text-white/60">
              <a 
                href="https://doctormouse.com.br/produtos/atk-aspas-rs6-ultra-he/?srsltid=AfmBOorj5kphmuLFHYaXQTf33VuNk-affV2Qgi9RN3MSEPXiNT7WKUxF" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-purple transition-colors"
              >
                Suporte
              </a>
              <button 
                onClick={() => setShowSoftwareModal(true)}
                className="hover:text-brand-purple transition-colors uppercase"
              >
                Software
              </button>
              <button 
                onClick={() => setShowWarrantyModal(true)}
                className="hover:text-brand-purple transition-colors uppercase"
              >
                Garantia
              </button>
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

        <AnimatePresence>
          {showSoftwareModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-white/10 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 relative"
              >
                <button 
                  onClick={() => setShowSoftwareModal(false)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="space-y-6 text-white/80 font-sans">
                  <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                    ATK × Aspas RS6 Ultra Aluminum Hall Effect Keyboard — Performance de Elite para Gamers Profissionais
                  </h2>
                  
                  <p>
                    Desenvolvido em colaboração com o jogador profissional Aspas, o ATK RS6 Ultra Hall Effect redefine o padrão para teclados de alto rendimento. Com estrutura em alumínio, switches magnéticos de alta precisão e iluminação sincronizada com música, você experimenta desempenho e estilo incomparáveis em cada digitação.
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">ATK Blazing Wind Magnetic Switch Solution - Precisão Magnética Imbatível</h3>
                    <p>
                      Switches magnéticos TTC RGB Magneto / Jade Gaming MAX oferecem atuação ultra-rápida e personalizável com precisão de passos de até 0,001 mm em faixa de 0,001 a 3,3 mm, garantindo respostas instantâneas e adaptadas ao seu estilo de jogo.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Placa de Circuito Multicamadas Proprietária - Estabilidade e Performance</h3>
                    <p>
                      O PCB multi-camadas da ATK com solução Blazing Wind traz precisão elevada, maior resistência à interferência eletromagnética (EMC) e sinal mais estável — ideal para competições intensas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Layout Compacto 65 % com 68 Teclas - Funcionalidade e Espaço</h3>
                    <p>
                      Com layout compacto (318 mm × 112 mm), você conserva as teclas direcionais sem perder espaço para o movimento do mouse, ideal para setups minimalistas e jogadores de FPS.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Design Mecha em Alumínio - Beleza e Resistência</h3>
                    <p>
                      Construído em alumínio anodizado ou ureia powder-coated com design cyberpunk mecha-inspirado. Conta com painéis laterais destacáveis, placa de posicionamento metálica e acabamento premium, resultando em visual futurista e durabilidade elevada.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Iluminação Music Rhythm e Presets Profissionais - Imersão Total</h3>
                    <p>
                      A iluminação RGB sincroniza com seu som, criando efeitos visuais dinâmicos que acompanham a música. Além disso, os "Champion Presets" permitem troca instantânea para configurações preferenciais de pro players, tudo via ATK HUB.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Scan Rate 32K / 256K & Polling de 8 kHz - Velocidade de Resposta Máxima</h3>
                    <p>
                      Cada comando é capturado com extrema precisão: teclado oferece Scan Rate de 32 K (N-Key) e 256 K por tecla, e polling de 8 kHz (latência de apenas 0,08 ms).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-brand-purple font-bold uppercase tracking-wider text-sm">Capas Personalizadas da Aspas - Exclusividade Visual</h3>
                    <p>
                      Edição Aspas inclui keycaps transparentes feitos sob medida, com design exclusivo, adicionando um toque de estilo único.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <h3 className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Especificações Técnicas:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                      <li><span className="text-white/40">Resposta Rápida:</span> 0,005–3,3 mm</li>
                      <li><span className="text-white/40">Layout:</span> 65% (68 teclas)</li>
                      <li><span className="text-white/40">Switches:</span> TTC RGB Magneto</li>
                      <li><span className="text-white/40">Scan Rate:</span> 32K / 256K</li>
                      <li><span className="text-white/40">Polling Rate:</span> 8 kHz (0,08 ms)</li>
                      <li><span className="text-white/40">Case:</span> Alumínio Mecha</li>
                      <li><span className="text-white/40">Iluminação:</span> RGB Music Rhythm</li>
                      <li><span className="text-white/40">Keycaps:</span> Transparentes Aspas</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-brand-yellow font-bold uppercase tracking-wider text-sm">Conteúdo da Embalagem:</h3>
                    <p className="text-sm">ATK RS6 Ultra Keyboard edição Aspas; Keycaps transparentes mecha-style; Cabo RGB 8K; Documentação e embalagem premium</p>
                  </div>

                  <div className="pt-4 text-brand-purple font-bold">
                    GARANTIA: 06 Meses
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {showWarrantyModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-zinc-900 border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl p-8 relative"
              >
                <button 
                  onClick={() => setShowWarrantyModal(false)}
                  className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="space-y-6 text-white/80 font-sans">
                  <h2 className="text-2xl font-display font-bold text-white tracking-tight uppercase">
                    Informações de Garantia
                  </h2>
                  
                  <div className="p-4 bg-brand-purple/10 border border-brand-purple/30 rounded-lg">
                    <p className="text-brand-purple font-bold text-xl">
                      Período de Garantia: 06 Meses
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">O que a garantia cobre:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Defeitos de fabricação nos switches magnéticos TTC RGB Magneto.</li>
                      <li>Falhas na placa de circuito (PCB) ATK Blazing Wind.</li>
                      <li>Problemas estruturais no case de alumínio mecha.</li>
                      <li>Defeitos no cabo RGB 8K incluso.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">Termos e Condições:</h3>
                    <p className="text-sm">
                      A garantia é válida a partir da data de recebimento do produto. Para acionar a garantia, o produto deve estar em sua embalagem original e sem sinais de mau uso, modificações não autorizadas ou danos acidentais (como derramamento de líquidos).
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-white/40 italic">
                      A ATK Peripherals reserva-se o direito de reparar ou substituir o produto por um modelo equivalente em caso de defeito coberto pela garantia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
