import express from 'express';
import swagger from './swagger';
import home from './home.routes'
const router = express.Router();

router.use('/api-docs', swagger);
router.use('/homes', home);

export default router;
