const mongoose = require('mongoose');
mongoose.Promise = global.Promise;//for using ES6 Promises=> now its default in js

before((done)=>{
    mongoose.connect("mongodb://localhost/mongotube" , {useNewUrlParser : true , useUnifiedTopology: true } ,()=>{
    try{
        //console.log('DataBase is Connected')
        done();
    }catch(error){
        throw error
    }
});
})

beforeEach((done)=>{
    mongoose.connection.collections.students.drop(()=>{
        console.log('DataBase Dropped!')
        done();
    })
})
