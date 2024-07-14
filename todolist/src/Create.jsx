import React, {useState} from 'react'
import axios from 'axios';



export default function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:5552/add', {task: task})
            .then(result => console.log(result))
            .catch(err => console.log(err))
  }
  return (
    <div>
      <center><input type="text" onChange={(e) => setTask(e.target.value)} /></center>
      <button onClick={handleAdd}>Add</button>
      
    </div>
  )
}
