import "./index.scss";
import React from "react";
import gearIcon from "../../../assets/gear.svg";
import homeIcon from "../../../assets/house.svg";
import favIcon from "../../../assets/star.svg";
import logo from "../../../assets/maz 1 (1).svg";

const Navbar: React.FC = () => {
  return (
    <div className="navHome">
      <img src={logo} alt="Logo" className="project-logo" />

      <nav>
        <ul>
          <li>
            <img src={homeIcon} alt="Gear Icon" />
            <a href="/">Home</a>
          </li>
          <li>
            <img src={favIcon} alt="Gear Icon" />
            <a href="/">Favorite</a>
          </li>
          <li>
            <img src={gearIcon} alt="Gear Icon" />
            <a href="/">Settings</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
