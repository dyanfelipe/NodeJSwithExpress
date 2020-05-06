/*
 * O maximo que eu posso ter em um service e constructor para inicializar variavel.
 * Service não pode ter acesso a req res e nem o body
 * service sempre retorna alguma coisa dele
 */
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import User from '../models/User';
import Appointment from '../models/Appointments';

import Notification from '../schemas/Notification';

import Cache from '../../lib/Cache';

class CreateAppointmentService {
  async run({ provider_id, userId, date }) {
    /**
     * Check if provider_id is a provider
     */
    const checkIsProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!checkIsProvider) {
      throw new Error('You can only create appointments with providers');
    }

    // check for past date
    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      throw new Error('Past dates are not permitted');
    }

    // check date availability
    const checkAvalability = await Appointment.findOne({
      where: {
        provider_id,
        canceled_at: null,
        date: hourStart,
      },
    });

    if (checkAvalability) {
      throw new Error('Appointment date is not available');
    }

    const appointment = await Appointment.create({
      user_id: userId,
      provider_id,
      date: hourStart,
    });

    const user = await User.findByPk(userId);
    const formattedDate = format(
      hourStart,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt }
    );

    // Notify provider
    await Notification.create({
      content: `Novo agendamento de ${user.name} para o ${formattedDate}`,
      user: provider_id,
    });

    await Cache.invalidatePrefix(`user:${userId}:appointments`);
    return appointment;
  }
}

export default new CreateAppointmentService();
