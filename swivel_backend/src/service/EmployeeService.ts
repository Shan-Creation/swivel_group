import csv from "csv-parser";
import parser from "csv-parse";
import fs from "fs";
import Employee from "../models/Employee";
import * as TrimSpace from "./SpaceTrimService";
import error from "../models/eror";

let employeeArr: Employee[] = [];
let errors: error[] = [];
const empfilePath = "./src/data/employee.csv";
function load_data() {
  if (fs.existsSync(empfilePath)) {
    fs.createReadStream(empfilePath)
      .pipe(
        csv([
          "Employee_Id",
          "Full_Name",
          "Gender",
          "Date_of_Birth",
          "Joined_Date",
          "Salary",
          "Branch",
        ])
      )
      .on("data", (row) => {
        employeeArr.push(TrimSpace.trimSpace(row));
        //console.log(row);
      })
      .on("end", () => {
        // console.log("Sucessfuly pharse employee.csv");
      })
      .on("error", (err) => {
        console.log(err);
        const error: error = { type: 500, eror: err };
        errors.push(error);
      });
  } else {
    let err: error = {
      type: 500,
      eror: { name: "Server Error", message: "Data file not found" },
    };
    errors.push(err);
  }
}

load_data();

export function getSingleEmploye(id: String): Employee | error | error[] {
  if (errors.length < 1) {
    let emp: Employee | undefined = employeeArr.find(
      (em: Employee) => em.Employee_Id === id
    );
    //console.log(employeeArr);

    if (typeof emp !== "undefined") {
      return emp;
    } else {
      let err: error = {
        type: 404,
        eror: { name: "Not Found", message: "Employee not found" },
      };
      errors.push(err);
      return errors;
    }
  } else {
    return errors;
  }
}
