const Student = require('./../App/student');
const assert = require('assert');

describe(('Deleting DataBase') , async ()=>{
    let deleter;

    beforeEach((done)=>{
        deleter = new Student({ name : "Deleter"});
        deleter.save()
        .then(()=>{
            done();
            })
        .catch((error)=>{
            console.log(error)
        })    
    })

    it('Delete the data from DataBase' ,(done)=>{
        Student.findByIdAndDelete(deleter._id)
       .then(()=>{
           Student.findOne({name : "Deleter"})
       })
       .then((student)=>{
           assert( student == null );
           done();
       })
       .catch((error)=>{
           console.log(error)
       })
   })

})