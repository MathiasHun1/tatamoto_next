import axios from 'axios';

const baseURL = '/api/promotions';

const getData = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { getData };
