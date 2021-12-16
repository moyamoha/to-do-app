import React from "react";

export default function Filter({ filter, setFilter, setEditingState }) {
    const filterOut = (e) => {
        const newFilter = {
            ...filter,
        };
        newFilter[e.target.name] = e.target.value;
        setFilter(newFilter);
    };

    return (
        <div id="filter-container">
            <div id="filter">
                <span>Filter by:</span>
                <select
                    name="importance"
                    id="importance"
                    value={filter.importance}
                    className="dropdown"
                    onChange={(e) => filterOut(e)}
                >
                    <option value="">Importance</option>
                    <option value="1">1 (less important)</option>
                    <option value="2">2 (important)</option>
                    <option value="3">3 (very important)</option>
                </select>
                <select
                    name="state"
                    id="status"
                    className="dropdown"
                    value={filter.state}
                    onChange={(e) => filterOut(e)}
                >
                    <option value="">State of todo</option>
                    <option value="not started">Not started </option>
                    <option value="under work">Under work</option>
                    <option value="done">Done 🥰</option>
                    <option value="expired">Expired 😫</option>
                </select>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
                onClick={() => setEditingState(null, true)}
            >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </div>
    );
}
