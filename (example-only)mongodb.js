//CRUD -> create,read,update,delete

// before destructuring --
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//after desrtucturing --
const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionUrl,
    {useNewUrlParser : true},
    (error,client) => {
        if(error) { return console.log("Unable to connect, error: " ,error)}
     
        const db = client.db(databaseName)

        db.collection('tasks').deleteOne({
            description:'string2',

        }).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
        // db.collection('tasks').updateMany({
        //     _id: ObjectID('5fa6859258a0c246a6ef2f93'), _id: ObjectID('5fa6859258a0c246a6ef2f94')},
        //     {
        //         $set:{ completed:true },
        //     }).then((result)=> {console.log(result)}).catch((error)=>{console.log(error)})

        // db.collection('users').updateOne({
        //     _id: ObjectID('5fa6859258a0c246a6ef2f91')}, 
        //     {
        //         $set : {
        //                 name:'Sherwy'
        //         }
        //     }).then((result) => {
        //         console.log(result)
        //     }).catch((error) =>{
        //         console.log(error)
        //     })

        // db.collection('tasks').findOne({ _id:ObjectID('5fa6859258a0c246a6ef2f94')},(error,user)=> {
        //     if(error){return console.log(error," Unable to find that data ")}
        //     console.log(user);
        // })

        // db.collection('tasks').find({ completed:false }).toArray((error,user)=>{
        // if (error) { return console.log(error, " Unable to find that data ") }
        // console.log(user);
        // })
        //  db.collection('users').insertOne({
        //     name: "Adai",
        //     age: 20
        // })

        // db.collection('tasks').insertMany([
        //     {
        //         description:'string1',
        //         completed:true
        //     }, {
        //         description:'string2',
        //         completed:false
        //       },
        //       {
        //           description:'string3',
        //           completed:false
        //       }

        // ],(error,result) => {
        //     if(error){ return console.log("Error couldnt add user :",error)}
        //     console.log(result.ops)
        // })

})