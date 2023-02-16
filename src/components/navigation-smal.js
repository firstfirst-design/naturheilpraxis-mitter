import * as React from 'react';
import { Link } from 'gatsby';

const NavigationSmal = ({ pageTitle, children }) => {
  return (
    <div className="fixed z-10 flex flex-col justify-between h-screen w-full">
      <Link className=" bg-lime-700 m-1 text-center" to="/">
        Naturheilpraxis Mitter
      </Link>
      <div className="flex  w-full grid grid-cols-3 grid-rows-2 text-center">
        <Link className="bg-lime-700 m-1" to="/ueber-mich">
          Über mich
        </Link>
        <Link className="bg-teal-700 m-1" to="/therapien">
          Therapien
        </Link>
        <Link className="bg-lime-700 m-1" to="/diagnose">
          Diagnose
        </Link>
        <Link className="bg-teal-700 m-1" to="/kontakt">
          Kontakt
        </Link>
        <Link className="bg-lime-700 m-1" to="/blog">
          Blog
        </Link>
        <Link className="bg-teal-700 m-1" to="/blog">
          Test
        </Link>
      </div>
    </div>
  );
};

export default NavigationSmal;
