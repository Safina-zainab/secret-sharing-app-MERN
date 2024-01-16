import express from 'express';
const router = express.Router();
import postController from '../controllers/postController.js';

router.post('/post', postController.sendPost)
router.get('/get-post', postController.getAllSecretMessages)

export default router