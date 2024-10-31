import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../components/molecules/CustomCard'; 
import { Link } from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const UsersCard = CustomCard("users");
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/users'); 
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h2 className="text-xl my-5">Lista de Usuarios</h2>
      <div className="grid grid-cols-1 gap-4">
        { users.length > 0 ? (
          users.map(user => (
            <UsersCard key={user.user_id} {...user} />
          ))
        )
        : ( <p> Cargando Usuarios... </p> )
        }
      </div>
      <Link to="/create-user">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md my-5">Crear Nuevo Usuario</button>
      </Link>
    </div>
  );
};

export default UserListPage;