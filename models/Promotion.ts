import mongoose from 'mongoose';

const promoSchema = new mongoose.Schema({
  onPromotion: Boolean,
  text: String,
});

promoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    delete returnedObject._id, delete returnedObject.__v;
  },
});

export default mongoose.models.Promotion ||
  mongoose.model('Promotion', promoSchema);
