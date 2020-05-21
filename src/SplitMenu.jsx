import React from "react";

const MenuStyle = {
  display: "flex",
  justifyContent:"center"
};
const BoxStyle = {
  border: "1px solid black"
};

const SplitMenu = props => {
  const { children, left, right } = props;
  return (
    <>
      {children}
      <div style={MenuStyle}>
        <div style={BoxStyle}>{left}</div>
        <div style={BoxStyle}>{right}</div>
      </div>
    </>
  );
};

export default SplitMenu;
