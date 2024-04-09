import { Outlet } from "react-router-dom";
import QuickStarPage from ".";

const LearnLayout = () => {
  return (
    <>
      <QuickStarPage />
      <Outlet />
    </>
  );
};

export default LearnLayout;
