import React, { useEffect, useState } from 'react'
import api from '../../api/api';

import { usePathname } from 'next/navigation';
export default () => {




  const [user, setUser] = useState('')
  const changeUser = (event) => {
    setUser({
      ...user, [event.target.name]: event.target.value
    })
    console.log(user)
  }

  const post = async () => {
    if (user !== null) {
      console.log(user)
      const response = api.post(user);
      console.log(response)
    }
  }


  return (
    <div className="h-[92%] flex justify-center items-center">
      <div className="w-[40%] h-[70%] flex items-center flex-col border border-thin rounded-md">
        <div className="w-full h-[20%] flex justify-center items-center">
          <h1>Register</h1>
        </div>
        <div className="w-full h-full flex items-center flex-col">
          <div className="divRegister ">
            <div className="w-5/6">
              <p>Username</p>
            </div>
            <input name='username' required
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              onChange={changeUser}
            />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Password</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text" name='password'
              onChange={changeUser} />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Address</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text" name='address'
              onChange={changeUser} />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Age</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="number" name="age"
              onChange={changeUser} />
          </div>
          <div className="w-[76%] h-[10%]">
            <select name="userEnum" id="" className='w-1/4 h-1/2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300  cursor-pointer'
              onChange={changeUser}
              defaultValue={"PROFESSOR"}>
              <option value="PROFESSOR">PROFESSOR</option>
              <option value="SECRETARY">SECRETARY</option>
              <option value="STUDENT">  STUDENT</option>
            </select>
          </div>
          <div className='h-[10%] w-full flex justify-center items-center'>
            <button className="h-5/6 w-1/6 bg-gray-400 hover:bg-gray-300" onClick={post}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}