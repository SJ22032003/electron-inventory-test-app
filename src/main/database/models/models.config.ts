import { Sequelize, DataTypes } from "sequelize";
import config from "../config/config";

const { username, password, database, port, host, dialect } =
  config[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
  pool: { max: 5, min: 0, idle: 10000 },
  benchmark: true, // logs query execution time.
});

const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import salesModel from "./sales.model";
// Models/tables
db.sales = salesModel(sequelize, DataTypes);

export default db;
