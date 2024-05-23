const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

// to create a schema ony 
const userSchema= new mongoose.Schema({

    name : {
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
},{ 
    // to create a timestamps for each rwo in table. 
    timestamps: true,
})

userSchema.pre('save', async function (next){
    const salt  = await bcryptjs.genSalt(10)
    console.log(this)
    this.password = await bcryptjs.hash(this.password ,salt)
    next()
})

// then we can export it in the controllres so we can check other methods like find etc..
const User = mongoose.model('User',userSchema)

module.exports = User