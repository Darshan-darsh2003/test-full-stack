import express from 'express';
import * as blogsController from '../controllers/blogsController.js';

const router = express.Router();

router.get('/', blogsController.getAllBlogs);

export default router;
