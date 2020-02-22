import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Dyan Felipe Rodrigues da Silva',
    email: '',
    password_hash: '',
  });
  res.json(user);
});

export default routes;
