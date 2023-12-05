import { IHome } from '../interfaces/IHome';
import HomeRepository from '../repositories/home.repository';

class HomeService {
  constructor(private readonly homeRepository: HomeRepository) {}

  async createHome(data: Partial<IHome>): Promise<IHome> {
    return this.homeRepository.create(data);
  }

  async getAllHomes(): Promise<IHome[]> {
    return this.homeRepository.findAll();
  }

  async getHomeById(id: string): Promise<IHome | null> {
    return this.homeRepository.findById(id);
  }

  async updateHome(id: string, data: Partial<IHome>): Promise<IHome | null> {
    return this.homeRepository.update(id, data);
  }

  async deleteHome(id: string): Promise<void> {
    await this.homeRepository.delete(id);
  }
}

export default HomeService;
