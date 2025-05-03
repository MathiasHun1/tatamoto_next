import axios, { AxiosError } from 'axios';
const baseURL = '/api/openings/';
import loginService from './loginService';

type DayResponse = {
  day: string;
  open: string | null;
  close: string | null;
};

const updateDay = async ({
  day,
  open,
  close,
}: {
  day: string;
  open: string | null;
  close: string | null;
}): Promise<DayResponse | undefined> => {
  try {
    const response = await axios.put(
      `${baseURL}/${day}`,
      { open, close },
      loginService.setHeader()
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.status);
      console.error(error.response?.data);
    }
    console.error(error);
  }
};

export default { updateDay };
