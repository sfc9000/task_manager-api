require('../src/db/mongoose')
const Tsk = require('../src/models/tasks')

// Tsk.findByIdAndDelete('5faa953bba57bee5387c28a2').then((tsks) => {
//     console.log('1st .then result: ',tsks)
//     return Tsk.countDocuments({ completed:'false' })
// }).then((res) =>{
//     console.log("2nd .then result: ",res)
// }).catch((e) => {
//     console.log(e, 'error bro')
// })

const deleteTaskAndCount = async (id) => {
    const tsks = await Tsk.findByIdAndDelete(id)
    const count = await Tsk.countDocuments({completed :'true'})
    return { count, tsks }
}

deleteTaskAndCount('5faa9525ba57bee5387c28a1').then((res) => {
    console.log('Result:', res)
}).catch((e) =>{
    console.log(e)
})