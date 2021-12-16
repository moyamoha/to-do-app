import React, { Suspense } from "react";
import Todo from "./Todo";
import TimeLeft from "./TimeLeft";
const Stat = React.lazy(() => import('./Stat'))

export default function Next({ data, setData, setEditingState}) {
  let next = null;
  let min_time = Number.MAX_SAFE_INTEGER;
  if (data) {
    const timeDiffs = data
      .map((todo) => {
        return { obj: todo, time: Date.parse(todo.date_due) - Date.parse(new Date()) };
      })
      .filter(
        (todoTimePair) =>
          todoTimePair.time > 0 && todoTimePair.obj.state !== "done"
      );
    for (let pair of timeDiffs) {
      if (pair.time < min_time) {
        next = { ...pair.obj };
        min_time = pair.time;
      }
    }
  }
  return (
    <>
      {next ? (
        <div>
          <strong>Upcoming task:</strong>
          <Todo data={data} setData={setData} setEditingState={setEditingState} a_todo={next}></Todo>
          <div><strong>Expires at:</strong><TimeLeft start={min_time}></TimeLeft></div>
          <br></br>
          <Suspense fallback={<div>LOADING...</div>}>
            <Stat src={data}></Stat>
          </Suspense>
          <div>total number of task: {data.length}</div>
        </div>
      ) : (
        "No data found"
      )}
    </>
  );
}
