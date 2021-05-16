const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    task:{type:String,require:true,unique:true},
    description:{type:String},
    deadline:{type:Number,require:true},
    isCompleted:{type:Boolean,require:true},
    priority:{type:String,require:true},
});

module.exports = mongoose.model('todo',todoSchema);
