import { Outlet } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
