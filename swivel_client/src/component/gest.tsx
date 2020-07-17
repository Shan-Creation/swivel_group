import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="btn btn-primery " onClick={() => loginWithRedirect()}>
      Log in
    </button>
  );
};

const gest = () => {
  return (
    <div className="container mt-5">
      <div
        style={{
          width: "100%",
          alignContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h2>You are not loged in...</h2>
        </div>
        <div>
          <span>Please login here</span>
        </div>
        <div>
          {" "}
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default gest;
