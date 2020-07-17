import csv from "csv-parser";
import parser from "csv-parse";
import fs from "fs";
import currency from "../models/Currency";

import * as TrimSpace from "./SpaceTrimService";

let currencyArr: currency[] = [];
let errors: error[] = [];

import error from "../models/eror";
import Currency from "../models/Currency";

const empfilePath = "./src/data/currency.csv";
function load_data() {
  if (fs.existsSync(empfilePath)) {
    fs.createReadStream(empfilePath)
      .pipe(csv(["Country", "Type", "Rate"]))
      .on("data", (row) => {
        currencyArr.push(TrimSpace.trimSpace(row));
      })
      .on("end", () => {
        console.log("Sucessfuly pharse currency.csv");
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

export function getcurrency(country: String): Currency | error | error[] {
  if (errors.length < 1) {
    let cur: Currency | undefined = currencyArr.find(
      (cu: currency) => cu.Country === country
    );
    //console.log(employeeArr);

    if (typeof cur !== "undefined") {
      return cur;
    } else {
      let err: error = {
        type: 404,
        eror: { name: "Not Found", message: "Employee not found" },
      };
      return err;
    }
  } else {
    return errors;
  }
}
