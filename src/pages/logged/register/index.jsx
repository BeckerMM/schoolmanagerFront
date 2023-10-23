import React, { useEffect, useState } from 'react'
import User from "./../../../data/user"
import api from '../../api/api';
export default () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [enun, setEnun] = useState('')
const [user, setUser] = useState(null)

  const createUser =  () => {
    const newUser = new User(userName, password, address, age, enun);
    setUser(newUser);
    api.post(user);
    console.log(user)
  }



  return (
    <div className="h-[92%] flex justify-center items-center">
      <div className="w-[50%] h-[70%] flex items-center flex-col border border-thin rounded-md">
        <div className="w-full h-[20%] flex justify-center items-center">
          <h1>Register</h1>
        </div>
        <div className="w-full h-full flex items-center flex-col">
          <div className="divRegister ">
            <div className="w-5/6">
              <p>Username</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              onChange={(event) => {
                setUserName(event.target.value)
                console.log(userName)
              }} />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Password</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              onChange={(event) => {
                setPassword(event.target.value)
              }} />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Address</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              onChange={(event) => {
                setAddress(event.target.value)
              }} />
          </div>
          <div className="divRegister">
            <div className="w-5/6">
              <p>Age</p>
            </div>
            <input
              className=" w-5/6 px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              onChange={(event) => {
                setAge(event.target.value)
              }} />
          </div>
          <div className="w-[76%] h-[10%]" onChange={(event) => {
            setEnun(event.target.value)
          }}>
            <select name="" id="">
              <option value="PROFESSOR">PROFESSOR</option>
              <option value="SECRETARY">SECRETARY</option>
              <option value="STUDENT">  STUDENT</option>
            </select>
          </div>
          <button className="h-[10%] w-2/6 bg-gray-400" onClick={createUser}>Register</button>
        </div>
      </div>
    </div>
  )
}