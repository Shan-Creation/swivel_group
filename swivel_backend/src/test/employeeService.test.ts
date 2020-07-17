import * as emp from "../service/EmployeeService";

test("get employees", async () => {
  const expcted = [await emp.getSingleEmploye("EN_00050")];

  expect([
    {
      type: 404,
      eror: { name: "Not Found", message: "Employee not found" },
    },
    {
      type: 500,
      eror: { name: "Server Error", message: "Data file not found" },
    },
  ]).toEqual(expect.arrayContaining(expcted));
});
