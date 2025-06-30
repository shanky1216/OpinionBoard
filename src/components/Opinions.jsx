import React, { useContext } from "react";
import data from "../dummyData";
import Opinion from "./Opinion";
import { OpinionContext } from "../store/OpinionContext";

const Opinions = () => {
  const {opinion} = useContext(OpinionContext)
  return (
    <ul>
      {opinion.map((d) => (
        <Opinion key={d.title} {...d}/>
      ))}
    </ul>
  );
};

export default Opinions;
