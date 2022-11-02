import Current from "./pages/Current";
import Completed from "./pages/Completed";
import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import ViewTodo from "./pages/ViewTodo";

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/current" element={<Current></Current>}></Route>
        <Route path="/completed" element={<Completed></Completed>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route
          path="/signup"
          element={
            loggedIn ? <Navigate to="/current"></Navigate> : <Signup></Signup>
          }
        ></Route>
        <Route
          path="/login"
          element={
            loggedIn ? <Navigate to="/current"></Navigate> : <Login></Login>
          }
        ></Route>
        <Route
          path="/:id"
          element={
            !loggedIn ? (
              <Navigate to="/login"></Navigate>
            ) : (
              <ViewTodo></ViewTodo>
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
