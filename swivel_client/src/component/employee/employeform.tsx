import React, { useState } from "react";

function EmployeForm(props: any) {
  const [empid, setempid] = useState("");

  const onTextChange = (e: any) => {
    console.log(e.target.value);

    setempid(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="form-group">
        <label form="exampleInputEmail1">Employee id</label>
        <input
          type="text"
          className="form-control"
          id="empID"
          onChange={onTextChange}
          aria-describedby="empID"
          placeholder="Enter Employee id"
        />
        <div
          className="center-block"
          style={{ width: "100%", alignContent: "center", textAlign: "center" }}
        >
          <small id="emailHelp" className="form-text text-muted">
            use employe id (ex:EN_0001)
          </small>
        </div>

        <button
          style={{ marginLeft: "40%" }}
          onClick={() => {
            if (empid !== "") {
              props.GetEmployee(empid);
            } else {
              alert("Please enter employee id.");
            }
          }}
          className="btn btn-primary"
        >
          Find Employe
        </button>
      </div>
    </div>
  );
}

export default EmployeForm;
