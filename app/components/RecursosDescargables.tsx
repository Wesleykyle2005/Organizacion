'use client';

import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaFileImage, FaFileAlt, FaBook, FaCalculator, FaVideo, FaUsers, FaEnvelope, FaPhone } from 'react-icons/fa';

interface Recurso {
  id: string;
  titulo: string;
  descripcion: string;
  tipo: 'pdf' | 'imagen' | 'documento' | 'herramienta';
  icono: React.ReactNode;
  tamano: string;
  color: string;
  etiquetas: string[];
}

const recursos: Recurso[] = [
  {
    id: 'guia-completa',
    titulo: 'Guía Completa de Conceptos Salariales',
    descripcion: 'Manual exhaustivo que explica todos los tipos de salario con ejemplos detallados y casos prácticos.',
    tipo: 'pdf',
    icono: <FaFilePdf className="w-6 h-6" />,
    tamano: '2.4 MB',
    color: 'text-red-500',
    etiquetas: ['Completo', 'Teórico', 'Ejemplos']
  },
  {
    id: 'infografia-comparativa',
    titulo: 'Infografía Comparativa de Salarios',
    descripcion: 'Visual atractivo que compara los diferentes tipos de salario de forma clara y concisa.',
    tipo: 'imagen',
    icono: <FaFileImage className="w-6 h-6" />,
    tamano: '1.8 MB',
    color: 'text-blue-500',
    etiquetas: ['Visual', 'Comparativo', 'Infografía']
  },
  {
    id: 'calculadora-salarial',
    titulo: 'Calculadora de Salarios Interactiva',
    descripcion: 'Herramienta online para calcular diferentes tipos de salario y comparar opciones.',
    tipo: 'herramienta',
    icono: <FaCalculator className="w-6 h-6" />,
    tamano: 'Online',
    color: 'text-green-500',
    etiquetas: ['Herramienta', 'Cálculo', 'Interactivo']
  },
  {
    id: 'plantilla-contrato',
    titulo: 'Plantillas de Contrato Laboral',
    descripcion: 'Documentos modelo para diferentes tipos de contratos con cláusulas salariales incluidas.',
    tipo: 'documento',
    icono: <FaFileAlt className="w-6 h-6" />,
    tamano: '856 KB',
    color: 'text-purple-500',
    etiquetas: ['Legal', 'Plantillas', 'Contratos']
  },
  {
    id: 'estudio-mercado',
    titulo: 'Estudio de Mercado Salarial 2024',
    descripcion: 'Análisis detallado de tendencias salariales por sector y nivel profesional.',
    tipo: 'pdf',
    icono: <FaBook className="w-6 h-6" />,
    tamano: '3.2 MB',
    color: 'text-indigo-500',
    etiquetas: ['Estadísticas', 'Mercado', 'Tendencias']
  }
];

const recursosAdicionales = [
  {
    titulo: 'Webinars Grabados',
    descripcion: 'Accede a nuestras sesiones educativas sobre conceptos salariales',
    icono: <FaVideo className="w-8 h-8" />,
    enlace: '#'
  },
  {
    titulo: 'Comunidad de RRHH',
    descripcion: 'Únete a nuestro foro para discutir temas relacionados con compensación',
    icono: <FaUsers className="w-8 h-8" />,
    enlace: '#'
  },
  {
    titulo: 'Newsletter Semanal',
    descripcion: 'Recibe actualizaciones sobre legislación laboral y tendencias salariales',
    icono: <FaEnvelope className="w-8 h-8" />,
    enlace: '#'
  }
];

export default function RecursosDescargables() {
  const descargarRecurso = (recursoId: string) => {
    // Simular descarga - en un entorno real esto descargaría el archivo
    alert(`Descargando: ${recursos.find(r => r.id === recursoId)?.titulo}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8"
    >
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {recursos.map((recurso, index) => (
          <motion.div
            key={recurso.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-linear-to-br from-white to-gray-50 rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gray-100 ${recurso.color}`}>
                {recurso.icono}
              </div>
              <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                {recurso.tamano}
              </span>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {recurso.titulo}
            </h3>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {recurso.descripcion}
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {recurso.etiquetas.map((etiqueta, etiquetaIndex) => (
                <span
                  key={etiquetaIndex}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                >
                  {etiqueta}
                </span>
              ))}
            </div>

            <button
              onClick={() => descargarRecurso(recurso.id)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <FaDownload className="mr-2" />
              Descargar
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
      >
        <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
          <FaDownload className="mr-3" />
          Recursos Adicionales
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {recursosAdicionales.map((recurso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-3">{recurso.icono}</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {recurso.titulo}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {recurso.descripcion}
              </p>
              <button className="bg-white hover:bg-gray-50 text-blue-600 font-medium py-2 px-4 rounded-lg border border-blue-200 transition-colors duration-200">
                Acceder
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center justify-center">
            <FaPhone className="mr-2" />
            ¿Necesitas Ayuda?
          </h4>
          <p className="text-yellow-700 mb-4">
            ¿Tienes preguntas específicas sobre algún concepto salarial o necesitas asesoría personalizada?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-medium py-2 px-6 rounded-lg transition-colors duration-200">
              Contactar Asesor
            </button>
            <button className="bg-white hover:bg-gray-50 text-yellow-700 font-medium py-2 px-6 rounded-lg border border-yellow-300 transition-colors duration-200">
              Preguntas Frecuentes
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
