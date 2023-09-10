import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get('/', classesControllers.index);
routes.post('/post', classesControllers.create);

export default routes;
