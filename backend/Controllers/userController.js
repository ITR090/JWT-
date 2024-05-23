const cookie = require('cookie-parser')
const bcryptjs = require('bcryptjs')

const create_token = require('../Utils/generateToken')
// modules
const User = require('../Models/User')

// login
//  user/auth/login
const loginUser =async(req,res)=>{
    try {
        const { email, password } = await req.body; 
        const user = await User.findOne({email})
        //console.log(user)
        if(user && user!== null){
            const storedHashedPassword = user.password;
            const isPasswordValid = await bcryptjs.compare(password, storedHashedPassword) 
            if(isPasswordValid){
                const token =create_token.createTonken(user._id)  
                res.status(200).json({ 
                    token:token,
                    email,
                 });
                 return
            }else{
                //res.status(401).json({ error: 'Invalid credentials' });
                throw Error('Invalid credentials')
            }           
        }
        throw Error('Invalid credentials')

    } catch (error) {
        res.status(401).json({ error: error.message });
        return
    }
}

// register user
// user/auth/register
const registerUser = async (req,res)=>{
    try {
        const { name, email, password } = await req.body;
        const isUserExists = await User.findOne({email})
        if(!isUserExists){
            const newUser = new User({name, email, password})
            const results = await newUser.save()
            if(results){
              const token =create_token.createTonken(results._id)  
              res.status(201).json({
                   user_id:results._id,
                   name:results.name,
                   email:results.email,
                   token:token
                })
                return
            }
            throw new Error('invalid user data')
            // res.status(201).json({user_id:results._id,name:results.name,email:results.email})
        }
        throw new Error('Email already exists')
        //res.status(400).json({message:"Email already exists"})
        //return;

    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
        return
    }
}

// logout  user
// user/auth/logout
const logoutUser =(req,res)=>{
    res.status(200).json('logout user')
    return
}

// get user
// user/auth/inquiry
const getUser =(req,res)=>{
    const { _id , name, email } = req.user
    res.status(200).json({
        _id,
        name,
        email
    })
    return
}

// update  user info
// user/auth/updateInfo
const updateUserInfo = async (req,res)=>{

    try {
        const {name, email} =req.body
        const {_id} = req.user
        const update_user =  await User.findByIdAndUpdate(_id,{name,email})
        if(update_user){
            res.status(200).json('update user info')
            return
        }else{
            throw new Error('Error from Server')
        }
    } catch (error) {
        res.status(500).json({message:error.message})
        return
    }
}

module.exports ={
    loginUser,
    registerUser,
    logoutUser,
    updateUserInfo,
    getUser
}