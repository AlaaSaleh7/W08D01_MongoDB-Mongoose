const mongoose = require ('mongoose');

const options ={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

//connecting mongoose
mongoose.connect('mongodb://localhost:27017/DB_todos',options).then(
    ()=>{
        console.log('DB ready to use')
    },
    (err)=>{
        console.log(err);
    }

);
