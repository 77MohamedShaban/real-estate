export interface ISignUpData {
  fullname: string;
  email: string;
  password: string;
}
export interface ILogInData {
  email: string;
  password: string;
}
export interface IFormInputSignUp {
  label: string;
  type: string;
  id: string;
  name: keyof ISignUpData;
}
export interface IFormInputLogIn {
  label: string;
  type: string;
  id: string;
  name: keyof ILogInData;
}

export interface ICard {
  id: number;
  title: string;
  image: string;
}
