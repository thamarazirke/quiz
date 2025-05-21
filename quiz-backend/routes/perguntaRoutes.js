import express from 'express';
import { createPergunta } from '../controllers/perguntaController.js';

const router = express.Router();

router.post('/', createPergunta);

export default router;
