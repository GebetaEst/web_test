// /layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children , ...props}) => {
  return (
    <div className="min-h-screen min-w-[100wh] flex items-center justify-center" {...props}>
        {children}
    </div>
  );
};

export default AuthLayout;
