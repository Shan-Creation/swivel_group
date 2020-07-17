import * as Emp from "./EmployeeService";
import * as currencyService from "./CurrencyService";
import * as Tax from "./TaxRateService";
import { exists } from "fs";
import { isCurency } from "../models/Currency";
import Employee, { isEmployee } from "../models/Employee";
import err, { isErr, isErrArr } from "../models/eror";
import salary from "../models/salary";
import { isNumber } from "util";
export const getSalary = (empID: String): err | err[] | salary | undefined => {
  const empDetails = Emp.getSingleEmploye(empID);

  console.log(empDetails);
  if (isEmployee(empDetails)) {
    const currency = currencyService.getcurrency(empDetails.Branch);
    const salary: number = Number(empDetails.Salary);
    if (isCurency(currency)) {
      const salary_amount = Number(empDetails.Salary) * Number(currency.Rate);

      const tax = Tax.getTax(currency.Type, salary_amount);

      if (isNumber(tax)) {
        const tax_Amount = salary_amount * tax;
        const netPay = salary_amount - tax_Amount;
        const sal: salary = {
          amount: salary_amount,
          tax: tax,
          taxAmount: tax_Amount,
          netPay: netPay,
        };
        return sal;
      } else if (isErr(tax)) {
        return tax;
      }
    } else {
      return currency;
    }
  } else {
    return empDetails;
  }
};
