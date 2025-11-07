'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaQuestionCircle, FaTrophy, FaThumbsUp, FaBookOpen, FaGraduationCap } from 'react-icons/fa';

interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
  explicacion: string;
}

const preguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Cuál de los siguientes conceptos representa la remuneración total que percibe un trabajador?',
    opciones: ['Salario', 'Sueldo', 'Salario Fijo', 'Salario por Destajo'],
    respuestaCorrecta: 1,
    explicacion: 'El sueldo engloba la remuneración total, incluyendo salario base y complementos.'
  },
  {
    id: 2,
    pregunta: '¿Qué tipo de salario depende del cumplimiento de objetivos específicos?',
    opciones: ['Salario Fijo', 'Salario Variable', 'Salario por Destajo', 'Salario Base'],
    respuestaCorrecta: 1,
    explicacion: 'El salario variable depende del cumplimiento de metas y objetivos establecidos.'
  },
  {
    id: 3,
    pregunta: '¿Cuál es la principal característica del salario por destajo?',
    opciones: ['Pago mensual fijo', 'Pago por hora trabajada', 'Pago por unidades producidas', 'Pago por años de experiencia'],
    respuestaCorrecta: 2,
    explicacion: 'El salario por destajo se basa en la cantidad de trabajo realizado o unidades producidas.'
  },
  {
    id: 4,
    pregunta: '¿Qué tipo de salario ofrece mayor estabilidad económica?',
    opciones: ['Salario Variable', 'Salario por Destajo', 'Salario Fijo', 'Salario por Comisión'],
    respuestaCorrecta: 2,
    explicacion: 'El salario fijo proporciona estabilidad ya que no varía según el rendimiento.'
  },
  {
    id: 5,
    pregunta: '¿En qué sector es más común el salario por destajo?',
    opciones: ['Oficinas administrativas', 'Ventas', 'Manufactura y agricultura', 'Educación'],
    respuestaCorrecta: 2,
    explicacion: 'El salario por destajo es común en manufactura, agricultura y otros sectores donde se puede medir la producción.'
  }
];

export default function Quiz() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState<number[]>([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [respuestaMostrada, setRespuestaMostrada] = useState<number | null>(null);

  const seleccionarRespuesta = (indiceRespuesta: number) => {
    const nuevasRespuestas = [...respuestasSeleccionadas];
    nuevasRespuestas[preguntaActual] = indiceRespuesta;
    setRespuestasSeleccionadas(nuevasRespuestas);
    setRespuestaMostrada(indiceRespuesta);
  };

  const siguientePregunta = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
      setRespuestaMostrada(null);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciarQuiz = () => {
    setPreguntaActual(0);
    setRespuestasSeleccionadas([]);
    setMostrarResultado(false);
    setRespuestaMostrada(null);
  };

  const calcularPuntuacion = () => {
    let correctas = 0;
    respuestasSeleccionadas.forEach((respuesta, index) => {
      if (respuesta === preguntas[index].respuestaCorrecta) {
        correctas++;
      }
    });
    return correctas;
  };

  const obtenerMensajeResultado = (puntuacion: number) => {
    const porcentaje = (puntuacion / preguntas.length) * 100;
    if (porcentaje >= 80) return { mensaje: '¡Excelente! Dominas los conceptos de salario.', color: 'text-green-600', icono: <FaTrophy className="text-green-500" /> };
    if (porcentaje >= 60) return { mensaje: '¡Muy bien! Tienes buen conocimiento.', color: 'text-blue-600', icono: <FaThumbsUp className="text-blue-500" /> };
    if (porcentaje >= 40) return { mensaje: 'Bien, pero puedes mejorar.', color: 'text-yellow-600', icono: <FaBookOpen className="text-yellow-500" /> };
    return { mensaje: 'Necesitas estudiar más los conceptos.', color: 'text-red-600', icono: <FaGraduationCap className="text-red-500" /> };
  };

  if (mostrarResultado) {
    const puntuacion = calcularPuntuacion();
    const resultado = obtenerMensajeResultado(puntuacion);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8 text-center"
      >
        <div className="text-6xl mb-4">{resultado.icono}</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Resultado del Quiz</h2>
        <div className={`text-4xl font-bold mb-4 ${resultado.color}`}>
          {puntuacion}/{preguntas.length}
        </div>
        <p className={`text-xl mb-8 ${resultado.color}`}>
          {resultado.mensaje}
        </p>

        <div className="space-y-4 mb-8">
          {preguntas.map((pregunta, index) => {
            const respuestaUsuario = respuestasSeleccionadas[index];
            const esCorrecta = respuestaUsuario === pregunta.respuestaCorrecta;

            return (
              <div key={pregunta.id} className={`p-4 rounded-lg ${esCorrecta ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">Pregunta {index + 1}</span>
                  {esCorrecta ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                </div>
                <p className="text-sm text-gray-600 mt-1">{pregunta.pregunta}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Tu respuesta: {pregunta.opciones[respuestaUsuario]}
                </p>
                {!esCorrecta && (
                  <p className="text-sm text-green-600 mt-1">
                    Correcta: {pregunta.opciones[pregunta.respuestaCorrecta]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={reiniciarQuiz}
          className="bg-blue-500 hover:bg-blue-600 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          Intentar de Nuevo
        </button>
      </motion.div>
    );
  }

  const pregunta = preguntas[preguntaActual];
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8"
    >
      <div className="text-center mb-8">
  

        <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
          <motion.div
            className="bg-blue-500 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progreso}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-sm text-gray-500">
          Pregunta {preguntaActual + 1} de {preguntas.length}
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {pregunta.pregunta}
        </h3>

        <div className="space-y-3">
          {pregunta.opciones.map((opcion, index) => (
            <motion.button
              key={index}
              onClick={() => seleccionarRespuesta(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                respuestaMostrada === index
                  ? index === pregunta.respuestaCorrecta
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-red-500 bg-red-50 text-red-800'
                  : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50 text-black'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={respuestaMostrada !== null}
            >
              <div className="flex items-center justify-between">
                <span>{opcion}</span>
                {respuestaMostrada === index && (
                  index === pregunta.respuestaCorrecta ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    <FaTimes className="text-red-500" />
                  )
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {respuestaMostrada !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200"
        >
          <h4 className="font-semibold text-blue-800 mb-2">Explicación:</h4>
          <p className="text-blue-700">{pregunta.explicacion}</p>
        </motion.div>
      )}

      <div className="text-center">
        <button
          onClick={siguientePregunta}
          disabled={respuestaMostrada === null}
          className={`font-bold py-3 px-8 rounded-lg transition-colors duration-200 ${
            respuestaMostrada !== null
              ? 'bg-blue-500 hover:bg-blue-600 text-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {preguntaActual === preguntas.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
        </button>
      </div>
    </motion.div>
  );
}
