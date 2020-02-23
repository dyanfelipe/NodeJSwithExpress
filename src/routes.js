import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionControllers from './app/controllers/SessionControllers';

import authMiddleware from './app/middleware/auth'

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);
// routas que precesam de auth
routes.use(authMiddleware)
routes.put('/users', UserController.update);

routes.get('/', (req, res) => {
  console.log(process.env.DB_HOST);
  return res.json({ msg: process.env.DB_HOST });
});

export default routes;
