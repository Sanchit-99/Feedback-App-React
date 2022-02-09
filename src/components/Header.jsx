import React from "react";

function Header({text,textColor,bgColor}) {
  // or {text} then access by simply writing text
  const headerStyle = {
     color:textColor,
     backgroundColor :bgColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
    text:'default prop header',
    textColor: '#fff',
    bgColor: 'rgba(0,0,0,0.4)'
}

export default Header;
