import React from 'react';

export const Image = ({ classes, src }) => {
  return (
    <>
      <img src={src} className={classes} alt="..." />
    </>
  );
};
