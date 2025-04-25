import mongoose, { ValidatorProps, Document } from 'mongoose';

const daySchema = new mongoose.Schema({
  day: {
    type: String,
    validate: {
      validator: (day: string) => {
        return [
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
          'sunday',
        ].includes(day);
      },
      message: (props: ValidatorProps) => `${props.value} is not a valid day!`,
    },
  },
  open: {
    type: String,
    validate: {
      validator: (v: string) => {
        const isValidFormat = /^(?:[01]?[0-9]|2[0-4])\.[0-5][0-9]$/.test(v);

        return isValidFormat || v === null ? true : false;
      },
      message: (props: ValidatorProps) => `${props.value} is not a valid time`,
    },
  },
  close: {
    type: String,
    validate: {
      validator: (v: string) => {
        const isValidFormat = /^(?:[01]?[0-9]|2[0-4])\.[0-5][0-9]$/.test(v);
        return isValidFormat || v === null ? true : false;
      },
      message: (props: ValidatorProps) => `${props.value} is not a valid time`,
    },
  },
});

daySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

interface DayDocument extends Document {
  day: string;
  open: string;
  close: string;
}

export default mongoose.models.Day ||
  mongoose.model<DayDocument>('Day', daySchema);
