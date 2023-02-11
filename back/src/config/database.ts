import { ConnectionOptions, getConnectionManager } from "typeorm";
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
  entities: [__dirname + "/../../modules/**/entity.{js,ts}"],
  migrations: ["src/config/database/migration/*.ts"]
};

const connectionManager = getConnectionManager();

const db = connectionManager.create(options);
export default db;
