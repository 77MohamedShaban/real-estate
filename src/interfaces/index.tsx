export interface ISignUpData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  whatsapp: string;
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

export interface IRegisterInput {
  name:
    | "email"
    | "name"
    | "password"
    | "passwordConfirm"
    | "phone"
    | "whatsapp";
  label: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}

export interface ILoginInput {
  name: "email" | "password";
  label: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}

export interface IErrorResponse {
  error: {
    details?: {
      errors: {
        message: string;
      }[];
    };
    message?: string;
  };
}
