import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomList from '../components/molecules/CustomList'; 

const UserListPage = () => {
  const [users, setProducts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/users'); 
      setProducts(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <h2 className="text-xl">Lista de Usuarios</h2>
      <CustomList contents={users} />
    </div>
  );
};

export default UserListPage;