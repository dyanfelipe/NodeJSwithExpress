import { Op } from 'sequelize';
import {
  startOfDay,
  endOfDay,
  setSeconds,
  setHours,
  setMinutes,
  format,
  isAfter,
} from 'date-fns';

import Appointment from '../models/Appointments';

class IndexAvailableService {
  async run({ providerId, date }) {
    const appointment = await Appointment.findAll({
      providerId,
      canceled_at: null,
      date: {
        [Op.between]: [startOfDay(date), endOfDay(date)],
      },
    });

    const schedule = [
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '21:00',
    ];

    const available = schedule.map(time => {
      const [hour, minute] = time.split(':');
      const value = setSeconds(setMinutes(setHours(date, hour), minute), 0);
      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
        avaiable:
          isAfter(value, new Date()) &&
          !appointment.find(a => format(a.date, 'HH:mm') === time),
      };
    });
    return available;
  }
}

export default new IndexAvailableService();
