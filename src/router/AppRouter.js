import React from "react";
import {HashRouter as Router } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useLoginContext();

  return (
    <Router>
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
    </Router>
  );
};

export default AppRouter;
