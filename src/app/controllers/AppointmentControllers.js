import Appointment from '../models/Appointments';
import File from '../models/File';
import User from '../models/User';

import CreateAppointmentService from '../services/CreateAppointmentService';
import CancelAppointmentService from '../services/CancelAppointmentService';

import Cache from '../../lib/Cache';
class AppointmentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const cacheKey = `user:${req.userId}:appointments:${page}`;
    const cached = await cache.get(cacheKey);

    if (cached) {
      res.json(cached);
    }

    const appointments = await Appointment.findAll({
      where: { user_id: req.userId, canceled_at: null },
      onder: ['date'],
      attributes: ['id', 'date', 'past', 'cancelable'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: {
            model: File,
            as: 'avatar',
            attributes: ['id', 'path', 'url'],
          },
        },
      ],
    });
    return res.status(200).json(appointments);
  }

  async store(req, res) {
    const { provider_id, date } = req.body;
    const appointments = await CreateAppointmentService.run({
      provider_id,
      userId: req.userId,
      date,
    });
    await Cache.set(cacheKey, appointments);

    return res.json(appointments);
  }

  async destroy(req, res) {
    const appointment = await CancelAppointmentService.run({
      provider_id: req.params.id,
      user_id: req.userId,
    });
    return res.json(appointment);
  }
}
export default new AppointmentController();
