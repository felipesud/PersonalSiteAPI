import homeRepository from "src/repositories/home.repository";
import validation from "../middleware/validate"
import express from 'express';

const router = express.Router();

// get all homes
router.get('/', homeRepository.getHomes);

// get home by id
router.get('/:id', homeRepository.getHome);

// create new home
router.post('/', validation.saveHome, homeRepository.addHome );

// update home
router.put('/:id', validation.saveHome, homeRepository.updateHome);

// delete home
router.delete('/:id', homeRepository.deleteHome);


export default router;