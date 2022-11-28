import React, { useState } from "react";

// stylesheet
import "./Navbar.css";

// Router Links
import { Link } from "react-router-dom";

// Images
import Logo1 from "../images/Logo1.png";
import Logo2 from "../images/Logo2.png";
import Modal from "./Modal";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
      <header>
        <nav className="navbar is-transparent is-light has-background-white">
          <div className="container">
            <div className="navbar-brand">
              <Link
                className="navbar-item"
                to="/"
                onClick={() => setShowMenu(!showMenu)}
              >
                <div className="logo">
                  <img src={Logo1} alt="Logo1" />
                  <img src={Logo2} alt="Logo2" />
                </div>
              </Link>
              <button
                className={"navbar-burger" + (showMenu ? " is-active" : "")}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              className={"navbar-menu" + (showMenu ? " is-active" : "")}
              id="navMenu"
            >
              <div className="navbar-end">
                <Link
                  className="navbar-item has-text-weight-medium"
                  to="/"
                  style={{ color: "#434343" }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Home
                </Link>
                <Link
                  className="navbar-item has-text-weight-medium"
                  to="/place-to-stay"
                  style={{ color: "#434343" }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Place to stay
                </Link>
                <Link
                  className="navbar-item has-text-weight-medium"
                  to="/nfts"
                  style={{ color: "#434343" }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  NFTs
                </Link>
                <Link
                  className="navbar-item has-text-weight-medium"
                  to="/community"
                  style={{ color: "#434343" }}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Community
                </Link>
              </div>
              <Link
                className="navbar-item has-text-weight-medium"
                onClick={() => setShowMenu(!showMenu)}
              >
                <button onClick={()=>setOpenModal(!openModal)}>Connect wallet</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
