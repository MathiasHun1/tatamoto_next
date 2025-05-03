import axios from 'axios';

const baseUrl = '/api/login';

const setHeader = () => {
  const savedToken = localStorage.getItem('token');

  return {
    headers: {
      authorization: `Bearer ${savedToken}`,
    },
  };
};

const login = async (passText: string) => {
  const response = await axios.post(baseUrl, { password: passText });
  const { success, token } = response.data;

  if (!success) {
    throw new Error('login failed');
  }
  localStorage.setItem('token', token);
};

export default { login, setHeader };
