import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as cors from "cors";

import Logger from "utils/Logger";
import LoggerMiddleware from "middlewares/Logger";

const { PORT = 3000 } = process.env;

export function start(): Promise<Express.Application> {
    return new Promise((resolve, reject) => {
        const app = express();
    
        app.use(json());
        app.use(urlencoded({ extended: false }));
        app.use(
            cors({
                exposedHeaders: "etag",
            }),
        );
        app.use(LoggerMiddleware);
    
        const server = app.listen(PORT, () => {
            Logger.log(`WebServer is listening on port: ${PORT}`);
            resolve(app);
        });
        server.on("error", (e) => {
            Logger.error(e);
            reject(reject);
        });
    });
}
