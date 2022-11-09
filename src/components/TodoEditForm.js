import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import deleteTodo from "../redux/api/deleteTodo";
import editTodo from "../redux/api/editTodo";
import complete from "../redux/api/markAsCompleted";
import startTodo from "../redux/api/startTodo";

export default function TodoEditForm({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: todo.title,
    description: todo.description,
    important: todo.important,
  });

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
    navigate(`${todo.state === "completed" ? "/completed" : "/current"}`);
  };

  const handleComplete = () => {
    dispatch(complete(todo._id));
    navigate("/completed");
  };

  const handleStart = () => {
    dispatch(startTodo(todo._id));
    navigate("/current");
  };

  const handleSubmit = () => {
    console.log(todo._id);
    dispatch(editTodo(todo._id, form));
    console.log(form);
    navigate(todo.state === "completed" ? "/completed" : "/current");
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          value={form.title}
          required
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="memo">Memo</label>
        <textarea
          name="memo"
          rows="5"
          className="form-control"
          id="memo"
          value={form.description}
          onChange={function (e) {
            setForm({
              ...form,
              description: e.target.value,
            });
          }}
        ></textarea>
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="important"
          className="form-check-input"
          id="important"
          checked={form.important}
          onChange={(e) =>
            setForm({
              ...form,
              important: e.target.checked,
            })
          }
        ></input>
        <label className="form-check-label" htmlFor="important">
          Important
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      {todo.state !== "completed" && todo.state === "onGoing" ? (
        <button
          type="button"
          className="btn btn-success ml-2"
          onClick={handleComplete}
        >
          Complete
        </button>
      ) : (
        <></>
      )}
      {todo.state === "notStarted" ? (
        <button
          type="button"
          className="btn btn-secondary ml-2"
          onClick={handleStart}
        >
          start
        </button>
      ) : (
        <></>
      )}
      <button
        type="button"
        className="btn btn-danger ml-2"
        onClick={handleDelete}
      >
        Delete
      </button>
    </form>
  );
}
