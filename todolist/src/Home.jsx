import React, { useState, useEffect} from 'react'
import Create from './Create'
import axios from 'axios'
//import BsCircleFill from 'react-icons'
import { BsCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs'

export default function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5552/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))}, []
    )
    
    const handleEdit = (id) => {
        axios.put('http://localhost:5552/update/'+id)
        .then(result => console.log(result))
        .catch(err => console.log(err))}
    const handleDelete = (id) => {
            axios.delete('http://localhost:5552/delete/'+id)
            .then(result => console.log(result))
            .catch(err => console.log(err))}
    
    


    
    return (
        <div>
            <h2><center>Todo List</center></h2>
            <Create />
            <br />
            <center>
                {todos.length === 0 ? (
                    <div>No tasks</div>
                ) : (
                    todos.map((todo, index) => (
                        <div 
                            className={`todo-item ${todo.done ? 'barre' : ''}`} 
                            key={index}
                        >
                            <div onClick={() => handleEdit(todo._id)}>
                            {todo.done ?  <BsCheckCircleFill /> :  <BsCircleFill />}
                            </div>
                            <div className="wrap">{todo.task}</div>
                            <div onClick={() => handleDelete(todo._id)}>
                                <BsFillTrashFill />
                            </div>
                        </div>
                    ))
                )}
            </center>
        </div>
    );

}

