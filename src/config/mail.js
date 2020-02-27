import 'dotenv/config';

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_AUTHUSER,
    pass: process.env.MAIL_AUTHPASS,
  },
  default: {
    from: process.env.MAIL_DEFAULTFROM,
  },
};
