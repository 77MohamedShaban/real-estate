import { ChangeEvent } from "react";
import "./index.scss";
import { ILogInData } from "../../interfaces";
import { formInputLoginList } from "../../data";

interface Iprops {
  setIsLoggedIn: (val: boolean) => void;
  userData: ILogInData;
  setUserData: (user: ILogInData) => void;
}

const LoginForm = (props: Iprops) => {
  const { setIsLoggedIn, userData, setUserData } = props;

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const renderFormInputList = formInputLoginList.map((input) => (
    <div className="input-wrapper">
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
      <div className="title">Log In</div>
      <form
        style={{ margin: 30 }}
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <br />
        {renderFormInputList}
        <button
          className="botton-signUp"
          onClick={() => setIsLoggedIn(true)}
          type="submit"
          name="Submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
