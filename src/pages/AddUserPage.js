import React from 'react';
import UserForm from '../components/molecules/UserForm';

const AddUserPage = () => {
  return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h2 className="text-xl">Agregar Usuario</h2>
      <UserForm />
      </div>
  );
};

export default AddUserPage;