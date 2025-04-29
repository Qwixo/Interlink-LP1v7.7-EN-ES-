import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaComments, FaUsers, FaChartLine, FaInfoCircle } from 'react-icons/fa';
import { AnimatedText } from './ui/animated-text';

const WhyStudyingIsGameChangerSection = () => {
  const benefits = [
    {
      icon: <FaGraduationCap className="text-4xl text-[#064088]" />,
      title: "Gana un título de clase mundial",
      description: "Las universidades de EE. UU. abren puertas a carreras globales.",
      emoji: "🎓"
    },
    {
      icon: <FaComments className="text-4xl text-[#064088]" />,
      title: "Domina el inglés y gana confianza",
      description: "Habla con fluidez en cualquier situación.",
      emoji: "💬"
    },
    {
      icon: <FaUsers className="text-4xl text-[#064088]" />,
      title: "Construye una red poderosa",
      description: "Conoce a los mejores profesores y estudiantes de todo el mundo.",
      emoji: "🌐"
    },
    {
      icon: <FaChartLine className="text-4xl text-[#064088]" />,
      title: "Más oportunidades profesionales",
      description: "Los graduados de EE. UU. ganan salarios más altos y consiguen empleos globales.",
      emoji: "📈"
    }
  ];

  // Salary data for Vietnam (in million VND per month)
  const salaryData = {
    nonEnglishSpeakers: 12.5,
    englishSpeakers: 21.3,
    percentageDifference: 70
  };

  return (
    <section className="w-full py-16 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center mb-12">
          <AnimatedText 
            text="¿Por qué deberías siquiera considerar aprender inglés?"
            textClassName="text-3xl md:text-4xl font-bold text-[#064088]"
            underlineClassName="text-[#dc5d33] w-64 md:w-96 mx-auto"
          />
        </div>
        
        {/* Benefits List - Keeping these exactly as they were */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm"
            >
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{benefit.emoji}</span>
                  <h3 className="text-xl font-bold text-[#064088]">{benefit.title}</h3>
                </div>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* IMPROVED: Salary Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg mb-16"
        >
          {/* Headline for Salary Section - Improved alignment and visibility */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#064088] mb-10 text-center">
            En Vietnam, las habilidades de inglés impactan directamente tu salario: aquí está la prueba
          </h3>
          
          {/* IMPROVED Bar Graph - Better spacing, clearer labels, more distinct bars */}
          <div className="mb-10">
            <div className="flex justify-center items-end gap-24 md:gap-32 h-72 mb-8">
              {/* Non-English Speakers Bar - Improved styling */}
              <div className="flex flex-col items-center">
                {/* Value label positioned above bar */}
                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold text-gray-700">{salaryData.nonEnglishSpeakers} M</span>
                  <span className="text-sm text-gray-600 block">VND/mes</span>
                </div>
                
                {/* Bar with improved styling */}
                <div className="relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: '150px' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-28 md:w-36 bg-gray-400 rounded-t-lg shadow-md"
                  />
                </div>
                
                {/* Label below bar */}
                <p className="text-center font-medium text-gray-700 mt-4">No hablantes de inglés</p>
              </div>
              
              {/* English Speakers Bar - Improved styling */}
              <div className="flex flex-col items-center">
                {/* Value label positioned above bar */}
                <div className="mb-4 text-center">
                  <span className="text-2xl font-bold text-[#064088]">{salaryData.englishSpeakers} M</span>
                  <span className="text-sm text-gray-600 block">VND/mes</span>
                </div>
                
                {/* Bar with improved styling */}
                <div className="relative">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: '255px' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-28 md:w-36 bg-[#064088] rounded-t-lg shadow-md relative"
                  >
                    {/* Percentage Difference Indicator - Now attached to the bar */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      className="absolute -left-16 md:-left-20 top-1/2 transform -translate-y-1/2"
                    >
                      <div className="flex items-center">
                        <div className="w-12 h-0.5 bg-[#dc5d33]"></div>
                        <div className="bg-[#dc5d33] text-white px-3 py-1 rounded-full font-bold shadow-md">
                          +{salaryData.percentageDifference}%
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Label below bar */}
                <p className="text-center font-medium text-[#064088] mt-4">Hablantes de inglés</p>
              </div>
            </div>
          </div>
          
          {/* Explanation - Improved styling */}
          <div className="text-center mb-8">
            <p className="text-gray-700 flex items-center justify-center gap-3 text-lg">
              <FaInfoCircle className="text-[#064088] text-xl flex-shrink-0" />
              <span>Según la Guía Salarial de Vietnam 2023 de Robert Walters, los profesionales en Vietnam que hablan inglés ganan aproximadamente un 70 % más que quienes no lo hacen.</span>
            </p>
          </div>
          
          {/* IMPROVED Bold Takeaway - More prominent and visually distinct */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100"
          >
            <p className="text-xl font-bold text-[#064088] text-center">
              Invierte en tu futuro: aprender inglés no se trata solo del idioma; se trata de desbloquear mayores ingresos y oportunidades globales.
            </p>
          </motion.div>
        </motion.div>
        
        {/* IMPROVED CTA Button - Better spacing and prominence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12 mb-4"
        >
          <button className="px-10 py-5 bg-[#dc5d33] hover:bg-[#c04d28] text-white font-bold text-xl rounded-lg transition-colors shadow-lg">
            Comienza tu viaje hoy
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyStudyingIsGameChangerSection;
