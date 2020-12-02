const mongoose = require ('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-API',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify : false,
    
})

// const Tasks = mongoose.model('Tasks',{
// description: {
//         type:String,
//         required:true,
//         trim:true,
//     },
//     completed:{
//         type:Boolean,
//         default:false,
//     }
// })

// const createTasks = new Tasks ({
//     description:'Clean your house     ',
    
// })

// const createTasks2 = new Tasks({
//     description:'   Work and exercise properly   ',
//     completed: true
// })

// createTasks.save().then(()=>{
//     console.log(`Bro result: ${createTasks}`)
// }).catch((error)=>{
//     console.log(`Bro, error :${error}`)
// })

// createTasks2.save().then(() => {
//     console.log(`Bro result: ${createTasks2}`)
// }).catch((error) => {
//     console.log(`Bro, error :${error}`)
// })