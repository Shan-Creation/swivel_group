import express, { Request, Response } from "express";

import * as Salary from "../service/salaryService";
import * as Emp from "../service/EmployeeService";
import e from "express";
import error, { isErr, isErrArr } from "../models/eror";
import Employee, { isEmployee } from "../models/Employee";
import salary, { isSalary } from "../models/salary";
import { type } from "os";

const router = express.Router();

router.get("/:id", (req: Request, res: Response) => {
  try {
    const data = Emp.getSingleEmploye(req.params.id);

    if (isEmployee(data)) {
      console.log(data);

      const sal = Salary.getSalary(data.Employee_Id);

      if (isSalary(sal)) {
        const salAndemp = { data, sal };

        res.status(200).send(salAndemp);
      } else {
        if (isErr(sal)) {
          const type = Number(sal.type);
          res.status(type).send(sal.eror);
        } else {
          if (sal !== undefined) {
            const type = Number(sal[0].type);

            res.status(type).send(sal);
          }
        }
      }
    } else if (isErr(data)) {
      console.log("error");

      res.status(404).send(data.eror);
    } else {
      console.log("error array");
      const err: Error[] = [];
      data.forEach((item) => {
        err.push(item.eror);
      });

      const state = Number(data[0].type);

      res.status(state).send(err);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
