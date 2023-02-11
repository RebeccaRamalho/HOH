import dotenv from "dotenv";

dotenv.config();

const config = {
  app_port: process.env.APP_PORT || "4000",
  db_port: process.env.DB_PORT,
  db_name: process.env.DB_DATABASE,
  db_user: process.env.DB_USERNAME,
  db_host: process.env.DB_HOST,
  db_type: process.env.DB_CONNECTION || "mysql",
  db_password: process.env.DB_PASSWORD,
  jwt_secret: process.env.JWT_SECRET || "see_you_in_1M_years",
};

export default config;
