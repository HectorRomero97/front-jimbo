import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Elige un camino</h1>
        <div className="space-x-4">
            <Link to="/users">
              <button className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 data-[active]:bg-sky-700">
                Ver Usuarios
              </button>
            </Link>
            <Link to="/products">
              <button className="rounded bg-red-600 py-2 px-4 text-sm text-white hover:bg-red-500 data-[active]:bg-sky-700">
                Ver Productos
              </button>
            </Link> 
        </div>
    </div>
  );
};

export default HomePage;