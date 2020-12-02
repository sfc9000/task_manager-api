const mongoose = require ('mongoose')
const validator = require ('validator')

const User = mongoose.model('User', {
    name:{
            type:String,
            required:true, 
            trim:true
    },
    age:{
            type:Number,
            trim:true
    },
    password: {
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value) {
            if(!validator.isAlphanumeric(value)
              || value.toLowerCase().includes('password'))
             {
                    throw new Error ('Password criteria do not match, please try again')
             }
        }
    }

})

// const newUserr = new User({
//     name:'  ADAI 9000  ',
//     age:20,
//     password:'PAssord1213'

// })

// newUserr.save().then(() => {
//     console.log(`Bro result: ${newUserr}`)
// }).catch((error) => {
//     console.log(`Bro, Error bro ${error}`)
// })


module.exports = User