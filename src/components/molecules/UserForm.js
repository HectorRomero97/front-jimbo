import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [userName, setProductName] = useState('');
  const [userEmail, setProductDescription] = useState('');

  const crearUsuario = async (e) => {
    e.preventDefault();
    const newUser = {user_name: userName, email: userEmail };

    try {
      await axios.post('http://localhost:8000/users', newUser); 
    } catch (error) {
      console.error('Error durante la creacion del producto', error);
    }
  };

  return (
    <form onSubmit={crearUsuario}>
      <input type="text" value={userName} onChange={(e) => setProductName(e.target.value)} placeholder="Nombre del usuario" required />
      <input type="text" value={userEmail} onChange={(e) => setProductDescription(e.target.value)} placeholder="Email del Usuario" required/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;