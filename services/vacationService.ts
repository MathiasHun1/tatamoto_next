import axios, { AxiosError } from 'axios';
import loginService from './loginService';

const baseURL = '/api/vacations';

const getData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

type Credentials = {
  onVacation: boolean;
  text: string;
};

const setVacation = async (credentials: Credentials) => {
  try {
    const response = await axios.post(
      baseURL,
      credentials,
      loginService.setHeader()
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.status);
      console.error(error.response?.data);
    }
  }
};

export default { getData, setVacation };
