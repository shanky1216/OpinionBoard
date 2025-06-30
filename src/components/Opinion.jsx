import React, { useContext } from "react";
import downArrow from "../assets/down-arrow.svg";
import upArrow from "../assets/up-arrow.svg";
import classes from "../components/Opinion.module.css";
import { OpinionContext } from "../store/OpinionContext";
const Opinion = ({ title, name, description, votes, id }) => {
  const {upVote, downVote} = useContext(OpinionContext);
  return (
    <li className={classes.container}>
      <div className={classes.headingContainer}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.name}>Shared by {name}</p>
      </div>
      <h2 className={classes.description}>{description}</h2>
      <div className={classes.btnContainer}>
        <button onClick={()=>downVote(id)} className={classes.btn}>
          <img className={classes.img} src={downArrow} alt="downArrow" />
        </button>
        <p>{votes}</p>
        <button onClick={()=>upVote(id)} className={classes.btn}>
          <img className={classes.img} src={upArrow} alt="upArrow" />
        </button>
      </div>
    </li>
  );
};

export default Opinion;
