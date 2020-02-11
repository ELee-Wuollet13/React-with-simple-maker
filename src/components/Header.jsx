import React from "react";

// Import the styles




function Header(props) {
  var headerStyles = {
    backgroundColor: '#43dd64',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  };
  return (
    <div style={headerStyles}>
    <h1>Hey, I'm a component</h1>
    <h2>Hey, so am I!</h2>
    </div>
  );
}




export default Header;
