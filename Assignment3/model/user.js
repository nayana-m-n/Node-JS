const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('user',{
    name:{
        type : String,
        required : true,
        trim:true
    },
    age :{
        type :Number,
        required : true,
        validate(value){
            if(value<0){
                throw new Error('Age must be positive')
            }
        }
    },
    email :{
        type:String,
        required:true,
        trim:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    }
})

module.exports=User