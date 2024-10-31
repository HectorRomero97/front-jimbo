import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomList from '../components/molecules/CustomList';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:8000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">

      <h2 className="text-xl">Lista de Productos</h2>
      <CustomList contents={products} />
    </div>
  );
};

export default ProductListPage;