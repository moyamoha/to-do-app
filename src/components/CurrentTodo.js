import React from "react";
import { Link } from "react-router-dom";
import TodoStateChip from "./TodoStateChip";

export default function CurrentTodo({ todo }) {
  return (
    <Link
      to={`/${todo._id}`}
      className={`d-flex justify-content-between list-group-item list-group-item-action ${
        todo.important ? "list-group-item-danger" : "list-group-item-info"
      }`}
    >
      <span>
        <b>{todo.title}</b> - {todo.description}
      </span>
      <TodoStateChip todo={todo}></TodoStateChip>
    </Link>
  );
}
