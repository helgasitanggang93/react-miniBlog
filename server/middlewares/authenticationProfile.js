const {verify} = require('../helpers/jwt');
const User = require('../models/userModel');

const authenticationUser = (req, res, next) => {
    try {
        if(req.headers.hasOwnProperty('token')){
            let payload = verify(req.headers.token, process.env.SECRET);
            User.findOne({email: payload.email})
            .then(data => {
                if(data){
                    req.body.userId = data._id
                    next()
                }else {
                   throw 'WRONG USER'
                }
            })
            .catch(err => {
               throw err
            })
    
        }else {
            // res.status(401).json({message: 'NOT AUTHENTICATION'})
            throw 'NOT AUTHENTICATION'
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
   
}

const authenticationCommon = (req, res, next) => {
    try {
        if(req.headers.hasOwnProperty('token')){
            let payload = verify(req.headers.token, process.env.SECRET);
            User.findOne({email: payload.email})
            .then(data => {
                if(data){
    
                    next()
    
                }else {
                    throw 'WRONG USER'
                }
            })
            .catch(err => {
               throw err
            })
    
        }else {
            // res.status(401).json({message: 'NOT AUTHENTICATION'})
            throw 'NOT AUTHENTICATION'
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
   
}



module.exports = {
    authenticationUser: authenticationUser,
    authenticationCommon: authenticationCommon
}