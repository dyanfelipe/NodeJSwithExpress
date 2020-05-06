import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionControllers';
import FileController from './app/controllers/FileControllers';
import ProvidersController from './app/controllers/ProvidersControllers';
import scheduleController from './app/controllers/scheduleControllers';
import AppointmentController from './app/controllers/AppointmentControllers';
import NotificationController from './app/controllers/NotificationControllers';
import AvailableController from './app/controllers/AvailableControllers';
import authMiddleware from './app/middleware/auth';

import validateUserStore from './app/validations/UserStore';
import validateUserUpdate from './app/validations/UserUpdate';
import validateSessionStore from './app/validations/SessionStore';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/session', validateSessionStore, SessionController.store);
// rotas que precesam de auth

routes.use(authMiddleware);
routes.put('/users', validateUserUpdate, UserController.update);
routes.get('/providers', ProvidersController.index);
routes.get('/providers/:providerId/available', AvailableController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.get('/appointments', AppointmentController.index);
routes.delete('/appointments/:id', AppointmentController.destroy);
routes.get('/schedule', scheduleController.index);
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);
routes.post('/appointments', AppointmentController.store);
export default routes;
