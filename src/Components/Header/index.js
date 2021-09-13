import React from "react";
import Logo from "../../images/logo.png";
const Header = () => {
  // Javascript
  const descLogo = "This is Blog Logo";

  return (
    <>
      <header className="flex-space-between">
        <div className="">
          <img src={Logo} alt={descLogo} />
        </div>
        <div className="search">
          <input className="inputSearch" type="text" name="search" />
        </div>
        <ul className="menu">
          <li>
            <a href="#" className="navLink">
              Categories
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              About
            </a>
          </li>
          <li>
            <a href="#" className="navLink">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
