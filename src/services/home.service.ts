import { IHome } from '../interfaces/IHome';
import homeRepository from '../repositories/home.repository';

class HomeService {
  async getHomeById(id: string): Promise<IHome | null> {
    try {
      const homeData = await homeRepository.getHome(id);
      return homeData;
    } catch (error) {
      throw new Error(`Error while fetching home data: ${error}`);
    }
  }

  async getAllHomes(): Promise<IHome[]> {
    try {
      const allHomeData = await homeRepository.getHomes();
      return allHomeData;
    } catch (error) {
      throw new Error(`Error while fetching all home data: ${error}`);
    }
  }

  async createHome(home: IHome): Promise<IHome> {
    try {
      const newHomeData = await homeRepository.addHome(home);
      return newHomeData;
    } catch (error) {
      throw new Error(`Error while creating new home data: ${error}`);
    }
  }

  async updateHome(id: string, updatedHome: IHome): Promise<IHome | null> {
    try {
      const updatedHomeData = await homeRepository.updateHome(id, updatedHome);
      return updatedHomeData;
    } catch (error) {
      throw new Error(`Error while updating home data: ${error}`);
    }
  }

  async deleteHome(id: string): Promise<boolean> {
    try {
      const result = await homeRepository.deleteHome(id);
      return !!result;
    } catch (error) {
      throw new Error(`Error while deleting home data: ${error}`);
    }
  }
}

export default new HomeService();
