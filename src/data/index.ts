import { IFormInputLogIn, IFormInputSignUp } from "../interfaces";

export const formInputRigisterList: IFormInputSignUp[] = [
  {
    label: "Your Full Name",
    type: "text",
    id: "fullname",
    name: "fullname",
  },
  {
    label: "Your Email",
    type: "email",
    id: "email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
  },
];
export const formInputLoginList: IFormInputLogIn[] = [
  {
    label: "Your Email",
    type: "email",
    id: "email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    id: "password",
    name: "password",
  },
];
