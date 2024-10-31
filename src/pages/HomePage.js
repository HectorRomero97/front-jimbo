import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@headlessui/react'

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <h1 className="text-3xl mb-4">Elige un camino</h1>
      <div className="space-x-4">
        <Link to="/users">
          <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
            Ver Usuarios
          </Button>
        </Link>
        <Link to="/products">
          <Button className="rounded bg-red-600 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-sky-700">
            Ver Productos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;