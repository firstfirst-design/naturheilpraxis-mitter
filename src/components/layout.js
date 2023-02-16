import * as React from 'react';
import NavigationSmal from './navigation-smal';

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <NavigationSmal />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
