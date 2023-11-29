import express from 'express';
import * as tasksController from '../controllers/taskController.js';
const router = express.Router();
router.get('/', tasksController.getAllPhotos);
router.post('/', tasksController.createTask);
router.put('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);
export default router;
//# sourceMappingURL=photosRoutes.js.map