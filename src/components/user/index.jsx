import axios from 'axios';
import React, { useEffect, useState } from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:8082',
});

const getall = async () => {
  try {
    const res = await instance.get('/user');
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getall();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};