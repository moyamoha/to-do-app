import React from "react";
import Todo from "./Todo";

export default function TodoList({ user, data, setData, filter, setEditingState }) {
    let naytettava = data
        ? data.filter((x) => {
              return (
                  (x.importance === filter.importance ||
                      filter.importance === "") &&
                  (x.state === filter.state || filter.state === "")
              );
          })
        : [];
    return (
        <div id="todo-list">
            {naytettava.length > 0
                ? naytettava.map((x) => (
                      <Todo
                          key={x.id}
                          a_todo={x}
                          setEditingState={setEditingState}
                          data={data}
                          setData={setData}
                          user={user}
                      ></Todo>
                  ))
                : "Nothing to show. Zero item found. Please check filter options"}
        </div>
    );
}
