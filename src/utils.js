export const getTodoStateText = (todo) => {
  switch (todo.state) {
    case "notStarted":
      return "not started";
    case "onGoing":
      return "ongoing";
    case "Completed":
      return "completed";
  }
};
