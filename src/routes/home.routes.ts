import { Request, Response } from 'express';
import homeService from "../services/home.service";
import validation from "../middleware/validate"
import express from 'express';

const router = express.Router();

// get all homes
router.get('/', async (req: Request, res: Response) => {
  try {
    const allHomeData = await homeService.getAllHomes();
    res.json(allHomeData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// get home by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const homeId = req.params.id;
    const homeData = await homeService.getHomeById(homeId);
    if (homeData) {
      res.json(homeData);
    } else {
      res.status(404).send('Home data not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// create new home
router.post('/', validation.saveHome, async (req: Request, res: Response) => {
  try {
    const newHomeData = await homeService.createHome(req.body);
    res.status(201).json(newHomeData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// update home
router.put('/:id', validation.saveHome, async (req: Request, res: Response) => {
  try {
    const homeId = req.params.id;
    const updatedHomeData = await homeService.updateHome(homeId, req.body);
    if (updatedHomeData) {
      res.json(updatedHomeData);
    } else {
      res.status(404).send('Home data not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// delete home
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const homeId = req.params.id;
    const result = await homeService.deleteHome(homeId);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send('Home data not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
