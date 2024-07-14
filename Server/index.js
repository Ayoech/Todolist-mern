const express = require('express');
const mongoose = require('mongoose');
const TodoModel = require('./Models/Todo')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Todo')
app.get('/get', (req, res) => {
    TodoModel.find().then(result => res.json(result)).catch(err => console.log(err))
})  

app.put('/update/:id', (req, res) =>  {
    const {id} = req.params;
    console.log(id);
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id', (req, res) =>  {
    const {id} = req.params;
    console.log(id);
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err=>res.json(err))
})
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))

})
app.listen(5552, () => console.log('good'));