import React from 'react';
import ProductForm from '../components/molecules/ProductForm';

const AddProductPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h2 className="text-xl">Agregar Producto</h2>
      <ProductForm />
    </div>
  );
};

export default AddProductPage;