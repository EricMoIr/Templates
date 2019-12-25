"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moduleAlias = require("module-alias");
const dotenv = require("dotenv");
moduleAlias.addPath(__dirname);
moduleAlias();
dotenv.config();
const Logger_1 = require("utils/Logger");
(async () => {
    Logger_1.default.log("Holi");
})();
//# sourceMappingURL=index.js.map