import React from "react";
import  classes  from "../components/Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <h1 className={classes.heading}>OpinionBoard</h1>
      <p className={classes.content}>
        Strong opinions, judged by anonymous internet<br/> users. What could possibly
        go wrong?
      </p>
    </div>
  );
};

export default Header;
