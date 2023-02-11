import { ConnectionOptions, getConnectionManager } from "typeorm";
import { Article } from "../modules/Article/entity";
import { Testimony } from "../modules/Testimony/entity";
import User from "../modules/User/entity";
import config from "./env";

const options: ConnectionOptions = {
  type: "mysql",
  host: config.db_host,
  port: Number(config.db_port),
  username: config.db_user,
  password: config.db_password,
  database: config.db_name,
  multipleStatements: true,
  synchronize: true,
  logger: "advanced-console",
  entities: [User, Article, Testimony],
  migrations: ["src/config/database/migration/*.ts"]
};

const connectionManager = getConnectionManager();

const db = connectionManager.create(options);
export default db;
