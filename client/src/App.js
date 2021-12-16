import React, { useState } from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Home from './components/Home/Home';
import Calender from './components/Home/Calender';
import CreateAccount from './components/CreateAccount'


export default function App() {
  const [user, setUser] = useState(() => {
    let token = localStorage.getItem("token");
    if (token) {
        return JSON.parse(token).userName;
    } else {
        return ""
    }
  })

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route
                      exact
                      path="/"
                      element={
                          user !== "" ? (
                              <Navigate to={"/home/user"}></Navigate>
                          ) : (
                              <Navigate to={"/login"}></Navigate>
                          )
                      }
                  ></Route>
                  <Route
                      path={"/home/calender"}
                      element={
                          user !== "" ? (
                              <Calender user={user}></Calender>
                          ) : (
                              <Navigate to={"/login"}></Navigate>
                          )
                      }
                  />
                  <Route
                      push
                      path="/login"
                      element={
                          user !== "" ? (
                              <Navigate to={"/home/user"}></Navigate>
                          ) : (
                              <Login setUser={setUser}></Login>
                          )
                      }
                  ></Route>
                  <Route
                      path={"/home/user"}
                      element={
                          user !== "" ? (
                              <Home userName={user} setUser={setUser}></Home>
                          ) : (
                              <Navigate to={"/login"}></Navigate>
                          )
                      }
                  ></Route>
                  <Route
                      path="/create-account"
                      element={
                          user !== "" ? 
                          <Navigate to="/home/user"></Navigate> :
                          <CreateAccount
                              setUser={setUser}
                          ></CreateAccount>
                      }
                  ></Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}
