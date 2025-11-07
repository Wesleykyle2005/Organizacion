'use client';

import { motion } from 'framer-motion';
import GlosarioVisual from '../components/GlosarioVisual';
import Definiciones from '../components/Definiciones';
import { useState } from 'react';
import { FaHandPointUp } from 'react-icons/fa';

export default function GlosarioPage() {
  const [terminoActivo, setTerminoActivo] = useState<string | null>(null);

  const manejarSeleccionTermino = (terminoId: string) => {
    setTerminoActivo(terminoId);
  };

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
            Glosario Interactivo
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explora los conceptos fundamentales de la remuneración laboral.
            Haz clic en cualquier término para ver su definición detallada abajo.
          </p>
        </motion.div>

        {/* Glosario Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <GlosarioVisual
            onTerminoSeleccionado={manejarSeleccionTermino}
            terminoActivo={terminoActivo}
          />
        </motion.div>

        {/* Definiciones */}
        {terminoActivo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Definiciones terminoActivo={terminoActivo} />
          </motion.div>
        )}

        {/* Mensaje inicial cuando no hay término seleccionado */}
        {!terminoActivo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="text-blue-500 mb-4 flex justify-center">
                <FaHandPointUp className="w-16 h-16" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Selecciona un Concepto
              </h3>
              <p className="text-gray-600">
                Haz clic en cualquiera de los conceptos de arriba para ver su definición
                completa, características y ejemplos prácticos.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
