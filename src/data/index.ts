import { IFormInputLogIn, IFormInputSignUp, ICard } from "../interfaces";
import searchIcon from "../assets/maz 1.svg";

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
