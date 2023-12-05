import mongoose, { Schema, model } from 'mongoose';
import { IHome } from '../interfaces/IHome';

const ServiceSchema = new Schema({
  serviceType: String,
  description: String,
});

const HomeSchema = new Schema({
  title: String,
  intro: String,
  services: [ServiceSchema],
});

const Home = model<IHome>('Home', HomeSchema);

export default Home;
