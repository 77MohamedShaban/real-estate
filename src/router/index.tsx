import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "../pages";
import RootLayout from "../pages/Layout";
import Intro from "../pages/Intro";
import QuickStarPage from "../pages/learn";
import LearnLayout from "../pages/learn/Layout";
import AuthLayout from "../pages/Auth/Layout";
import AuthPage from "../pages/Auth";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="favourite" element={<h1>Favourite page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />
      </Route>
      <Route path="/learn" element={<LearnLayout />}>
        <Route index element={<QuickStarPage />} />
      </Route>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="intro" element={<Intro />} />
    </>
  )
);

export default router;
