import api from '../../api/api';
import { useEffect, useState } from 'react';

const Home = (props) => {
  const [users, setUsers] = useState([]);

  // Este useEffect irá retornar apenas uma vez, quando o componente for gerado.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='h-full'>
        <div className='h-full w-1/4'>

        </div>
    </div>
  );
}
export default Home;
