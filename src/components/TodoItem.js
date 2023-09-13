import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import "./TodoItem.css";
import { useState } from "react";

function TodoItem({todo, index, todos, setTodos}){

    const [isEdit, setIsEdit] = useState(false);
    const [editTodoName, seteditTodoName ] = useState("");


    const handleDelete = () => {
        const newTodos = todos.filter((item) => {
            if(todo.id === item.id){
                return false;
            }else{
                return true;
            }
        } )

        setTodos(newTodos);
       
    }

    const handleEdit = () => {
        setIsEdit(!isEdit);
        seteditTodoName(todo.name); 
    }

    const handleSubmit = (e) => {
          if(e.keyCode === 13){
            const newTodos = todos.map((item) => {
                if(todo.id === item.id){
                    return {
                        ...item,
                        name: editTodoName
                    }
                }else{
                    return item;
                }
            })
            setTodos(newTodos);
            setIsEdit(false);
          }  
    }


    const handleComplete = () => {
        const newTodos = todos.map((item) => {
            if(todo.id === item.id){
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                }
            }else{
                return item;
            }
        })
        setTodos(newTodos);
       
    }
    return (
        <div className="todo-item-wrapper">
            <div className="todo-item-text">
                <div>{index}.</div>
                {isEdit ? <input type="text" value={editTodoName} onChange={(e) => {
                    seteditTodoName(e.target.value);
                }}
                onKeyDown={handleSubmit}
                /> : <div>{todo.name}</div>}
            <div
            onClick={handleComplete}
            style={{
                textDecorationLine: todo.isCompleted ?
                "line-through" : "none"
            }}>{todo.name}</div>
            </div>
            <div className="todo-item-button">
                <button className="pencil-button" onClick={handleEdit}>
                   <PencilIcon />
                </button>
                <button className="trash-button" onClick={handleDelete}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;