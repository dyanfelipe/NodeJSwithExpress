import { Router } from 'express';
import multer from 'multer'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserControllers';
import SessionControllers from './app/controllers/SessionControllers';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig)

routes.post('/users', UserController.store);
routes.post('/session', SessionControllers.store);
// routas que precesam de auth
routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single("thumbnail"), (req, res) => {
  res.json({ ok: "Upload in file" })
})

export default routes;
