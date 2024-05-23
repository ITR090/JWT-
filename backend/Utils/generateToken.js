const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const createTonken = (id)=>{
   const token = jwt.sign({id},secret)
   return token
}

module.exports = {
    createTonken
}