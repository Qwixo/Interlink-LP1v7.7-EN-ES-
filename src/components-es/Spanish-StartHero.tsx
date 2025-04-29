import React from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { TextRotate } from '../components/ui/text-rotate';
import Floating, { FloatingElement } from '../components/ui/parallax-floating';

const StartHero = () => {
  const images = [
    'https://i.imgur.com/KSHUrgP.jpeg',
    'https://i.imgur.com/YqRhjAx.jpeg',
    'https://i.imgur.com/eVo8eYl.jpeg',
    'https://i.imgur.com/yv24Bj1.jpeg',
    'https://i.imgur.com/fkr8T23.jpeg',
    'https://i.imgur.com/VcF77OM.jpeg',
    'https://i.imgur.com/W5ydknw.jpeg',
    'https://i.imgur.com/iZAow8f.jpeg',
    'https://i.imgur.com/26omH46.jpeg',
    'https://i.imgur.com/k018UnK.jpeg',
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Floating Images */}
      <Floating sensitivity={-0.025} className="absolute inset-0 pointer-events-none z-10">
        {/* Mobile only images */}
        <FloatingElement depth={1.2} className="top-[4%] left-[10%] block md:hidden">
          <motion.img
            src={images[1]}
            alt="img-1"
            className="w-40 h-28 object-cover rounded-xl shadow-2xl rotate-[4deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </FloatingElement>
        <FloatingElement depth={1.2} className="top-[4%] right-[10%] block md:hidden">
          <motion.img
            src={images[3]}
            alt="img-3"
            className="w-40 h-28 object-cover rounded-xl shadow-2xl -rotate-[3deg]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
        </FloatingElement>

        {/* Desktop floating layout */}
        <FloatingElement depth={0.6} className="top-[14%] left-[4%] hidden md:block">
          <motion.img src={images[0]} alt="img-0" className="w-44 h-32 md:w-60 md:h-40 lg:w-64 lg:h-44 object-cover rounded-xl shadow-2xl -rotate-[3deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[6%] right-[4%] hidden md:block">
          <motion.img src={images[1]} alt="img-1" className="w-44 h-32 md:w-56 md:h-40 lg:w-72 lg:h-52 object-cover rounded-xl shadow-2xl rotate-[4deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
        </FloatingElement>

        <FloatingElement depth={1.3} className="bottom-[8%] left-[5%]">
          <motion.img src={images[2]} alt="img-2" className="w-44 h-28 md:w-56 md:h-36 lg:w-60 lg:h-40 object-cover rounded-xl shadow-2xl rotate-[2deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
        </FloatingElement>

        <FloatingElement depth={1.5} className="bottom-[10%] right-[6%] hidden md:block">
          <motion.img src={images[3]} alt="img-3" className="w-44 h-28 md:w-60 md:h-40 lg:w-64 lg:h-44 object-cover rounded-xl shadow-2xl -rotate-[4deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        </FloatingElement>

        <FloatingElement depth={1.2} className="top-[30%] left-[85%] hidden lg:block">
          <motion.img src={images[4]} alt="img-4" className="w-40 h-28 md:w-44 md:h-32 object-cover rounded-xl shadow-2xl rotate-[6deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        </FloatingElement>

        <FloatingElement depth={1.4} className="top-[60%] left-[10%] hidden lg:block">
          <motion.img src={images[5]} alt="img-5" className="w-36 h-24 md:w-40 md:h-28 object-cover rounded-xl shadow-2xl -rotate-[6deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        </FloatingElement>

        <FloatingElement depth={1.7} className="top-[4%] left-[15%] hidden lg:block">
          <motion.img src={images[6]} alt="img-6" className="w-36 h-24 md:w-40 md:h-28 object-cover rounded-xl shadow-2xl rotate-[5deg]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
        </FloatingElement>
      </Floating>

      {/* Text */}
      <div className="relative z-50 text-center max-w-3xl mt-32 sm:mt-0">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span layout className="block">Haz tu sueño en EE. UU.</motion.span>
          <LayoutGroup>
            <motion.span layout className="inline-flex flex-wrap whitespace-pre items-center justify-center">
              <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
                sueña
              </motion.span>
              <TextRotate
                texts={['asequible', 'posible', 'real ✨', '🔥🔥🔥', 'una realidad']}
                mainClassName="pl-3 text-[#dc5d33] inline-block overflow-visible leading-[1.2]"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mt-6 text-muted-foreground max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Estudia inglés, explora la cultura de EE. UU., conoce nuevos amigos y prepárate para tu futuro en INTERLINK.
        </motion.p>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="px-8 py-4 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-lg rounded-lg transition-colors shadow-md"
            onClick={() => {
              const url = 'https://server1.orbund.com/einstein-freshair/touch/application/online_application_form.jsp?id=59&aid=58';

              const openInNewTab = () => {
                window.open(url, '_blank');
              };

              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  send_to: 'AW-1043003990/KpaYCO2GlLQaENb0q_ED', // jan-contact
                  event_callback: openInNewTab,
                });

                setTimeout(openInNewTab, 1000); // fallback
              } else {
                console.warn('❌ gtag not defined');
                openInNewTab();
              }
            }}
          >
            Solicita Ahora y Comienza
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default StartHero;
