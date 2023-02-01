import React from "react";

function Footer() {
  return (
    <footer className="page-footer fixed-bottom font-small black">

      <div className="footer-copyright text-center py-3">
      <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/TylerKandarian"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/tyler-kandarian-258864226/"
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
        </ul>
        © 2023 Copyright: Tyler Kandarian
      </div>
    </footer>
  );
}

export default Footer;