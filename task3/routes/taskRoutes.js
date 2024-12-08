import express from "express"
import { 
    getTasks, 
    getTaskByCategory, 
    createTask, 
    updateTask, 
    deleteTask 
} from'../controllers/taskController.js'
import logger from'../middlewares/logger.js'
import validateTask from '../middlewares/validateTask.js'

const taskRoutes = express.Router();

    taskRoutes.use(logger);
    taskRoutes.get('/tasks', getTasks);
    taskRoutes.get('/task/:id', getTaskByCategory);
    taskRoutes.post('/task', validateTask, createTask);
    taskRoutes.put('/task/:id', validateTask, updateTask);
    taskRoutes.delete('/task/:id', deleteTask);

export default taskRoutes;
