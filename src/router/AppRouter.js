import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const { user } = useLoginContext();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {user.logged ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default AppRouter;
