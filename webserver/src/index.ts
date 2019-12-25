import * as moduleAlias from "module-alias";
import * as dotenv from "dotenv";

moduleAlias.addPath(__dirname);
moduleAlias();
dotenv.config();

import { start as startAPI } from "workers/ApiWorker";
import Logger from "utils/Logger";

(async () => {
    try {
        await startAPI();
        Logger.log("Started app");
    } catch(e) {
        Logger.error("Couldn't start app", e);
    }
})();
