import { useState } from "react";
import "./App.css";
// import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
// import UserDetails from "./components/UserDetails";
import { ILogInData, ISignUpData } from "./interfaces";
import LoginForm from "./components/LoginForm";

function App() {
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
      <Navbar isRegister={isRegister} setIsRegister={setIsRegister} />
      <div className="app-container">
        {isRegister ? (
          <LoginForm
            setIsLoggedIn={setIsLoggedIn}
            userData={logInData}
            setUserData={setLogInData}
          />
        ) : (
          <RegisterForm
            setIsRegister={setIsLoggedIn}
            userData={signUpData}
            setUserData={setSignUpnData}
          />
        )}
      </div>
    </>
  );
}

export default App;
