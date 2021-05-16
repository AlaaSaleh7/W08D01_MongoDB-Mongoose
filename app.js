// pulse check
// Q1
const express = require('express');

const todoModule = require('./schema');

const db = require('./db');
const { error } = require('console');

const app = express();

app.use(express.json());

app.get('/todos',(req,res)=>{

});
// practice
// Q1
app.post('/create/todo',(req,res)=>{

    const {task,description,deadline,isCompleted,priority}=req.body;

    const newTask = new todoModule(
        {task,description,deadline,isCompleted,priority}
    );
    
    newTask.save().then(result=>{res.json(result)}).catch(err=>{res.send(err)})
});

app.put('/update/todo',(req,res)=>{

});

app.delete('/delete/todo',(req,res)=>{

});

const port = 3000;

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});


