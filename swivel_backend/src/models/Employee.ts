export default interface Employee {
  Employee_Id: String;
  Full_Name: String;
  Gender: String;
  Date_of_Birth: String;
  Joined_Date: String;
  Salary: String;
  Branch: String;
}

export function isEmployee(emp: any): emp is Employee {
  return (
    typeof emp.Employee_Id === "string" &&
    typeof emp.Full_Name === "string" &&
    typeof emp.Gender === "string" &&
    typeof emp.Date_of_Birth === "string" &&
    typeof emp.Joined_Date === "string" &&
    typeof emp.Salary === "string" &&
    typeof emp.Branch === "string"
  );
}
