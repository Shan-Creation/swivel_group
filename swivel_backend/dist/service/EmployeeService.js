"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeData = exports.getSingleEmploye = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
let employeeArr = [];
fs_1.default.createReadStream("./src/data/employee.csv")
    .pipe(csv_parser_1.default([
    "Employee_Id",
    "Full_Name",
    "Gender",
    "Date_of_Birth",
    "Joined_Date",
    "Salary",
    "Branch",
]))
    .on("data", (row) => {
    //let jem = JSON.parse(row);
    employeeArr.push(row);
    // console.log(row);
})
    .on("end", () => {
    console.log("Sucessfuly pharse csv");
    console.log(employeeArr);
});
function getSingleEmploye(id) {
    let emp = employeeArr.find((em) => em.Employee_Id === id);
    return emp;
}
exports.getSingleEmploye = getSingleEmploye;
function getEmployeeData() {
    return employeeArr;
}
exports.getEmployeeData = getEmployeeData;
