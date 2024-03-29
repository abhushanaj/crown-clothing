import React from 'react';

/* Styling */
import './custom-button.styles.scss';

const CustomButton = (props) => {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button
      className={` ${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
