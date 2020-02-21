const Student = require('./../App/student');
const assert = require('assert');

describe(('Reading DataBase') , async ()=>{
    let reader;

    beforeEach((done)=>{
        reader =new  Student({ name : "Reader"});
        reader.save()
        .then(()=>{
            done();
            })
        .catch((error)=>{
            console.log(error)
        })    
    })

    it('Reads the data from DataBase' , (done)=>{
         Student.find({name: "Reader"})
        .then((students)=>{
            assert(reader._id.toString === students[0]._id.toString)
            done();
        })
        .catch((error)=>{
            console.log(error)
        })
    })
})