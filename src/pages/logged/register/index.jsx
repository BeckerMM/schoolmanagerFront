import React, { useEffect, useState } from 'react'
import api from '../../api/api';

import { usePathname } from 'next/navigation';
export default () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState(0)
  const [userEnum, setUserEnum] = useState('STUDENT')
  const [user, setUser] = useState('')
  const changeUser = (event) => {
    setUser({ userName, password, address, age, userEnum })
  }

  const post = async () => {
    changeUser()
    if (userName == '' || password == '' || address == '' || age == 0 ) {
      alert('Preencha todos os campos')
    } else { 
    if (user !== '' && user !== null) {
      console.log(user)
      const response = api.post(user);
      console.log(response)
    }
  }
  }



return (
  <div className="h-[92%] flex justify-center items-center">
    <div className="w-[35%] h-[80%] flex items-center flex-col border border-thin rounded-md">
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
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        </div>
        <div className="divRegister">
          <div className="w-5/6">
            <p>Password</p>
          </div>
          <input
            className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text" name='password'
            onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div className="divRegister">
          <div className="w-5/6">
            <p>Address</p>
          </div>
          <input
            className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
            type="text" name='address'
            onChange={(e) => { setAddress(e.target.value) }} />
        </div>
        <div className="divRegister">
          <div className="w-5/6">
            <p>Age</p>
          </div>
          <input
            className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
            type="number" name="age"
            onChange={(e) => { setAge(e.target.value) }} />
        </div>
      <div>
            <select name="classroom" id="">
              <option value="STUDENT">classroom1 </option>

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