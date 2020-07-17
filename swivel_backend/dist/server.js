"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//Routes
app.use("/employee", require("./routes/EmployeeRoute"));
//Port define
const port = process.env.PORT || 3000;
//Server set listning port
app.listen(port, () => console.log(`server is running in port ${port}`));
