import React, {useEffect, useState} from 'react'

function generateId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);
}

export default function EditModal({user, todo, setEditingState, data, setData}) {

    useEffect(function() {
        document.querySelector('.save').style.borderBottomRightRadius = "25px";
        document.querySelector('.cancel').style.borderBottomLeftRadius = "25px";
    })

    const [title, setTitle] = useState(() => todo ? todo.title : '')
    const [descrip, setDiscrip] = useState(() => todo ? todo.description : '')
    const [expdate, setExpDate] = useState(() => todo ? todo.date_due : '')
    const [importance, setImportance] = useState(() => todo ? todo.importance : '1')
    const [progress, setProgress] = useState(() => todo ? todo.state : "")
    

    function handleSaveBtn(e) {
        e.preventDefault()
        let id = todo ? todo.id : generateId();
        let todo_item = {
            "title": title,
            "description": descrip,
            "date_due": expdate,
            "importance": importance,
            "state": progress,
            "id": id
        }
        let url = todo ? "/edit" : "/add";
        fetch(url, {
            method: 'POST', // or 'PUT'
            cors: "Access-Control-Allow-Origin",
            headers: {
              'Content-Type': 'application/json',
            },
            body: todo ? JSON.stringify({todo: todo_item, user: user}) : JSON.stringify({todo: todo_item, user:user})
          })
          .then(response => {
            if (response.status === 200 && response.ok) {
              let uusData = Array.from(data);
              if (url === "/edit") {
                  let indOfEditing = uusData.map(x => x.id).indexOf(todo.id);
                  uusData[indOfEditing] = todo_item;
              } else if(url === "/add") {
                  uusData.push(todo_item)
              }
              console.log(uusData)
              setData(uusData)
            }
          })
          .then(res => {
            //
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        setEditingState(null, false)
    }

    function handleChange(e) {
        const targ = e.target;
        switch(e.target.name) {
            case "title":
                setTitle(targ.value)
                break
            case "description":
                setDiscrip(targ.value)
                break
            case "imp":
                setImportance(targ.value)
                break
            case "state":
                setProgress(targ.value)
                break
            case "exp":
                setExpDate(targ.value)
                break
            default:
                break
        }
    }

    return (
        <form className="editmodal">
        <div id="editmodal-edit">
            <label>
                title
                <input value={title} type="text" name="title" className="editmodal-sect" placeholder="Please insert a title" onChange={e => handleChange(e)}></input>
            </label>
            <label>
                description
                <textarea value={descrip} type="text" name="description" className="editmodal-sect" placeholder="Please insert a description" onChange={e => handleChange(e)}></textarea>
            </label>
            <label>
                date due
                <input name="exp" defaultValue={expdate} type="date" className="editmodal-sect" onChange={e => handleChange(e)}></input>
            </label>
            <label>
                Importance
            </label>
            <div className="editmodal-sect">
                <label>1<input type="radio" name="imp" value="1" checked={importance === "1"} onChange={e => handleChange(e)}></input></label>
                <label>2<input type="radio" name="imp" value="2" checked={importance === "2"} onChange={e => handleChange(e)}></input></label>
                <label>3<input type="radio" name="imp" value="3" checked={importance === "3"} onChange={e => handleChange(e)}></input></label>
            </div>
            <label>State</label>
            <div className="editmodal-sect" style={{padding: '0', marginTop:"4px"}}>
                <input
                  name="state"
                  type="radio"
                  onChange={e => handleChange(e)}
                  id="s1"
                  value="not started"
                  style={{display:"none"}}
                ></input>
                <label
                  htmlFor="s1"
                  className="editmodal-state-item"
                  style={progress === "not started" ? {backgroundColor: "#007bff", color: 'black'} : {backgroundColor: "white", color:"black"}}
                >not started</label>

                <input 
                  name="state"
                  type="radio"
                  value="under work"
                  onChange={e => handleChange(e)}
                  style={{display:'none'}}
                  id="s2"
                ></input>
                <label 
                  htmlFor="s2"
                  style={progress === "under work" ? {backgroundColor: "#ffc107" , color: 'black'} : {backgroundColor: "white", color:"black"}}
                  className="editmodal-state-item" 
                >underwork</label>
                
                <input 
                  name="state"
                  onClick={e => handleChange(e)}
                  style={{display:"none"}}
                  id="s3"
                  value="done"
                  type="radio"
                ></input>
                <label
                  htmlFor="s3"
                  className="editmodal-state-item" 
                  style={progress === "done" ? {backgroundColor: "#28a745" , color: 'black'} : {backgroundColor: "white", color:"black"}}
                >done
                </label>
            </div>
        </div>
        <button onClick={() => setEditingState(null, false)} className="editmodal-btn cancel" >Cancel</button>
        <button onClick={e => handleSaveBtn(e)} className="editmodal-btn save">Save</button>
    </form> 
    )
}
