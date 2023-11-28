import React from "react";
import styles from './styles.module.css'

export default function TextSummary(props) {
  return (
    <div
      className={`container m-2 border bg-${props.mode} ${styles.previewSection}`}
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h3>TextSummary</h3>
      {props.input.length > 0
        ? props.input.split(" ").filter((item) => {
            return item.length > 0;
          }).length
        : 0}{" "}
      words {props.input.length > 0 ? props.input.length : 0} characters
    </div>
  );
}
