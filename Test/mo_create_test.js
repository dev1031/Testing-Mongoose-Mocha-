const Student = require('./../App/student')
const assert = require('assert');

describe(' Create records' ,()=>{
    it(' Create a user in db ' , ()=>{ 
        //assert( true );
        let sam = new Student({ name : 'sam'});
        sam.save()
        .then(()=>{
            assert(!sam.isNew)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
} )