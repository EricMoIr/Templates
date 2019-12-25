import * as moduleAlias from "module-alias";
import * as dotenv from "dotenv";

moduleAlias.addPath(__dirname);
moduleAlias();
dotenv.config();

// import the entry point of your app

(async () => {
    // Run the entry point here
})();
