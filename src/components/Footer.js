import React from 'react';
import { FOOTER_DATA } from '../const/data';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {FOOTER_DATA.year} {FOOTER_DATA.name}. All rights reserved.</p>
        <p>
          {FOOTER_DATA.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
