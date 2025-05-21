import express from 'express';
import { getQuiz } from '../controllers/quizController.js';

const router = express.Router();

router.get('/', getQuiz);

export default router;
