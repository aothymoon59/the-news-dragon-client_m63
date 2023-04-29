import React from "react";
import NavigatioBar from "../pages/shared/NavigationBar/NavigatioBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavigatioBar></NavigatioBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
