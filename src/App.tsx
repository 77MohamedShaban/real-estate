import { useState } from "react";
import "./App.css";
// import Heading from "./components/Heading";
// import UserDetails from "./components/UserDetails";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import logo from "./assets/MAZ.svg";
import Cards from "./components/Cards.tsx";
import Header from "./components/Header.tsx";
import { ILogInData, ISignUpData } from "./interfaces";

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
      <Header />
      <Cards />

      {/* <Home /> */}
      {/* <Navbar isRegister={isRegister} setIsRegister={setIsRegister} />
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
      </div> */}
    </>
  );
}

export default App;
