import { Request, Response, NextFunction } from "express";

import Logger from "utils/Logger";

export default function(req: Request, _: Response, next: NextFunction) {
    const toLog = [`${req.method} ${req.path}`];
    if (req.method === "GET") {
        if (Object.keys(req.query).length) {
            toLog.push(req.query);
        }
    } else if (req.body && Object.keys(req.body).length) {
        toLog.push(req.body);
    }
    Logger.log(...toLog);
    next();
}
