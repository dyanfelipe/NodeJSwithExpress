import jwt from 'jsonwebtoken';

import User from '../models/User';

import auth from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    if (!(await user.checkinPassword(password))) {
      return res.status().json({ error: 'Password does not match' });
    }

    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign(
        { id }, // id user
        auth.secret, // md5 crip
        { expiresIn: auth.expiresIn } // tempo que o token deve ficar ativo
      ),
    });
  }
}

export default new SessionController();
