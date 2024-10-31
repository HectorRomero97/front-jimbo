import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../components/molecules/CustomCard';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const ProductCard = CustomCard("products");
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:8000/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <div className="artboard artboard-horizontal phone-3 bg-gray-900 rounded-lg flex flex-col justify-center items-center h-screen">
        <h2 className="text-xl">Lista de Productos</h2>
        <div className="grid grid-cols-1 gap-4">
        { products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.product_id} {...product} />
          ))
        )
        : ( <p> Cargando Productos... </p> )
        }
      </div>
      <Link to="/create-product">
      <button>Crear Nuevo Producto</button>
      </Link>
      </div>
    </div>
  );
};

export default ProductListPage;