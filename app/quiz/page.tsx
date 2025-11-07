'use client';

import { motion } from 'framer-motion';
import Quiz from '../components/Quiz';

export default function QuizPage() {
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
            Quiz Interactivo
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Pon a prueba tus conocimientos sobre los diferentes tipos de salario.
            Responde las preguntas y recibe retroalimentación inmediata.
          </p>
        </motion.div>

        {/* Quiz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Quiz />
        </motion.div>
      </div>
    </div>
  );
}
