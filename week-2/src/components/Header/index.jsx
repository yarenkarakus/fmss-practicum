import React from "react";
import NewToDoForm from "./NewToDoForm/index";

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewToDoForm />
    </header>
  );
};

export default Header;
