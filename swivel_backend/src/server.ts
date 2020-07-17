import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//Routes
app.use("/employee", require("./routes/EmployeeRoute"));

//Port define
const port = process.env.PORT || 5000;

//Server set listning port
app.listen(port, () => console.log(`server is running in port ${port}`));
