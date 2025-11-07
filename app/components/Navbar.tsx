'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Inicio', icon: <Image src="/icons/Inicio.svg" alt="Inicio" width={20} height={20} className="w-5 h-5" /> },
  { href: '/glosario', label: 'Glosario', icon: <Image src="/icons/Glosario.svg" alt="Glosario" width={20} height={20} className="w-5 h-5" /> },
  { href: '/comparacion', label: 'Comparación', icon: <Image src="/icons/Calculadora.svg" alt="Comparación" width={20} height={20} className="w-5 h-5" /> },
  { href: '/ejemplos', label: 'Ejemplos', icon: <Image src="/icons/Libro.svg" alt="Ejemplos" width={20} height={20} className="w-5 h-5" /> },
  { href: '/quiz', label: 'Quiz', icon: <Image src="/icons/Pregunta.svg" alt="Quiz" width={20} height={20} className="w-5 h-5" /> }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">GS</span>
              </div>
              <span className="font-heading font-bold text-xl text-gray-800">Conceptos Salariales</span>
            </Link>

            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                    pathname === item.href
                      ? 'text-gray-900 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-blue-50 rounded-lg border border-blue-200"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">GS</span>
              </div>
              <span className="font-heading font-bold text-lg text-gray-800">Conceptos Salariales</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                    pathname === item.href
                      ? 'text-gray-900 bg-blue-50 border border-blue-200'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </>
  );
}
