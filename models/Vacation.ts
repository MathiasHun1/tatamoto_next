import mongoose from 'mongoose';

const vacationSchema = new mongoose.Schema({
  onVacation: Boolean,
  text: String,
});

vacationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.models.Vacation ||
  mongoose.model('Vacation', vacationSchema);
