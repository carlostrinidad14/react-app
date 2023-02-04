import React from "react";
import { HashRouter } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useLoginContext();

  return (
    <HashRouter>
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
    </HashRouter>
  );
};

export default AppRouter;
