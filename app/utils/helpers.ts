type DayName =
  | 'Hétfő'
  | 'Kedd'
  | 'Szerda'
  | 'Csütörtök'
  | 'Péntek'
  | 'Szombat'
  | 'Vasárnap';

export const translateDay = (dayName: string): DayName => {
  switch (dayName) {
    case 'monday':
      return 'Hétfő';
    case 'tuesday':
      return 'Kedd';
    case 'wednesday':
      return 'Szerda';
    case 'thursday':
      return 'Csütörtök';
    case 'friday':
      return 'Péntek';
    case 'saturday':
      return 'Szombat';
    case 'sunday':
      return 'Vasárnap';
    default: {
      throw new Error(`unrecogizable dayname: ${dayName}`);
    }
  }
};

export const transformOpening = (open: string | null, close: string | null) => {
  if (open === null || close === null) {
    return 'Zárva';
  } else {
    return `${open}-${close}`;
  }
};

export const getTokenFrom = (request: Request) => {
  let token;
  try {
    const raw = request.headers.get('authorization');
    if (raw && raw.startsWith('Bearer ')) {
      token = raw.replace('Bearer ', '');
    } else {
      token = null;
    }
  } catch (error) {
    if (error) {
      token = null;
    }
  }
  return token;
};
