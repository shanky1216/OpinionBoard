import { createContext, useState } from "react";

export const OpinionContext = createContext({
  items: [],
  getData: () => {},
  upVote: () => {},
  downVote: () => {},
});

const OpinionContextsProvider = ({ children }) => {
  const [opinion, setOpinion] = useState({
    ops: [],
  });
  function getData(data) {
    if(data.title.trim() === "" ||data.description.trim()===""|| data.name.trim()===""){
      return;
    }
    setOpinion((prevOpinion) => {
      const id = Math.random();
      return {
        ops: [...prevOpinion.ops, { id: id, ...data, votes: 0 }],
      };
    });
  }
  function upVote(id) {
    setOpinion((prevOpinion) => {
      const updatedOps = prevOpinion.ops.map((op) =>
        op.id === id ? { ...op, votes: op.votes + 1 } : op
      );
      return { ops: updatedOps };
    });
  }
  function downVote(id) {
    setOpinion((prevOpinion) => {
      const updatedOps = prevOpinion.ops.map((op) =>
        op.id === id ? { ...op, votes: op.votes - 1 } : op
      );
      return { ops: updatedOps };
    });
  }
  function downVote(id) {
    setOpinion((prevOpinion) => {
      const updatedOps = [...prevOpinion.ops];
      let existingItemIndex = updatedOps.findIndex(o => o.id === id);
      if(existingItemIndex > -1){
      const updatedItem = {...updatedOps[existingItemIndex], votes: updatedOps[existingItemIndex].votes - 1}
      updatedOps[existingItemIndex] = updatedItem;
      return {ops: updatedOps}
      }
    });
  }

  const opinionCtx = {
    opinion: opinion.ops,
    getData,
    upVote,
    downVote,
  };
  return (
    <OpinionContext.Provider value={opinionCtx}>
      {children}
    </OpinionContext.Provider>
  );
};

export default OpinionContextsProvider;
