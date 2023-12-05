import { Request, Response, NextFunction } from 'express';
import HomeService from '../services/home.service';

class HomeController {
  constructor(private readonly homeService: HomeService) {}

  async createHome(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newHome = await this.homeService.createHome(req.body);
      res.status(201).json(newHome);
    } catch (error) {
      next(error);
    }
  }

  async getAllHomes(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const homes = await this.homeService.getAllHomes();
      res.json(homes);
    } catch (error) {
      next(error);
    }
  }

  async getHomeById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const home = await this.homeService.getHomeById(id);
      if (!home) {
        res.status(404).json({ message: 'Home not found' });
        return;
      }
      res.json(home);
    } catch (error) {
      next(error);
    }
  }

  async updateHome(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const updatedHome = await this.homeService.updateHome(id, req.body);
      if (!updatedHome) {
        res.status(404).json({ message: 'Home not found' });
        return;
      }
      res.json(updatedHome);
    } catch (error) {
      next(error);
    }
  }

  async deleteHome(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      await this.homeService.deleteHome(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export default HomeController;
