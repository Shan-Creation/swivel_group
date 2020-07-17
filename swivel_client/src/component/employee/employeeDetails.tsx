import React from "react";

const EmpDetails = (props: any) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col card m-2">
          <h5>Employee Details</h5>
          <table className="table">
            <tbody>
              <tr>
                <td>Employee id</td>
                <td>{props.data.Employee_Id}</td>
              </tr>
              <tr>
                <td>Full_Name</td>
                <td>{props.data.Full_Name}</td>
              </tr>
              <tr>
                <td>Joined_Date</td>
                <td>{props.data.Branch}</td>
              </tr>
              <tr>
                <td>Joined_Date</td>
                <td>{props.data.Joined_Date}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col card m-2">
          <h5>Salary Details</h5>
          <table className="table">
            <tbody>
              <tr>
                <td>Salary Amount</td>
                <td>{props.salary.amount}</td>
              </tr>
              <tr>
                <td>Tax Presentage</td>
                <td>{props.salary.tax * 100}%</td>
              </tr>
              <tr>
                <td>Tax Amount</td>
                <td>{props.salary.taxAmount}</td>
              </tr>
              <tr>
                <td>Net Payment</td>
                <td>{props.salary.netPay}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpDetails;
