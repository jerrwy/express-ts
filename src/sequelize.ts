import {Sequelize} from 'sequelize-typescript';
import * as path from 'path';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Sequelize.Op as any,
  host: "localhost",
  port: 3306,
  database: 'test',
  username: 'root',
  password: '',
  logging: false,
  modelPaths: [__dirname + '/models']
})