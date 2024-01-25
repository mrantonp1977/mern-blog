import expess from 'express';
import { test } from '../controllers/user.controller.js';

const router = expess.Router();

router.get('/test', test);

export default router;