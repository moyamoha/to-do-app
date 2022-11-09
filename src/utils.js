export const getTodoStateText = (todo) => {
  const resObj = {
    notStarted: "not started",
    onGoing: "ongoing",
    Completed: "completed",
  };
  return resObj[todo.state];
};
