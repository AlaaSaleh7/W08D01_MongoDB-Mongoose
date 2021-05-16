const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    task:{type:String,require:true,unique:true},
    description:{type:String},
    deadline:{type:Date,require:true},
    isCompleted:{type:String,require:true},
    priority:{type:String,require:true},
});
