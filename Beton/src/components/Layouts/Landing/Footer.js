import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer" style={{ backgroundColor: "#977ba3" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Beton</h5>
            <p className="grey-text text-lighten-4">
              An interface to help give everyone a voice of their own. <br /> So what are you waiting for?
                </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Quick Links</h5>
            <ul>
              <li><Link className="grey-text text-lighten-3" to="/admin/login">Admin login</Link></li>
              <li><Link className="grey-text text-lighten-3" to="/download">Download mobile app</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Beton
            <a className="grey-text text-lighten-4 right" href="https://github.com/Pratit23/Beton-DBMS" target="__blank">Contributors</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
