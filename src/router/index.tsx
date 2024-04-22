import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import Intro from "../pages/Intro";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import ErrorHandler from "../components/errors/ErrorHandler";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} errorElement={<ErrorHandler />}>
        <Route index element={<HomePage />} />
        <Route path="favorite" element={<h1>Favorite page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />
      </Route>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="intro" element={<Intro />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

export default router;
