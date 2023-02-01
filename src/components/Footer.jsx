import React from "react";

import { pageLinks, socialLinks } from "../data";

//----------------------------------
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((eachPageLink) => {
            const { id, href, text } = eachPageLink;

            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((eachSocialLink) => {
            const { id, href, icon } = eachSocialLink;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="footer-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Chessify
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
