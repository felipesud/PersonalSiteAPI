import express from 'express';
import HomeController from '../controllers/home.controller';
import HomeService from '../services/home.service';
import HomeRepository from '../repositories/home.repository';
import Home from '../models/Home';

const router = express.Router();
const homeRepository = new HomeRepository(Home);
const homeService = new HomeService(homeRepository);
const homeController = new HomeController(homeService);

router.post('/', homeController.createHome.bind(homeController));
router.get('/', homeController.getAllHomes.bind(homeController));
router.get('/:id', homeController.getHomeById.bind(homeController));
router.put('/:id', homeController.updateHome.bind(homeController));
router.delete('/:id', homeController.deleteHome.bind(homeController));

export default router;
