import { Model } from 'mongoose';
import { IHome } from '../interfaces/IHome';

class HomeRepository {
  constructor(private readonly HomeModel: Model<IHome>) {}

  async create(data: Partial<IHome>): Promise<IHome> {
    return this.HomeModel.create(data);
  }

  async findAll(): Promise<IHome[]> {
    return this.HomeModel.find().exec();
  }

  async findById(id: string): Promise<IHome | null> {
    return this.HomeModel.findById(id).exec();
  }

  async update(id: string, data: Partial<IHome>): Promise<IHome | null> {
    return this.HomeModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.HomeModel.findByIdAndDelete(id).exec();
  }
}

export default HomeRepository;
