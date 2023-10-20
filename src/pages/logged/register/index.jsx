export default () => {

  return (
    <div className="h-[92%] flex justify-center items-center bg-gray-100">
    <div className="w-[70%] h-[90%] flex items-center flex-col bg-gray-200 rounded-md p-4">
      <h1 className="text-3xl font-bold text-gray-800">Register</h1>
      <div className="w-full h-full flex items-center flex-col space-y-4">
        <div className="divRegister">
          <p className="text-gray-800">Username</p>
          <input className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
        </div>
        <div className="divRegister">
          <p className="text-gray-800">Username</p>
          <input className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
        </div>
        <div className="divRegister">
          <p className="text-gray-800">Username</p>
          <input className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
        </div>
        <div className="divRegister">
          <p className="text-gray-800">Username</p>
          <input className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none focus:ring focus:border-blue-300" type="text" />
        </div>
  
        <button className="h-[10%] w-2/6 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Register</button>
      </div>
    </div>
  </div>
  )
}