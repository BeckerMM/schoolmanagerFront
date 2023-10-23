import axios from 'axios';

const apiEndpoint = 'http://localhost:8082';

class api {
 get = async () => {
    try {
      const response = await axios.get(apiEndpoint + "/user");
      const data = response.data; // Get the response data
      
      return data; // Return the data
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Optionally, rethrow the error so it can be caught by the caller
    }
  };
  
  post = async (data) => {
    try {
        const response = await axios.post(apiEndpoint + "/user", data);
        const responseData = response.data; // Get the response data
        return response.data;
    }
    catch (error) {
        console.error('Error posting data:', error);
        throw error; 
    }
}
}



export default new api() ;


//user_enum = PROFESSOR, STUDENT, SECRETARY