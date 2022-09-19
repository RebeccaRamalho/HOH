import { ConnectionOptions, getConnectionManager } from "typeorm";
import config from "../env";

//Option de configuration de la connexion à la db de typeORM
const options: ConnectionOptions = {
  type: "mysql",
  host: config.db_host,
  port: config.db_port,
  username: config.db_user,
  password: config.db_password,
  database: config.db_name,
  logging: false,
  synchronize: true,
  migrationsRun: false,
  entities: [__dirname + "/../../modules/**/entity.{js,ts}"],
  migrations: ["src/config/database/migration/*.ts"], //path du dossier de migration
};

//Appel du manager de connexion
const connectionManager = getConnectionManager();

//Accès à la bd via la création de la connexion par le manager avec les options de configuration
const db = connectionManager.create(options);
export default db;
