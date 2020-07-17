import React from "react";
import axios from "axios";
import EmployeeForm from "./employee/employeform";
import EmployeeDetails from "./employee/employeeDetails";

class Home extends React.Component {
  state = {
    status: null,
    emp: null,
    salary: null,
    err: [],
  };

  //  { user, isAuthenticated } = useAuth0();

  onGetEmployee = (id: String) => {
    console.log(id);
    const req = axios.get(`http://localhost:5000/employee/${id}`);

    req.then((res) => {
      console.log(res);

      this.setState({
        status: res.status,
        err: [],
        emp: res.data.data,
        salary: res.data.sal,
      });

      console.log(this.state);
    });

    req.catch((err) => {
      this.setState({ err: err.response.data, status: err.response.status });
    });
  };

  render() {
    console.log(this.state);
    const Display = () => {
      if (this.state.status === 200) {
        return (
          <div>
            <EmployeeDetails data={this.state.emp} salary={this.state.salary} />
          </div>
        );
      } else if (this.state.status === null) {
        return <div></div>;
      } else {
        return (
          <div>
            {this.state.err.length > 0 &&
              this.state.err.map((err: Error, i) => (
                <div className="alert alert-danger" role="alert">
                  {err.name}:{err.message}
                </div>
              ))}
          </div>
        );
      }
    };
    return (
      <div className="container mt-5">
        <div className="card p-3" style={{ alignItems: "center" }}>
          <EmployeeForm GetEmployee={this.onGetEmployee} />
        </div>
        <div className="card p-3 mt-2">
          <Display />
        </div>
      </div>
    );
  }
}

export default Home;
