// pulse check
// Q1
const express = require("express");

const todoModule = require("./schema");

const db = require("./db");

const { error } = require("console");

const app = express();

app.use(express.json());

// practice
//Q2 + َQ3
app.get("/todos", (req, res) => {
  todoModule
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

// Q1
app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;

  const newTask = new todoModule({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });

  newTask
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Q4
app.get("/todos/completed", (req, res) => {
  todoModule
    .find({ isCompleted: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
//Q5
app.put("/update/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;

  todoModule
    .findOneAndUpdate(
      { task },
      { description, deadline, isCompleted, priority },{new:true}
    )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

//Q6
app.delete("/delete/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;

  todoModule
    .deleteOne({ task }, { description, deadline, isCompleted, priority })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
