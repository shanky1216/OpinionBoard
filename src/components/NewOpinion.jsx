import React, { useActionState, useContext } from "react";
import classes from "../components/NewOpinion.module.css";
import { OpinionContext } from "../store/OpinionContext";

const NewOpinion = () => {
  const { getData, opinion } = useContext(OpinionContext);
  function handleSubmit(prevState, formData) {
    const title = formData.get("title");
    const name = formData.get("name");
    const description = formData.get("description");
    const data = {
      title: title,
      name: name,
      description: description,
    };
    getData(data);

    const errors = [];

    if (title.trim() === "") {
      errors.push("Enter a valid title");
    }
    if (name.trim() === "") {
      errors.push("Enter a valid name");
    }
    if (description.trim() === "") {
      errors.push("Enter a valid description");
    }
    if (errors.length > 0) {
      return { errors: errors };
    }
    return {
      errors: null,
    };
  }
  const [formState, formAction] = useActionState(handleSubmit, {errors:null})

  return (
    <form action={formAction} className={classes.newOpinionContainer}>
      <h2 className={classes.heading}>Share your opinion!</h2>
      <div className={classes.inputContainer}>
        <p className={classes.input}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" />
        </p>
        <p className={classes.input}>
          <label htmlFor="name">Title</label>
          <input type="text" name="title" />
        </p>
      </div>
      <p className={classes.input}>
        <label htmlFor="">Your description</label>
        <textarea name="description" id="description"></textarea>
      </p>
      <p className={classes.btnContainer}>
        <button className={classes.btn}>Submit</button>
      </p>
      {formState.errors && (
        <ul className={classes.errors}>
          {formState.errors.map((error) => (
            <li key={error}>
              <p>{error}</p>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default NewOpinion;
