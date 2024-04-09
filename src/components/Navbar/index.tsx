import { Link } from "react-router-dom";
import "./index.scss";
interface Iprops {
  isRegister: boolean;
  setIsRegister: (val: boolean) => void;
}

const Navbar = (props: Iprops) => {
  const { isRegister, setIsRegister } = props;
  return (
    <header className="bg-swhite">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/auth"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => {
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? "Sign Up" : "Log In"}{" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
