'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Termo {
  id: string;
  titulo: string;
  icono: React.ReactNode;
  color: string;
  descripcionCorta: string;
}

const terminos: Termo[] = [
  {
    id: 'sueldo',
    titulo: 'Sueldo',
    icono: <Image src="/icons/Billetes.svg" alt="Sueldo" width={32} height={32} className="w-8 h-8" />,
    color: 'bg-blue-500',
    descripcionCorta: 'Remuneración total percibida por un trabajador'
  },
  {
    id: 'salario',
    titulo: 'Salario',
    icono: <Image src="/icons/Billete.svg" alt="Salario" width={32} height={32} className="w-8 h-8" />,
    color: 'bg-green-500',
    descripcionCorta: 'Pago periódico por servicios prestados'
  },
  {
    id: 'salario-fijo',
    titulo: 'Salario Fijo',
    icono: <Image src="/icons/Calculadora.svg" alt="Salario Fijo" width={32} height={32} className="w-8 h-8" />,
    color: 'bg-purple-500',
    descripcionCorta: 'Remuneración constante e inalterable'
  },
  {
    id: 'salario-variable',
    titulo: 'Salario Variable',
    icono: <Image src="/icons/Variable.svg" alt="Salario Variable" width={32} height={32} className="w-8 h-8" />,
    color: 'bg-orange-500',
    descripcionCorta: 'Parte del sueldo que depende de objetivos'
  },
  {
    id: 'salario-destajo',
    titulo: 'Salario por Destajo',
    icono: <Image src="/icons/Destajo.svg" alt="Salario por Destajo" width={32} height={32} className="w-8 h-8" />,
    color: 'bg-red-500',
    descripcionCorta: 'Pago basado en la cantidad de trabajo realizado'
  }
];

interface GlosarioVisualProps {
  onTerminoSeleccionado: (terminoId: string) => void;
  terminoActivo: string | null;
}

export default function GlosarioVisual({ onTerminoSeleccionado, terminoActivo }: GlosarioVisualProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {terminos.map((termino) => (
        <motion.div
          key={termino.id}
          className={`relative cursor-pointer rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
            terminoActivo === termino.id
              ? `${termino.color} text-gray-800 scale-105`
              : 'bg-white text-gray-800 hover:scale-105'
          }`}
          onClick={() => onTerminoSeleccionado(termino.id)}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            terminoActivo === termino.id ? 'bg-white bg-opacity-20' : termino.color
          }`}>
            <div className={terminoActivo === termino.id ? 'text-black [&>img]:brightness-0' : 'text-gray-800 [&>img]:brightness-0 [&>img]:invert'}>
              {termino.icono}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{termino.titulo}</h3>
          <p className={`text-sm ${terminoActivo === termino.id ? 'text-gray-800 text-opacity-90' : 'text-gray-600'}`}>
            {termino.descripcionCorta}
          </p>
          {terminoActivo === termino.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <span className="text-xs font-bold text-gray-800">✓</span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
