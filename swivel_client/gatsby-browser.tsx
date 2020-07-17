import react from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
  <AuthProvider navigate={navigate} auth0_domain="" auth0_client_id="">
    {element}
  </AuthProvider>
);
