import "./index.scss";

interface Iprops {
  isRegister: boolean;
  setIsRegister: (val: boolean) => void;
}

const Navbar = (props: Iprops) => {
  const { isRegister, setIsRegister } = props;

  return (
    <div className="navbar-list">
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
