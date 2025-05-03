import axios, { AxiosError } from 'axios';
import loginService from '@/services/loginService';

const baseURL = '/api/promotions';

const getData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

type Credentials = {
  onPromotion: boolean;
  text: string;
};

const setPromotion = async (credentials: Credentials) => {
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

export default { getData, setPromotion };
