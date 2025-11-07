'use client';

import { motion } from 'framer-motion';
import RecursosDescargables from '../components/RecursosDescargables';

export default function RecursosPage() {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Recursos Descargables
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Accede a materiales gratuitos para profundizar tu conocimiento
            sobre conceptos salariales y legislación laboral.
          </p>
        </motion.div>

        {/* Recursos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <RecursosDescargables />
        </motion.div>
      </div>
    </div>
  );
}
