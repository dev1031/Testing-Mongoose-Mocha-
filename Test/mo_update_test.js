const Student = require('./../App/student');
const assert =  require('assert');

describe('Updating the DataBase' ,()=>{
    let updater ;
    beforeEach((done)=>{
        updater = new Student({
            name : "Updater"
        });
    updater.save()
    .then(()=>{
        done();
    })
    });

    it('Set n Save and Update' , (done)=>{
        updater.update({ name: 'newUpdater' });
        updater.save()
        .then(()=>{
           Student.find({ name : "Updater"});
        })
        .then((students)=>{
            assert( students == null );
            done();
        })
        .catch((error)=>{
            console.log(error)
        })
    })

})