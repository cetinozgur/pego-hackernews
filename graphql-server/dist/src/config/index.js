"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
const result = dotenv_1.default.config({ path: (0, path_1.join)(__dirname, "../../", ".env") });
if (result.error) {
    throw result.error;
}
exports.PORT = process.env.GRAPHQL_PORT;
//# sourceMappingURL=index.js.map