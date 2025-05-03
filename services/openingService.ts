import axios from 'axios';
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
}): Promise<DayResponse> => {
  try {
    const response = await axios.put(
      `${baseURL}/${day}`,
      { open, close },
      loginService.setHeader()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default { updateDay };
