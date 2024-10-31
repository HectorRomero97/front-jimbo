import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [userName, setProductName] = useState('');
  const [userEmail, setProductDescription] = useState('');

  const crearUsuario = async (e) => {
    e.preventDefault();
    const newUser = {user_name: userName, email: userEmail };

    try {
      await axios.post(`http://localhost:8000/users/?user_name=${newUser.user_name}&email=${newUser.email}`); 
    } catch (error) {
      console.error('Error durante la creacion del producto', error);
    }
  };

  return (
    <form className='flex flex-col' onSubmit={crearUsuario}>
      <input type="text" className='my-2' value={userName} onChange={(e) => setProductName(e.target.value)} placeholder="Nombre del usuario" required />
      <input type="text" className='my-2' value={userEmail} onChange={(e) => setProductDescription(e.target.value)} placeholder="Email del Usuario" required/>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md my-2" type="submit">Enviar</button>
    </form>
  );
};

export default UserForm;