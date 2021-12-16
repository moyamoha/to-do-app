import React, { useEffect, useState } from "react";
import EditModal from './EditModal'
import Filter from "./Filter.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Next from "./Next.js";
import "./home.css";


function Home({userName, setUser}) {
  const [editing, setEditing] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState({
    importance: "",
    state: "",
  });

  useEffect(() => {
    if (!data) {
      fetch("/api", {
        method: "POST", // or 'PUT'
        cors: "Access-Control-Allow-Origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({user: userName})
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
    window.document.title = "your personal todo app"
  });

  const setEditingStates = (editingObj, shouldEdit) => {
    setEditing(shouldEdit);
    setEditObj(editingObj);
  };

  function logout() {
    setUser("")
    localStorage.removeItem("token")
  }

  if (editing) {
    return (
      <div className="App">
        <Header userName={userName} logout={logout}></Header>
        <div id="main">
          <div id="all-todos">
            <Filter
              filter={filter}
              setFilter={setFilter}
              setEditingState={setEditingStates}
            ></Filter>
            {data ? (
              <TodoList
                data={data}
                setData={setData}
                filter={filter}
                setEditingState={setEditingStates}
                user={userName}
              ></TodoList>
            ) : (
              <div id="loading-container">
                <div id="loading"></div>
              </div>
            )}
          </div>
          <div id="stats">
              <Next
                setEditingState={setEditingStates}
                data={data}
                setData={setData}
              ></Next>
          </div>
        </div>
        <EditModal
          todo={editObj}
          setEditingState={setEditingStates}
          data={data}
          setData={setData}
          user={userName}
        ></EditModal>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header userName={userName} logout={logout}></Header>
        <div id="main">
          <div id="all-todos">
            <Filter
              setEditingState={setEditingStates}
              filter={filter}
              setFilter={setFilter}
            ></Filter>
            {data ? (
              <TodoList
                data={data}
                setData={setData}
                filter={filter}
                setEditingState={setEditingStates}
                user={userName}
              ></TodoList>
            ) : (
              <div id="loading-container">
                <div id="loading"></div>
              </div>
            )}
          </div>
          <div id="stats">
            <Next
              setEditingState={setEditingStates}
              data={data}
              setData={setData}
            ></Next>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
