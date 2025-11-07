'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Definicion {
  id: string;
  titulo: string;
  icono: React.ReactNode;
  color: string;
  definicion: string;
  caracteristicas: string[];
  ejemplos: string[];
}

const definiciones: Definicion[] = [
  {
    id: 'sueldo',
    titulo: 'Sueldo',
    icono: <Image src="/icons/Billetes.svg" alt="Sueldo" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-blue-500',
    definicion: 'El sueldo es la remuneración total que percibe un trabajador por sus servicios, incluyendo tanto la parte fija como la variable. Representa la compensación económica completa por el trabajo realizado.',
    caracteristicas: [
      'Incluye salario base más complementos',
      'Puede ser mensual, quincenal o semanal',
      'Suele incluir beneficios adicionales',
      'Es la remuneración total del trabajador'
    ],
    ejemplos: [
      'Un empleado recibe $2,000 de salario base + $300 de bono = $2,300 de sueldo total',
      'Un profesional cobra honorarios de $5,000 por proyecto completo'
    ]
  },
  {
    id: 'salario',
    titulo: 'Salario',
    icono: <Image src="/icons/Billete.svg" alt="Salario" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-green-500',
    definicion: 'El salario es la retribución periódica que recibe un trabajador por los servicios prestados a un empleador. Es el pago regular que se establece por unidad de tiempo trabajada.',
    caracteristicas: [
      'Pago periódico (mensual, quincenal, semanal)',
      'Establecido por hora, día o mes',
      'Base para cálculos de prestaciones',
      'Regulado por leyes laborales'
    ],
    ejemplos: [
      'Salario mensual de $1,500 por trabajar 8 horas diarias',
      'Salario por hora de $15 por cada hora trabajada'
    ]
  },
  {
    id: 'salario-fijo',
    titulo: 'Salario Fijo',
    icono: <Image src="/icons/Calculadora.svg" alt="Salario Fijo" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-purple-500',
    definicion: 'El salario fijo es la parte de la remuneración que permanece constante e inalterable durante un período determinado, independientemente del rendimiento o resultados obtenidos.',
    caracteristicas: [
      'Monto constante e inalterable',
      'No depende del rendimiento',
      'Proporciona estabilidad económica',
      'Base para prestaciones sociales'
    ],
    ejemplos: [
      'Empleado administrativo con $2,000 mensuales fijos',
      'Profesor con salario base de $1,800 al mes'
    ]
  },
  {
    id: 'salario-variable',
    titulo: 'Salario Variable',
    icono: <Image src="/icons/Variable.svg" alt="Salario Variable" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-orange-500',
    definicion: 'El salario variable es la parte de la remuneración que depende del cumplimiento de objetivos, metas o resultados específicos. Está diseñado para incentivar el rendimiento y la productividad.',
    caracteristicas: [
      'Depende del cumplimiento de objetivos',
      'Incentiva el rendimiento',
      'Puede incluir comisiones o bonos',
      'Variable según resultados'
    ],
    ejemplos: [
      'Vendedor con 5% de comisión sobre ventas realizadas',
      'Gerente con bono de $500 si cumple meta de ventas trimestral'
    ]
  },
  {
    id: 'salario-destajo',
    titulo: 'Salario por Destajo',
    icono: <Image src="/icons/Destajo.svg" alt="Salario por Destajo" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-red-500',
    definicion: 'El salario por destajo es un sistema de remuneración donde el pago se basa en la cantidad de trabajo realizado o unidades producidas, incentivando la productividad y eficiencia.',
    caracteristicas: [
      'Pago por unidad de trabajo',
      'Incentiva la productividad',
      'Común en manufactura y agricultura',
      'Riesgo para el trabajador'
    ],
    ejemplos: [
      'Costurera paga $2 por prenda terminada',
      'Agricultor recibe $0.50 por kilo de cosecha'
    ]
  },
  {
    id: 'nomina',
    titulo: 'Nómina',
    icono: <Image src="/icons/Nomina.svg" alt="Nómina" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-indigo-500',
    definicion: 'La nómina es el documento oficial que registra y detalla los salarios, deducciones y beneficios de todos los empleados de una empresa en un período determinado.',
    caracteristicas: [
      'Registro oficial de pagos',
      'Incluye deducciones y beneficios',
      'Base para declaraciones fiscales',
      'Obligatoria por ley'
    ],
    ejemplos: [
      'Nómina mensual de una empresa con 50 empleados',
      'Recibo de nómina individual con detalle de percepciones y deducciones'
    ]
  },
  {
    id: 'beneficios',
    titulo: 'Beneficios Laborales',
    icono: <Image src="/icons/Oficina.svg" alt="Beneficios Laborales" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-teal-500',
    definicion: 'Los beneficios laborales son prestaciones adicionales al salario que las empresas ofrecen a sus empleados para mejorar su calidad de vida y retener talento.',
    caracteristicas: [
      'Prestaciones adicionales al salario',
      'Mejoran calidad de vida',
      'Ayudan en retención de talento',
      'Pueden ser obligatorios o voluntarios'
    ],
    ejemplos: [
      'Seguro médico, dental y oftalmológico',
      'Vacaciones pagadas, días de enfermedad y maternidad',
      'Fondo de ahorro, vales de despensa y transporte'
    ]
  },
  {
    id: 'comision',
    titulo: 'Comisión',
    icono: <Image src="/icons/Comision.svg" alt="Comisión" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-cyan-500',
    definicion: 'La comisión es un porcentaje del valor de ventas, servicios o transacciones que se paga adicionalmente al salario base como incentivo por resultados obtenidos.',
    caracteristicas: [
      'Porcentaje sobre resultados',
      'Incentiva las ventas',
      'Variable según desempeño',
      'Parte del salario variable'
    ],
    ejemplos: [
      '5% de comisión sobre ventas realizadas por un vendedor',
      'Comisión por referidos en ventas de seguros'
    ]
  },
  {
    id: 'deducciones',
    titulo: 'Deducciones',
    icono: <Image src="/icons/FlechaAbajo.svg" alt="Deducciones" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-pink-500',
    definicion: 'Las deducciones son descuentos que se aplican al salario bruto antes de calcular el salario neto a recibir. Incluyen impuestos, seguros sociales y otras retenciones legales.',
    caracteristicas: [
      'Descuentos al salario bruto',
      'Incluyen impuestos y seguros',
      'Obligatorias por ley',
      'Reducen el salario neto'
    ],
    ejemplos: [
      'Impuesto sobre la renta (ISR)',
      'Seguro social y aportaciones al INFONAVIT',
      'Préstamos personales y descuentos por faltas'
    ]
  },
  {
    id: 'salario-minimo',
    titulo: 'Salario Mínimo',
    icono: <Image src="/icons/Mundo.svg" alt="Salario Mínimo" width={24} height={24} className="w-6 h-6 [&>img]:brightness-0 [&>img]:invert" />,
    color: 'text-emerald-500',
    definicion: 'El salario mínimo es la remuneración mínima legal que los empleadores deben pagar a sus trabajadores por una jornada laboral completa, establecido por las autoridades competentes.',
    caracteristicas: [
      'Remuneración mínima legal',
      'Establecido por autoridades',
      'Protege derechos laborales',
      'Se actualiza periódicamente'
    ],
    ejemplos: [
      'Salario mínimo general aplicable a la mayoría de trabajadores',
      'Salario mínimo profesional para ciertas ocupaciones especializadas'
    ]
  }
];

interface DefinicionesProps {
  terminoActivo: string | null;
}

export default function Definiciones({ terminoActivo }: DefinicionesProps) {
  const definicionActiva = definiciones.find(def => def.id === terminoActivo);

  return (
    <AnimatePresence>
      {definicionActiva && (
        <motion.div
          initial={{ opacity: 0, y: 20, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -20, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <div className={`${definicionActiva.color} mr-4`}>
              {definicionActiva.icono}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{definicionActiva.titulo}</h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {definicionActiva.definicion}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Características Principales
              </h3>
              <ul className="space-y-2">
                {definicionActiva.caracteristicas.map((caracteristica, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    {caracteristica}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Ejemplos Prácticos
              </h3>
              <ul className="space-y-2">
                {definicionActiva.ejemplos.map((ejemplo, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    {ejemplo}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
