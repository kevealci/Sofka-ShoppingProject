import React from 'react';

export const Title = ({ children, classes }) => {
  return (
    <>
      <h4 className={classes}>{children}</h4>
    </>
  );
};
