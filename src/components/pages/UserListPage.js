import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.user_id}>{user.user_name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;