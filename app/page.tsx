'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    titulo: 'Glosario Interactivo',
    descripcion: 'Explora conceptos salariales con tarjetas interactivas y definiciones detalladas.',
    icono: <Image src="/icons/Glosario.svg" alt="Glosario" width={80} height={80} className="w-20 h-20" />,
    color: 'bg-blue-500',
    bgColor: 'bg-blue-50',
    href: '/glosario'
  },
  {
    id: 2,
    titulo: 'Comparación de Salarios',
    descripcion: 'Analiza las diferencias entre tipos de salario en una tabla comparativa.',
    icono: <Image src="/icons/Calculadora.svg" alt="Comparación" width={80} height={80} className="w-20 h-20" />,
    color: 'bg-purple-500',
    bgColor: 'bg-purple-50',
    href: '/comparacion'
  },
  {
    id: 3,
    titulo: 'Ejemplos Prácticos',
    descripcion: 'Descubre casos reales de aplicación en diferentes sectores laborales.',
    icono: <Image src="/icons/Libro.svg" alt="Ejemplos" width={80} height={80} className="w-20 h-20" />,
    color: 'bg-orange-500',
    bgColor: 'bg-orange-50',
    href: '/ejemplos'
  },
  {
    id: 4,
    titulo: 'Quiz Interactivo',
    descripcion: 'Pon a prueba tus conocimientos con preguntas y retroalimentación inmediata.',
    icono: <Image src="/icons/Pregunta.svg" alt="Quiz" width={80} height={80} className="w-20 h-20" />,
    color: 'bg-red-500',
    bgColor: 'bg-red-50',
    href: '/quiz'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Partículas decorativas con posiciones predefinidas
  const particles = [
    { id: 0, x: 20, y: -30, duration: 3.2, delay: 0.5, left: 15, top: 20 },
    { id: 1, x: -25, y: 35, duration: 4.1, delay: 1.2, left: 85, top: 10 },
    { id: 2, x: 40, y: -20, duration: 2.8, delay: 0.8, left: 45, top: 70 },
    { id: 3, x: -35, y: 25, duration: 3.9, delay: 1.5, left: 25, top: 85 },
    { id: 4, x: 15, y: -40, duration: 4.5, delay: 0.3, left: 75, top: 35 },
    { id: 6, x: 35, y: -15, duration: 2.9, delay: 0.9, left: 10, top: 45 },
    { id: 7, x: -40, y: 20, duration: 4.2, delay: 1.1, left: 90, top: 75 },
    { id: 8, x: 25, y: -35, duration: 3.7, delay: 0.6, left: 35, top: 25 },
    { id: 9, x: -15, y: 40, duration: 2.6, delay: 1.9, left: 65, top: 50 },
    { id: 10, x: 30, y: -25, duration: 4.0, delay: 0.4, left: 20, top: 80 },
    { id: 11, x: -30, y: 15, duration: 3.3, delay: 1.3, left: 80, top: 15 },
    { id: 12, x: 45, y: -10, duration: 2.7, delay: 0.7, left: 40, top: 55 },
    { id: 13, x: -45, y: 10, duration: 3.8, delay: 1.6, left: 5, top: 30 },
    { id: 14, x: 10, y: -45, duration: 4.3, delay: 0.2, left: 70, top: 40 },
    { id: 15, x: -10, y: 45, duration: 3.0, delay: 1.7, left: 50, top: 65 },
    { id: 16, x: 50, y: -5, duration: 2.5, delay: 1.0, left: 30, top: 90 },
    { id: 17, x: -50, y: 5, duration: 3.6, delay: 1.4, left: 95, top: 5 },
    { id: 18, x: 5, y: -50, duration: 4.4, delay: 0.1, left: 60, top: 95 },
    { id: 19, x: -5, y: 50, duration: 3.4, delay: 1.9, left: 12, top: 72 }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background con gradiente animado */}
      <div className={`absolute inset-0 bg-linear-to-br ${slides[currentSlide].bgColor} transition-all duration-1000`} />

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, particle.x],
              y: [0, particle.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 px-6"
        >
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading font-bold text-5xl md:text-7xl text-gray-800 mb-6"
          >
            Conceptos Salariales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Explora y comprende los diferentes tipos de remuneración laboral
          </motion.p>
        </motion.div>

        {/* Carrusel Principal */}
        <div className="flex-1 flex flex-col px-6">
          {/* Slide actual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-6xl w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -300, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.3 }
                  }}
                  className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className={`inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full ${slides[currentSlide].color} text-gray-800 mb-6 shadow-lg`}
                >
                  <div className="text-gray-800 [&>img]:brightness-0 [&>img]:invert">
                    {slides[currentSlide].icono}
                  </div>
                </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                      {slides[currentSlide].titulo}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                      {slides[currentSlide].descripcion}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Link href={slides[currentSlide].href}>
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 ${slides[currentSlide].color} text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Explorar Ahora
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="inline-block ml-2"
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controles del carrusel - Abajo */}
          <div className="pb-8 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Indicador de progreso */}
              <div className="flex justify-center items-center mb-6">
                <div className="w-32 bg-white/30 rounded-full h-2">
                  <motion.div
                    className="bg-white rounded-full h-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Controles principales */}
              <div className="flex justify-center items-center space-x-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <FaChevronLeft className="w-6 h-6 text-gray-700" />
                </motion.button>

                <div className="flex space-x-3">
                  {slides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/50'
                      }`}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={isAutoPlaying ? toggleAutoPlay : nextSlide}
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isAutoPlaying ? (
                    <FaPause className="w-6 h-6 text-gray-700" />
                  ) : (
                    <FaPlay className="w-6 h-6 text-gray-700" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <FaChevronRight className="w-6 h-6 text-gray-700" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
