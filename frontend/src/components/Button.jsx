import React from 'react';

export const Button = ({ children, classes, onClick }) => {
  return (
    <div>
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
