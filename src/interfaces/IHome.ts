import { Document } from 'mongoose';

interface IService {
  serviceType: string;
  description: string;
}

interface IHome extends Document {
  title: string;
  intro: string;
  services: IService[];
}

export { IHome, IService };
