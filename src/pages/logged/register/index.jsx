export default () => {

  return (
    <div className="h-[92%] flex justify-center items-center">

      <div className="w-[50%] h-[80%] flex items-center flex-col border border-thin ">

        <h1 className="text-2xl w-full">Register</h1>
        <div className="w-full h-full flex items-center flex-col">
          
          <div className="divRegister">
            <p>Username</p>
            <input className=" w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
          </div>

          <div className="divRegister">
            <p>Age</p>
            <input className=" w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
          </div>

          <div className="divRegister">
            <p>Password</p>
            <input  className=" w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300"type="text" />
          </div>

          <div className="divRegister">
            <p>address</p>
            <input className=" w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
          </div>

          <select name="" id="">
            <option value="PROFESSOR">PROFESSOR</option>
            <option value="SECRETARY">SECRETARY</option>
            <option value="STUDENT">STUDENT</option>
          </select>

          <button className="h-[10%] w-2/6">register</button>
        </div>

      </div>

    </div>
  )
}