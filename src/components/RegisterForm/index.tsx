import { ChangeEvent, useState } from "react";
import "./index.scss";
import { ISignUpData } from "../../interfaces";
import { formInputRigisterList } from "../../data";
import { Link } from "react-router-dom";
import logo from "../../assets/MAZ.svg";

const RegisterForm = () => {
  const [userData, setUserData] = useState<ISignUpData>({
    fullname: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const renderFormInputList = formInputRigisterList.map((input, index) => (
    <div className="input-wrapper" key={index}>
      <label htmlFor={input.id}>{input.label}</label>
      <input
        type={input.type}
        name={input.name}
        id={input.id}
        value={userData[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));
  return (
    <div>
      <header className="bg-swhite">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log In
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 m-3 gap-4">
        <img src={logo} alt="" />
        <div className="app-container ">
          <div className="title">Sign Up</div>
          <form
            style={{ margin: 30 }}
            className="register-form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <br />
            {renderFormInputList}
            <div className="button-center">
              <button className="botton-signUp" type="submit" name="Submit">
                Sign Up
              </button>
              <p className="mt-5 text-center text-sm text-gray-500">
                Already have an account?
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-green-500 hover:text-green-400"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
