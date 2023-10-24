import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import api from '../api/api';
function login() {

  const route = useRouter();

  const [user, setUser] = useState('')
  const changeUser = (event) => {
    setUser({
      ...user, [event.target.name]: event.target.value
    })
  }
  const handleLogin = async () => {

    const userlogin  = await api.getValidation(user);
    if(userlogin!=null){
      localStorage.setItem('user', JSON.stringify(userlogin));
      route.push('/logged/home')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">ID</label>
            <input
              type="number"
              id="id"
              name='id'
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Seu ID"
             
              onChange={changeUser}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Senha</label>
            <input
              type="password"
              id="password"
              name='password'
              className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Sua senha"

              onChange={changeUser}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default login;