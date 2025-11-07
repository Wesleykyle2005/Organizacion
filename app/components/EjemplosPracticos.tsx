'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaLightbulb, FaDollarSign } from 'react-icons/fa';
import Image from 'next/image';

interface Ejemplo {
  id: string;
  titulo: string;
  descripcion: string;
  icono: React.ReactNode;
  color: string;
  casos: {
    profesion: string;
    explicacion: string;
    calculo?: string;
  }[];
}

const ejemplos: Ejemplo[] = [
  {
    id: 'oficina',
    titulo: 'Empleados de Oficina',
    descripcion: 'Ejemplos típicos en entornos administrativos y corporativos',
    icono: <Image src="/icons/Oficina.svg" alt="Oficina" width={24} height={24} className="w-6 h-6" />,
    color: 'text-blue-600',
    casos: [
      {
        profesion: 'Asistente Administrativo',
        explicacion: 'Trabaja en una empresa de servicios con salario fijo mensual',
        calculo: 'Salario fijo: $1,800/mes + bono anual: $2,160 = Sueldo total: $21,960/año'
      },
      {
        profesion: 'Gerente de Ventas',
        explicacion: 'Tiene salario base más comisiones por objetivos cumplidos',
        calculo: 'Salario fijo: $3,000/mes + 5% comisión sobre $50,000 ventas = Sueldo total: $40,000/año'
      }
    ]
  },
  {
    id: 'manufactura',
    titulo: 'Sector Manufacturero',
    descripcion: 'Casos donde el salario por destajo es común',
    icono: <Image src="/icons/Fabrica.svg" alt="Fábrica" width={24} height={24} className="w-6 h-6" />,
    color: 'text-red-600',
    casos: [
      {
        profesion: 'Operario de Línea',
        explicacion: 'Produce piezas en una fábrica con pago por unidad',
        calculo: 'Salario por destajo: $0.50 por pieza × 2,000 piezas = $1,000/semana'
      },
      {
        profesion: 'Costurera Industrial',
        explicacion: 'Trabaja en confección con pago por prenda terminada',
        calculo: 'Salario por destajo: $3 por prenda × 150 prendas = $450/semana'
      }
    ]
  },
  {
    id: 'comercio',
    titulo: 'Sector Comercio',
    descripcion: 'Ejemplos en ventas y atención al cliente',
    icono: <Image src="/icons/Tecnologia.svg" alt="Tecnología" width={24} height={24} className="w-6 h-6" />,
    color: 'text-green-600',
    casos: [
      {
        profesion: 'Vendedor de Tienda',
        explicacion: 'Trabaja en retail con salario base más comisiones',
        calculo: 'Salario fijo: $800/mes + 3% comisión sobre $15,000 ventas = Sueldo total: $11,250/mes'
      },
      {
        profesion: 'Ejecutivo de Cuentas',
        explicacion: 'Representante comercial con objetivos trimestrales',
        calculo: 'Salario variable: Base $2,000 + bono por meta cumplida $1,500 = $3,500/mes'
      }
    ]
  },
  {
    id: 'agricultura',
    titulo: 'Sector Agrícola',
    descripcion: 'Trabajos estacionales con pago por producción',
    icono: <Image src="/icons/Agricola.svg" alt="Agrícola" width={24} height={24} className="w-6 h-6" />,
    color: 'text-yellow-600',
    casos: [
      {
        profesion: 'Cosechador de Café',
        explicacion: 'Trabaja en finca con pago por kilogramo recolectado',
        calculo: 'Salario por destajo: $0.80/kg × 200 kg/día × 25 días = $4,000/mes'
      },
      {
        profesion: 'Jornalero Agrícola',
        explicacion: 'Trabajador eventual en temporada de siembra',
        calculo: 'Salario por destajo: $50 por tarea completa × 20 tareas = $1,000/semana'
      }
    ]
  },
  {
    id: 'tecnologia',
    titulo: 'Sector Tecnología',
    descripcion: 'Profesionales con compensación mixta',
    icono: <Image src="/icons/Tecnologia.svg" alt="Tecnología" width={24} height={24} className="w-6 h-6" />,
    color: 'text-purple-600',
    casos: [
      {
        profesion: 'Desarrollador Senior',
        explicacion: 'Trabaja en empresa tech con salario competitivo',
        calculo: 'Salario fijo: $5,000/mes + stock options: $10,000/año + bono: $6,000 = Sueldo total: $76,000/año'
      },
      {
        profesion: 'Consultor Freelance',
        explicacion: 'Trabaja por proyectos con tarifa por hora',
        calculo: 'Salario por tiempo: $80/hora × 160 horas/mes = $12,800/mes'
      }
    ]
  }
];

export default function EjemplosPracticos() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8"
    >
      

      <div className="space-y-8">
        {ejemplos.map((ejemplo, index) => (
          <motion.div
            key={ejemplo.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-linear-to-r from-gray-50 to-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <div className={`p-3 rounded-full bg-gray-100 mr-4 ${ejemplo.color}`}>
                {ejemplo.icono}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{ejemplo.titulo}</h3>
                <p className="text-gray-600">{ejemplo.descripcion}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ejemplo.casos.map((caso, casoIndex) => (
                <motion.div
                  key={casoIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + casoIndex * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                >
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {caso.profesion}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{caso.explicacion}</p>
                  {caso.calculo && (
                    <div className="bg-blue-50 p-3 rounded-md">
                      <p className="text-blue-800 text-sm font-medium flex items-center">
                        <FaDollarSign className="mr-2" />
                        {caso.calculo}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
      >
        <h3 className="text-xl font-bold text-blue-800 mb-4 text-center flex items-center justify-center">
          <FaLightbulb className="mr-2" />
          Lecciones Aprendidas
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Ventajas del Salario Fijo:</h4>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Estabilidad económica predecible</li>
              <li>• Seguridad para planificar gastos</li>
              <li>• Beneficios sociales garantizados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Ventajas del Salario Variable:</h4>
            <ul className="text-blue-600 text-sm space-y-1">
              <li>• Potencial de ingresos mayores</li>
              <li>• Incentiva el rendimiento</li>
              <li>• Recompensa el esfuerzo extra</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
