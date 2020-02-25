import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserControllers';
import SessionControllers from './app/controllers/SessionControllers';
import FileController from './app/controllers/FileControllers';
import ProvidersController from './app/controllers/ProvidersControllers';
import AppointmentController from './app/controllers/AppointmentControllers';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);
// rotas que precesam de auth

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.get('/providers', ProvidersController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
export default routes;
