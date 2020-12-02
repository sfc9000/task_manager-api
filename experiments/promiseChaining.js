require('../src/db/mongoose')
const Use = require ('../src/models/user')

Use.findByIdAndUpdate('5faa9515ba57bee5387c28a0', {age : 21}).then((usr) =>{
console.log(usr)
return Use.countDocuments({ age: 21})
}).then((res) => {
    console.log(res)
}).catch((e) => { 
    console.log(e)
})