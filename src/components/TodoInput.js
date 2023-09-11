import "./TodoInput.css";
import {useState} from 'react';

function TodoInput(){
    const [todo, setTodo] = useState("");
    return(
        <div>
            <input type="text" value={todo} onChange={(event) => {
                setTodo(event.target.value);
            }}/>
        </div>
    )
}

export default TodoInput;