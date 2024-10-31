import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');

  const crearProducto = async (e) => {
    e.preventDefault();
    const newProduct = { product_name: productName, product_description: productDescription, price: parseFloat(price) };
    try {
      await axios.post(`http://localhost:8000/products/?product_name=${newProduct.product_name}&price=${newProduct.price}&product_description=${newProduct.product_description}`);
    } catch (error) {
      console.error('Error durante la creacion del producto', error);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={crearProducto}>
      <input className='my-2' type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nombre del producto" required />
      <input className='my-2' type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Descripcion del Producto" />
      <input className='my-2' type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" required />
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md my-2" type="submit">Enviar</button>
    </form>
  );
};

export default ProductForm;