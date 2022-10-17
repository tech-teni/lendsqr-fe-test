import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="row nav-bar">
      <div className="logo-container col-lg-2 col-md-2 col-sm-2">
        <div>
          <img src="./img/Union.png" alt="" className="logo" />
        </div>
        <div>
          <img src="./img/lendsqr.png" alt="" className="company-name" />
        </div>
      </div>

      <div className="search-bar col-lg-6 col-md-6 col-sm-12">
        <input type="text" placeholder="Search for anything" />
        <div className="search-icon">
          <AiOutlineSearch />
        </div>
      </div>

      <div className="more-info col-lg-4 col-md-4 col-sm-12">
        <a>Docs</a>
        <img src="./img/Vector.png" alt="" />
        <div>
          <img src="./img/user.png" alt="" className="user-image" />
        </div>
        <h6 className="username">
          <div className="">Adedeji </div>
          <svg
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z"
              fill="#213F7D"
            />
          </svg>
        </h6>
      </div>
    </nav>
  );
};
export default Navbar;
