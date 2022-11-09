import React from "react";
import { getTodoStateText } from "../utils";

export default function TodoStateChip({ todo }) {
  console.log(todo);
  return (
    <span
      style={{
        ...chipStyle,
        backgroundColor: todo.state === "onGoing" ? "#d87a07" : "#343434",
      }}
    >
      {getTodoStateText(todo)}
    </span>
  );
}

const chipStyle = {
  borderRadius: "35px",
  width: "fit-content",
  padding: "4px 10px",
  color: "white",
  fontSize: "0.75rem",
};
