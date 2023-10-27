import axios from 'axios';


const apiEndpoint = 'http://localhost:8082';

class api {
  get = async () => {
    try {
      const response = await axios.get(apiEndpoint + "/user");
      const data = response.data; // Pega a resposta da requisição
      return data; // retorna a resposta da requisição 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  getValidation = async (user) => {
    try {
      console.log(user);
      const response = await axios.post(apiEndpoint + "/user/login", user);
      console.log(user);

      return response.data; // Irá pegar a resposta da requisição

    } catch (error) {
      throw error;
    }
  };

  post = async (data) => {
    try {
      const response = await axios.post(apiEndpoint + "/user", data);
      return response.data;
    }
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }

  };

  postDiscipline = async (data) => {
    try {
      const response = await axios.post(apiEndpoint + "/discipline", data);
      return response.data;
    }
    catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }

  }
}



export default new api();


//user_enum = PROFESSOR, STUDENT, SECRETARY