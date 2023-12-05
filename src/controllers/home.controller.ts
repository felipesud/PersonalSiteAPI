import express from 'express';
import Joi from 'joi';
import homeRepository from 'src/repositories/home.repository';

const router = express.Router();

const homeDataSchema = Joi.object({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    intro: Joi.string().required(),
    services: Joi.array().items(Joi.object({
        serviceType: Joi.string().required(),
        description: Joi.string().required()
    })).required()
});

router.get('/:id', async (req, res) => {
    const homeData = await homeRepository.getHome(req.params.id);
    if (homeData) {
        res.json(homeData);
    } else {
        res.status(404).send('Home data not found');
    }
});

router.get('/', async (req, res) => {
    const allHomeData = await homeRepository.getHomes();
    res.json(allHomeData);
});

router.post('/', async (req, res) => {
    const { error } = homeDataSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newHomeData = await homeRepository.addHome(req.body);
    res.status(201).json(newHomeData);
});

router.put('/:id', async (req, res) => {
    const { error } = homeDataSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const updatedHomeData = await homeRepository.updateHome(req.params.id, req.body);
    if (updatedHomeData) {
        res.json(updatedHomeData);
    } else {
        res.status(404).send('Home data not found');
    }
});

router.delete('/:id', async (req, res) => {
    const result = await homeRepository.deleteHome(req.params.id);
    if (result) {
        res.status(204).send();
    } else {
        res.status(404).send('Home data not found');
    }
});

export default router;
