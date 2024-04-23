import { IFormInputLogIn, ICard } from "../interfaces";
import searchIcon from "../assets/maz 1.svg";
import { ILoginInput, IRegisterInput } from "../interfaces";

export const REGISTER_FORM: IRegisterInput[] = [
  {
    name: "name",
    label: "Your Full Name",
    type: "text",
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    name: "email",
    label: "Your Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "passwordConfirm",
    label: "Confirm Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    validation: {
      required: true,
      minLength: 11,
    },
  },
  {
    name: "whatsapp",
    label: "Whatsapp Number",
    type: "text",
    validation: {
      required: true,
      minLength: 11,
    },
  },
];

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "email",
    label: "Your Email",
    type: "email",
    validation: {
      required: true,
      pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: {
      required: true,
      minLength: 6,
    },
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

// Mock data for cards
export const cardsData: ICard[] = [
  {
    id: 1,
    title: "Card 1",
    image: searchIcon,
  },
  {
    id: 2,
    title: "Card 2",
    image: searchIcon,
  },
  {
    id: 3,
    title: "Card 3",
    image: searchIcon,
  },
  {
    id: 4,
    title: "Card 4",
    image: searchIcon,
  },
  {
    id: 5,
    title: "Card 5",
    image: searchIcon,
  },
  {
    id: 6,
    title: "Card 6",
    image: searchIcon,
  },
  {
    id: 7,
    title: "Card 7",
    image: searchIcon,
  },
  {
    id: 8,
    title: "Card 8",
    image: searchIcon,
  },
  {
    id: 9,
    title: "Card 9",
    image: searchIcon,
  },
  {
    id: 10,
    title: "Card 10",
    image: searchIcon,
  },
];
