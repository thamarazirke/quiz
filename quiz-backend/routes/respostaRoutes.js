import express from 'express';
import { salvarRespostas } from '../controllers/respostaController.js';

const router = express.Router();

router.post('/', salvarRespostas);

export default router;
