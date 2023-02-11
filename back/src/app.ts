import App from "./config/server";
import db from "./config/database";
import config from "./config/env";
import routes from "./modules";
import middlewares, { logger } from "./middlewares";

const application = new App(routes, middlewares);

(async () => {
  try {
    await db.connect();
    console.log("connected to the handofhope db");
    application.listen(config.app_port);
  } catch (error) {
    console.error("Unable to connect to handofhope db", error);
    // logger.log(500, e.message);
  }
})();
