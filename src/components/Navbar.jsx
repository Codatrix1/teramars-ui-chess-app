import React from "react";

import { pageLinks, socialLinks } from "../data";

//------------- NAVBAR COMPONENT--------------------------------
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <h3>ChessApp</h3>
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/*<!-- left this comment on purpose -->*/}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((eachPageLink) => {
              return (
                <li key={eachPageLink.id}>
                  <a href={eachPageLink.href} className="nav-link">
                    {eachPageLink.text}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialLinks.map((eachSocialLink) => {
              const { id, href, icon } = eachSocialLink;

              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
