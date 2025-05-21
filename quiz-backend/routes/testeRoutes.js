import express from 'express';
import { listarTestes, createTeste } from '../controllers/testeController.js';

const router = express.Router();

router.get('/', listarTestes);
router.post('/', createTeste);

export default router;
