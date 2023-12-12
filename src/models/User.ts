import { Schema, model, Document } from 'mongoose';

interface UserInterface extends Document {
  username: string;
  password: string;
 
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = new Schema<UserInterface>({
  username: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return passwordRegex.test(value);
      },
      message: 'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
    },
  },
});

export default model<UserInterface>('User', userSchema);
