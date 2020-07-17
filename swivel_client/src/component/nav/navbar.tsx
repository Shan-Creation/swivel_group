import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-default navbar-btn"
      onClick={() => loginWithRedirect()}
    >
      Log in
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a href="/" className="nav-link" onClick={() => logout()}>
      Log Out
    </a>
  );
};
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div style={{ width: "100%" }}>
        <a className="navbar-brand d-inline" href="/">
          <img
            src={user.picture}
            width="50"
            height="50"
            className="rounded-circle d-inline-block align-top"
            alt=""
          />
        </a>
        <div className="ml-2 d-inline">{user.name}</div>
        <div style={{ float: "right" }}>
          <LogoutButton />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ float: "right" }}>
          <LoginButton />
        </div>
      </div>
    );
  }
};
function NavBar() {
  return (
    <div className="container mt-1">
      <nav className="navbar navbar-light bg-light">
        <Profile />
      </nav>
    </div>
  );
}

export default NavBar;
