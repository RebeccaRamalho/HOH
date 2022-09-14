import { Request, Response } from "express";
//AC
import { Server } from "@overnightjs/core";
import { listenerCount } from "process";
import handleError from './middlewares/handleError';

class App extends Server {
  //AC: Array<Object>
  constructor(routes: Array<Object>, middlewares: Object) {
    super(); //The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

    this.initializeMiddlewares(middlewares);
    super.addControllers(routes);
    this.initializeErrorHandler();
  }

  //AC=> Pourquoi typer deux fois middleware?
    initializeMiddlewares(middlewares: any) {
      for (const key in middlewares) {
        if (key == "csrf") {
          this.app.get(
            "/csrf",
            middlewares[key],
            (req: Request | any, res: Response) => {
              res.status(200).json(req.csrfToken());
            }
          );
        } else this.app.use(middlewares[key]);
      }
    }

  //AC
    initializeErrorHandler() {
      this.app.use(handleError);
    }

  listen(port: string) {
    this.app.listen(port, async () =>
      console.log(`application started on port : ${port}`)
    );
  }
}

export default App;
