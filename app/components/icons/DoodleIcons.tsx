import React from 'react';

// Icono de Sueldo - Monedas apiladas
export const DoodleSueldo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="35" r="12" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
    <circle cx="50" cy="30" r="12" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
    <circle cx="70" cy="35" r="12" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
    <circle cx="40" cy="50" r="12" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
    <circle cx="60" cy="55" r="12" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
    <text x="50" y="75" textAnchor="middle" fill="#FFA500" fontSize="14" fontWeight="bold">$</text>
  </svg>
);

// Icono de Salario - Reloj con dinero
export const DoodleSalario: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" fill="#E8F5E8" stroke="#4CAF50" strokeWidth="3"/>
    <line x1="50" y1="50" x2="50" y2="35" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="62" y2="50" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="2" fill="#4CAF50"/>
    <text x="50" y="85" textAnchor="middle" fill="#4CAF50" fontSize="12" fontWeight="bold">TIME</text>
  </svg>
);

// Icono de Salario Fijo - Candado con billete
export const DoodleSalarioFijo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="45" width="30" height="20" rx="3" fill="#FFF3CD" stroke="#856404" strokeWidth="2"/>
    <rect x="40" y="50" width="20" height="10" fill="#856404"/>
    <circle cx="50" cy="35" r="8" fill="#FFF3CD" stroke="#856404" strokeWidth="2"/>
    <rect x="46" y="31" width="8" height="8" fill="#856404"/>
    <text x="50" y="80" textAnchor="middle" fill="#856404" fontSize="10" fontWeight="bold">LOCKED</text>
  </svg>
);

// Icono de Salario Variable - Flechas arriba/abajo
export const DoodleSalarioVariable: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 60 L50 30 L70 60" stroke="#FF9800" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="#FFF3CD"/>
    <path d="M30 40 L50 70 L70 40" stroke="#4CAF50" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="#E8F5E8"/>
    <circle cx="50" cy="50" r="3" fill="#FF9800"/>
    <circle cx="50" cy="50" r="1" fill="#4CAF50"/>
  </svg>
);

// Icono de Salario por Destajo - Herramientas con contador
export const DoodleSalarioDestajo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="35" width="50" height="30" rx="5" fill="#FFF3CD" stroke="#856404" strokeWidth="2"/>
    <circle cx="35" cy="45" r="3" fill="#856404"/>
    <circle cx="45" cy="45" r="3" fill="#856404"/>
    <circle cx="55" cy="45" r="3" fill="#856404"/>
    <circle cx="65" cy="45" r="3" fill="#856404"/>
    <circle cx="35" cy="55" r="3" fill="#856404"/>
    <circle cx="45" cy="55" r="3" fill="#856404"/>
    <text x="50" y="80" textAnchor="middle" fill="#856404" fontSize="10" fontWeight="bold">COUNT</text>
  </svg>
);

// Icono de Nómina - Documento con lista
export const DoodleNomina: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="25" y="20" width="50" height="60" rx="3" fill="#E3F2FD" stroke="#1976D2" strokeWidth="2"/>
    <line x1="35" y1="35" x2="65" y2="35" stroke="#1976D2" strokeWidth="2"/>
    <line x1="35" y1="45" x2="65" y2="45" stroke="#1976D2" strokeWidth="2"/>
    <line x1="35" y1="55" x2="65" y2="55" stroke="#1976D2" strokeWidth="2"/>
    <line x1="35" y1="65" x2="65" y2="65" stroke="#1976D2" strokeWidth="2"/>
    <circle cx="30" cy="35" r="2" fill="#1976D2"/>
    <circle cx="30" cy="45" r="2" fill="#1976D2"/>
    <circle cx="30" cy="55" r="2" fill="#1976D2"/>
    <circle cx="30" cy="65" r="2" fill="#1976D2"/>
  </svg>
);

// Icono de Beneficios - Estrella con regalos
export const DoodleBeneficios: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L55 35 L75 35 L60 50 L65 70 L50 55 L35 70 L40 50 L25 35 L45 35 Z" fill="#FFC107" stroke="#FF8F00" strokeWidth="2"/>
    <circle cx="35" cy="25" r="3" fill="#E91E63"/>
    <circle cx="65" cy="25" r="3" fill="#E91E63"/>
    <rect x="45" y="75" width="10" height="8" rx="2" fill="#4CAF50"/>
    <text x="50" y="90" textAnchor="middle" fill="#4CAF50" fontSize="8" fontWeight="bold">GIFT</text>
  </svg>
);

// Icono de Comisión - Manos intercambiando
export const DoodleComision: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 50 L35 40 L45 50 L35 60 Z" fill="#FF5722" stroke="#D84315" strokeWidth="2"/>
    <path d="M75 50 L65 60 L55 50 L65 40 Z" fill="#2196F3" stroke="#1976D2" strokeWidth="2"/>
    <circle cx="40" cy="45" r="3" fill="#FFD700"/>
    <circle cx="60" cy="55" r="3" fill="#FFD700"/>
    <text x="50" y="80" textAnchor="middle" fill="#FF5722" fontSize="10" fontWeight="bold">SHAKE</text>
  </svg>
);

// Icono de Deducciones - Calculadora restando
export const DoodleDeducciones: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="25" width="60" height="50" rx="5" fill="#FCE4EC" stroke="#C2185B" strokeWidth="2"/>
    <rect x="30" y="35" width="40" height="6" fill="#C2185B"/>
    <circle cx="35" cy="50" r="3" fill="#C2185B"/>
    <circle cx="45" cy="50" r="3" fill="#C2185B"/>
    <circle cx="55" cy="50" r="3" fill="#C2185B"/>
    <circle cx="65" cy="50" r="3" fill="#C2185B"/>
    <line x1="35" y1="60" x2="65" y2="60" stroke="#C2185B" strokeWidth="3"/>
    <text x="50" y="85" textAnchor="middle" fill="#C2185B" fontSize="10" fontWeight="bold">MINUS</text>
  </svg>
);

// Icono de Salario Mínimo - Escudo protector
export const DoodleSalarioMinimo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 20 L70 35 L70 65 L50 80 L30 65 L30 35 Z" fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
    <circle cx="50" cy="50" r="8" fill="#FFF"/>
    <text x="50" y="55" textAnchor="middle" fill="#4CAF50" fontSize="12" fontWeight="bold">MIN</text>
    <text x="50" y="90" textAnchor="middle" fill="#2E7D32" fontSize="8" fontWeight="bold">PROTECT</text>
  </svg>
);

// Iconos para navegación y secciones
export const DoodleHome: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DoodleTable: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 7h8M8 12h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DoodleBriefcase: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const DoodleQuestion: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DoodleDownload: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
