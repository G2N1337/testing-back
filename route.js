import express from 'express';
import { createNewCard } from './controllers.js';

const router = express.Router();

router.route('/create').post(createNewCard);

export default router;
