import * as yup from "yup";
export const registerSchema = yup
  .object({
    name: yup
      .string()
      .required("Username is required")
      .min(5, "Username should be at least 5 charachters"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password should be at least 6 charachters."),
    passwordConfirm: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    phone: yup
      .string()
      .required("Phone is required")
      .min(11, "Password should be at least 11 charachters."),
    whatsapp: yup
      .string()
      .required("whatsapp is required")
      .min(11, "Password should be at least  charachters."),
  })
  .required();
export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "Not a valid email address."),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password should be at least 6 charachters."),
  })
  .required();
