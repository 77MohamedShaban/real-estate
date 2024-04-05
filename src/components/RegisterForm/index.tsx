import { ChangeEvent } from "react";
import "./index.scss";
import { ISignUpData } from "../../interfaces";
import { formInputRigisterList } from "../../data";

interface Iprops {
  setIsRegister: (val: boolean) => void;
  userData: ISignUpData;
  setUserData: (user: ISignUpData) => void;
  isRegister: boolean;
}

const RegisterForm = (props: Iprops) => {
  const { isRegister, setIsRegister, userData, setUserData } = props;

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
            <a
              href="#"
              className="font-semibold leading-6 text-green-500 hover:text-green-400"
              onClick={() => {
                setIsRegister(!isRegister);
              }}
            >
              Log In
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
