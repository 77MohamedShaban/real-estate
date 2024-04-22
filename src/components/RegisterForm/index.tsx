import "./index.scss";
import Button from "../../components/ui/Button";
import { ISignUpData } from "../../interfaces";
import { Link } from "react-router-dom";
import logo from "../../assets/MAZ.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_FORM } from "../../data";
import InputErrorMessage from "../ui/InputErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpData>({
    resolver: yupResolver(registerSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<ISignUpData> = async (data) => {
    console.log("DATA", data);
    setIsLoading(true);

    try {
      //  * 2 - Fulfilled => SUCCESS => (OPTIONAL)
      const { status } = await axiosInstance.post("api/v1/auth/signup", data);

      if (status === 200) {
        toast.success(
          "You will navigate to the login page after 2 seconds to login.",
          {
            position: "bottom-center",
            duration: 1500,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          }
        );

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      //  * 3 - Rejected => FAILED => (OPTIONAL)
      console.log(error);
      const errorObj = error as AxiosError<IErrorResponse>;
      // console.log(error);
      toast.error(`${errorObj.response?.data.error.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  // Renders
  const renderRegisterForm = REGISTER_FORM.map(
    ({ name, label, type, validation }, idx) => {
      return (
        <div className="input-wrapper" key={idx}>
          <label htmlFor={name}>{label}</label>
          <input type={type} id={name} {...register(name, validation)} />
          {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
        </div>
      );
    }
  );
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
            onSubmit={handleSubmit(onSubmit)}
            style={{ margin: 30 }}
            className="register-form"
          >
            <br />
            {renderRegisterForm}
            <div className="button-center">
              <Button className="botton-signUp" isLoading={isLoading}>
                {isLoading ? "Loading..." : "Register"}
              </Button>
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
