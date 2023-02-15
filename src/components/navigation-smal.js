import * as React from 'react';
import { Link } from 'gatsby';

const NavigationSmal = ({ pageTitle, children }) => {
  return (
    <div>
      <Link to="/ueber-mich">Über mich</Link>
      <Link to="/therapien">Therapien</Link>
      <Link to="/diagnose">Diagnose</Link>
      <Link to="/kontakt">Kontakt</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default NavigationSmal;
