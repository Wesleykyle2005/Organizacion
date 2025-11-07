'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaMoneyBillWave, FaCoins, FaCalculator, FaChartLine, FaTools, FaLightbulb } from 'react-icons/fa';

interface CaracteristicaComparacion {
  caracteristica: string;
  sueldo: string | boolean;
  salario: string | boolean;
  salarioFijo: string | boolean;
  salarioVariable: string | boolean;
  salarioDestajo: string | boolean;
}

const caracteristicasComparacion: CaracteristicaComparacion[] = [
  {
    caracteristica: 'Base de cálculo',
    sueldo: 'Total percibido',
    salario: 'Por tiempo',
    salarioFijo: 'Fijo mensual',
    salarioVariable: 'Por objetivos',
    salarioDestajo: 'Por unidades'
  },
  {
    caracteristica: 'Estabilidad',
    sueldo: true,
    salario: true,
    salarioFijo: true,
    salarioVariable: false,
    salarioDestajo: false
  },
  {
    caracteristica: 'Depende del rendimiento',
    sueldo: false,
    salario: false,
    salarioFijo: false,
    salarioVariable: true,
    salarioDestajo: true
  },
  {
    caracteristica: 'Incentiva productividad',
    sueldo: false,
    salario: false,
    salarioFijo: false,
    salarioVariable: true,
    salarioDestajo: true
  },
  {
    caracteristica: 'Riesgo para trabajador',
    sueldo: false,
    salario: false,
    salarioFijo: false,
    salarioVariable: true,
    salarioDestajo: true
  },
  {
    caracteristica: 'Común en profesiones',
    sueldo: 'Todas',
    salario: 'Administrativas',
    salarioFijo: 'Oficinas',
    salarioVariable: 'Ventas',
    salarioDestajo: 'Manufactura'
  }
];

const conceptos = [
  { id: 'sueldo', titulo: 'Sueldo', icono: <FaMoneyBillWave />, color: 'bg-blue-500' },
  { id: 'salario', titulo: 'Salario', icono: <FaCoins />, color: 'bg-green-500' },
  { id: 'salario-fijo', titulo: 'Salario Fijo', icono: <FaCalculator />, color: 'bg-purple-500' },
  { id: 'salario-variable', titulo: 'Salario Variable', icono: <FaChartLine />, color: 'bg-orange-500' },
  { id: 'salario-destajo', titulo: 'Salario por Destajo', icono: <FaTools />, color: 'bg-red-500' }
];

export default function ComparacionSalarios() {
  const renderValor = (valor: string | boolean) => {
    if (typeof valor === 'boolean') {
      return valor ? (
        <FaCheck className="text-green-500 mx-auto" />
      ) : (
        <FaTimes className="text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm text-center block">{valor}</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 mx-6 mb-8"
    >
     

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-4 text-left font-semibold text-gray-800">
                Característica
              </th>
              {conceptos.map((concepto) => (
                <th key={concepto.id} className="border border-gray-300 p-4 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className={`w-12 h-12 rounded-full ${concepto.color} flex items-center justify-center text-gray-800`}>
                      {concepto.icono}
                    </div>
                    <span className="font-semibold text-sm text-gray-800">{concepto.titulo}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {caracteristicasComparacion.map((caracteristica, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="border border-gray-300 p-4 font-medium text-gray-800">
                  {caracteristica.caracteristica}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {renderValor(caracteristica.sueldo)}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {renderValor(caracteristica.salario)}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {renderValor(caracteristica.salarioFijo)}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {renderValor(caracteristica.salarioVariable)}
                </td>
                <td className="border border-gray-300 p-4 text-center">
                  {renderValor(caracteristica.salarioDestajo)}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 p-6 bg-blue-50 rounded-lg"
      >
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
          <FaLightbulb className="mr-2" />
          Consejos Importantes
        </h3>
        <ul className="text-blue-700 space-y-2">
          <li>• El <strong>sueldo</strong> engloba todos los conceptos de remuneración</li>
          <li>• Los salarios fijos ofrecen mayor <strong>seguridad económica</strong></li>
          <li>• Los salarios variables pueden generar <strong>ingresos mayores</strong> pero con más riesgo</li>
          <li>• El salario por destajo es ideal para trabajos donde se puede <strong>medir la producción</strong></li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
