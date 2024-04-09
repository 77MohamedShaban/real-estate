import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar";

const AuthLayout = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <Navbar isRegister={isRegister} setIsRegister={setIsRegister} />
      <Outlet />
    </>
  );
};

export default AuthLayout;
