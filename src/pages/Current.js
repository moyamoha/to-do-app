import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getUserTodos from "../redux/api/getUserTodos";
import BaseLayout from "../components/BaseLayout";
import CurrentTodo from "../components/CurrentTodo";

export default function Current() {
  const todos = useSelector((state) => state.todos.data);
  const dispatch = useDispatch();

  const currents = useMemo(() => {
    return todos.filter((td) => td.state !== "completed");
  }, [todos]);

  useEffect(() => {
    dispatch(getUserTodos());
  }, [dispatch]);
  return (
    <BaseLayout>
      <div className="row justify-content-center mt-3">
        <div className="col-md-10">
          <h1>
            {currents.length} Current Todo{currents.length > 1 ? "s" : ""}
          </h1>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-10">
          {currents && currents.length > 0 ? (
            <div className="list-group">
              {currents.map((todo) => (
                <CurrentTodo key={todo._id} todo={todo}></CurrentTodo>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2>Looks like you don't have any todos! Nice work.</h2>
              <br></br>
              <Link className="btn btn-primary" to="/create">
                New todo
              </Link>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
}
