import "./index.scss";
import Button from "../../components/ui/Button";
import { ILogInData } from "../../interfaces";
import { Link } from "react-router-dom";
import logo from "../../assets/MAZ.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { LOGIN_FORM } from "../../data";
import InputErrorMessage from "../ui/InputErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation";
import axiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IErrorResponse } from "../../interfaces";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogInData>({
    resolver: yupResolver(loginSchema),
  });

  // Handlers
  const onSubmit: SubmitHandler<ILogInData> = async (data) => {
    console.log("DATA", data);
    setIsLoading(true);

    try {
      //  * 2 - Fulfilled => SUCCESS => (OPTIONAL)
      const { status, data: resData } = await axiosInstance.post(
        "api/v1/auth/login",
        data
      );
      console.log(data);
      console.log(resData);
      if (status === 200) {
        toast.success("You will navigate to the home page after 2 seconds.", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        localStorage.setItem("loggedInUser", JSON.stringify(resData));
        setTimeout(() => {
          location.replace("/");
        }, 2000);
      }
    } catch (error) {
      //  * 3 - Rejected => FAILED => (OPTIONAL)
      console.log(error);
      const errorObj = error as AxiosError<IErrorResponse>;
      // console.log(error);
      toast.error(`${errorObj.response?.data.error.message}`, {
        position: "bottom-center",
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Renders
  const renderLoginForm = LOGIN_FORM.map(
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
              to="/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign Up
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 m-3 gap-4">
        <img src={logo} alt="" />
        <div className="app-container ">
          <div className="title">Log In</div>
          <form
            style={{ margin: 30 }}
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <br />
            {renderLoginForm}
            <div className="button-center">
              <Button className="botton-logIn" isLoading={isLoading}>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
