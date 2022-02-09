import React from "react";
import { version } from "react-dom";

function Button({ children, type, isDisabled, version }) {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
    type: 'submit',
    isDisabled : false,
    version : 'primary'
}

export default Button;
