import "./index.scss";
import logo from "../../images/maz1.png";
interface Iprops {
  isRegister: boolean;
  setIsRegister: (val: boolean) => void;
}

const Navbar = (props: Iprops) => {
  const { isRegister, setIsRegister } = props;

  return (
    <div className="navbar-list">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
      </div>
      <button
        className="button"
        onClick={() => {
          setIsRegister(!isRegister);
        }}
      >
        {isRegister ? "Sign Up" : "Log In"}
      </button>
    </div>
  );
};
export default Navbar;
