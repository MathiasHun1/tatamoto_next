import axios from 'axios';

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
    const response = await axios.post(baseURL, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getData, setVacation };
