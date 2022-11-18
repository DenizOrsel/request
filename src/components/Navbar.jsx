import React from "react";
import "./Navbar.css";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineNotificationsNone, MdAssignment } from "react-icons/md";
import {ImCog} from "react-icons/im";

const Navbar = () => {
  return (
    <div className="Navigation-container">
      <img
        src="https://identityeu.nfieldmr.com/img/nfield-manager.png"
        alt="Nfieldlogo"
        className="Nfield-logo"
      />
      <ul className="Navigation-links">
        <li>Surveys</li>
        <li>Repositories</li>
        <li className="Api">&nbsp;&nbsp;&nbsp;APIs&nbsp;&nbsp;&nbsp;</li>
      </ul>
      <div className="Empty-div"></div>
      <div className="Navigation-icons">
        <MdAssignment />
        <ImCog />
        <MdOutlineNotificationsNone />
        <HiAcademicCap />
      </div>
      <ul className="Navigation-username">
        <li>Username</li>
        <li>Domain</li>
      </ul>
    </div>
  );
};

export default Navbar;
