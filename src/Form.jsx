import React from "react";
import styles from "./form.module.css";

const Form = props => {
  return (
    <>
      <form onSubmit={props.submit} className={styles.formStyle} >
      {props.children}
      </form>
    </>
  );
};

export default Form;
