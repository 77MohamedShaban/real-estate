import { ChangeEvent } from "react";
import "./index.scss";
import { ISignUpData } from "../../interfaces";
import { formInputRigisterList } from "../../data";

interface Iprops {
  setIsRegister: (val: boolean) => void;
  userData: ISignUpData;
  setUserData: (user: ISignUpData) => void;
}

const RegisterForm = (props: Iprops) => {
  const { setIsRegister, userData, setUserData } = props;

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
          <button
            className="botton-signUp"
            onClick={() => setIsRegister(true)}
            type="submit"
            name="Submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
