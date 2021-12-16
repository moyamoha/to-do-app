import React from "react";

export default function Todo({ user, a_todo, setEditingState, data, setData }) {
    function setColor(a_todo_obj) {
        switch (a_todo_obj.state) {
            case "not started":
                return ["#007bff", "white"];
            case "under work":
                return ["#ffc107", "black"];
            case "done":
                return ["#28a745", "white"];
            default:
                return ["#de4452", "white"];
        }
    }

    function styleTrashIcon(e, becomesBigger) {
        let trash = e.target.querySelector(".trash");
        if (trash) {
            if (becomesBigger) {
                trash.style.transform = "scale(120%)";
            } else {
                trash.style.transform = "scale(100%)";
            }
        }
    }

    function handleEdit() {
        if (a_todo.state === "expired") {
            setEditingState(null, false);
            alert("Item is expired");
        } else {
            console.log(typeof setEditingState);
            setEditingState(a_todo, true);
        }
    }

    function handleRemove() {
        if (window.confirm("Do you really want to delete this todo?")) {
            let id = a_todo.id;
            fetch(`/delete`, {
                method: "POST", // or 'PUT'
                cors: "Access-Control-Allow-Origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id, user: user}),
            })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200 && response.ok) {
                        let uusData = Array.from(data);
                        uusData = uusData.filter((todo) => todo.id !== id);
                        setData(uusData);
                    }
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
        setEditingState(null, false);
    }
    return (
        <div className="todo-card">
            <div
                className="todo-card-sect title"
                style={{ backgroundColor: setColor(a_todo)[0] }}
            >
                <span style={{ color: setColor(a_todo)[1] }}>
                    {a_todo.title}
                </span>
                <div onClick={handleEdit} style={{ cursor: "pointer" }}>
                    🖋
                </div>
            </div>
            <p className="todo-card-sect">{a_todo.description}</p>
            <div className="todo-card-sect">
                <span>Exp:</span>
                <span>{a_todo.date_due}</span>
            </div>
            <div className="todo-card-sect">
                <span>Importance: </span>
                <div className="imp-container">
                    {[1, 2, 3].map((i) => (
                        <span
                            className="imp-item"
                            key={a_todo.title + `${i}`}
                            style={
                                a_todo.importance === `${i}`
                                    ? { backgroundColor: "#ccc" }
                                    : { backgroundColor: "white" }
                            }
                        >
                            {i}
                        </span>
                    ))}
                </div>
            </div>
            <div
                className="del-button"
                onMouseEnter={(e) => styleTrashIcon(e, true)}
                onMouseLeave={(e) => styleTrashIcon(e, false)}
                onClick={handleRemove}
            >
                <div className="trash" style={{ fontSize: "1.1rem" }}>
                    🗑
                </div>
            </div>
        </div>
    );
}
