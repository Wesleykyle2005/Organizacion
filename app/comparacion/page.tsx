'use client';

import { motion } from 'framer-motion';
import ComparacionSalarios from '../components/ComparacionSalarios';

export default function ComparacionPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-4">
            Comparación de Tipos de Salario
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Analiza las diferencias entre los diferentes conceptos salariales
            a través de una tabla comparativa detallada.
          </p>
        </motion.div>

        {/* Comparación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <ComparacionSalarios />
        </motion.div>
      </div>
    </div>
  );
}
