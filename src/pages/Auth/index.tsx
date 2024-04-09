import { useState } from "react";
import { ILogInData, ISignUpData } from "../../interfaces";
import logo from "../../assets/MAZ.svg";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
interface Iprops {
  setIsRegister: (val: boolean) => void;
  userData: ISignUpData;
  setUserData: (user: ISignUpData) => void;
  isRegister: boolean;
}
const AuthPage = () => {
  const [isLogged, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [signUpData, setSignUpnData] = useState<ISignUpData>({
    fullname: "",
    email: "",
    password: "",
  });
  const [logInData, setLogInData] = useState<ILogInData>({
    email: "",
    password: "",
  });
  console.log(signUpData);
  console.log(logInData);
  console.log(isRegister);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-3 gap-4">
        <img src={logo} alt="" />
        <div className="app-container ">
          {isRegister ? (
            <LoginForm
              setIsLoggedIn={setIsLoggedIn}
              userData={logInData}
              setUserData={setLogInData}
            />
          ) : (
            <RegisterForm
              setIsRegister={setIsRegister}
              userData={signUpData}
              setUserData={setSignUpnData}
              isRegister={isRegister}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
