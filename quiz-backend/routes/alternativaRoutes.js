import express from 'express';
import alternativaController from '../controllers/alternativaController.js';

const router = express.Router();

router.get('/:idpergunta', alternativaController.getAlternativas);
router.post('/', alternativaController.createAlternativa);

export default router;
