import React from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./types/Product";

const productos: Product[] = [
  {
    id: 1,
    nombre: "Jarabe de Carbocistéína",
    descripcion: "Mucolítico y expectorante para adultos",
    precio: 85.00,
    imagen: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 2,
    nombre: "Carbocide Detox",
    descripcion: "Fórmula detox con carbón activado",
    precio: 120.00,
    imagen: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 3,
    nombre: "Bombico Líquido",
    descripcion: "Suplemento energético en presentación líquida",
    precio: 95.00,
    imagen: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 4,
    nombre: "Bombico Frasco",
    descripcion: "Vitaminas y minerales esenciales",
    precio: 110.00,
    imagen: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 5,
    nombre: "Bombico Plus",
    descripcion: "Fórmula reforzada con antioxidantes",
    precio: 135.00,
    imagen: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 6,
    nombre: "Bombico Compuesto",
    descripcion: "Complejo vitamínico de amplio espectro",
    precio: 145.00,
    imagen: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 7,
    nombre: "Suplemento Natural",
    descripcion: "Base herbal con extractos naturales",
    precio: 75.00,
    imagen: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 8,
    nombre: "Bombico Rojo",
    descripcion: "Energizante con vitamina B12 y hierro",
    precio: 99.00,
    imagen: "https://images.unsplash.com/photo-1559757175-7cb036e0d465?w=300&h=400&fit=crop&q=80",
  },
  {
    id: 9,
    nombre: "Carbocide Green",
    descripcion: "Detox verde con clorofila natural",
    precio: 88.00,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop&q=80",
  },
];

// Componente padre: gestiona los datos y renderiza la lista
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Grilla de Productos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {productos.map((product) => (
          // Componente hijo recibe los datos desde el padre via props
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
