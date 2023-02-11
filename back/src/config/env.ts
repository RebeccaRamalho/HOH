import dotenv from "dotenv";

dotenv.config();
//AC
const config = {
  app_port: process.env.APP_PORT || "4000",
  db_port: Number(process.env.TYPEORM_PORT) || 3306,
  db_name: process.env.TYPEORM_DATABASE || "hand_of_hope",
  db_user: process.env.TYPEORM_USERNAME || "root",
  db_host: process.env.TYPEORM_HOST || "localhost",
  db_type: process.env.TYPEORM_CONNECTION || "mysql",
  db_password: process.env.TYPEORM_PASSWORD || "rebecca",
  db_entities: process.env.TYPEORM_ENTITIES || "",
  db_migration: process.env.TYPEORM_MIGRATIONS || "",
  db_migrationDir: process.env.TYPEORM_MIGRATIONS_DIR || "",
  jwt_secret: process.env.JWT_SECRET || "see_you_in_1M_years",
  STRIPE_SECRET_TEST:
    "sk_test_51JMEM9GiKJlGwlMtewGqTYWtFLLiXrWDTsqXOY95TSn974ICgdv8UdB2Omqi8tSew4gciU8CQccsulObD5oSxb1Q00LLu90U11",
  SKIP_PREFLIGHT_CHECK: true,
};

export default config;
