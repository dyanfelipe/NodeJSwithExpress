import Sequelize from 'sequelize';
import mongoose, { Mongoose } from 'mongoose';
import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointments';
import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    // 'mongodb+srv://aircnc:aircnc@aircnc-o7vg9.mongodb.net/week10?retryWrites=true&w=majority'
    const host = `mongodb+srv://${process.env.DBMONGO_USER}:${process.env.DBMONGO_PASSWORD}@${process.env.DBMONGO_HOST}/${process.env.DBMONGO_AMBIENTE}`;
    mongoose.connect(host, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
