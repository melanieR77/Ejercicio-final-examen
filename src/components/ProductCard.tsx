import React from "react";
import { Product } from "../types/Product";

// Props tipadas con la interface Product
interface ProductCardProps {
  product: Product;
}

// Componente hijo: solo presenta la información recibida del padre
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="w-28 h-36 object-contain mb-3"
      />
      <h3 className="text-sm font-semibold text-gray-800 mb-1 leading-tight">
        {product.nombre}
      </h3>
      <p className="text-xs text-gray-500 mb-2 leading-snug">
        {product.descripcion}
      </p>
      <span className="text-red-600 font-bold text-sm">
        L. {product.precio.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductCard;
