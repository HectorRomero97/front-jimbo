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
      await axios.post('http://localhost:8000/products', newProduct);
    } catch (error) {
      console.error('Error durante la creacion del producto', error);
    }
  };

  return (
    <form onSubmit={crearProducto}>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nombre del producto" required />
      <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Descripcion del Producto" />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;