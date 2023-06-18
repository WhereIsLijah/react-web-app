import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

// creating an array for both button sizes and styles
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
    // if provided buttonSize or buttonStyle prop exists in Array then it is set to 
    // checkButtonSize/Style else display default i.e the first element of Array 
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
