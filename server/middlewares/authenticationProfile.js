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
                  next({status: 403, message: 'Forbidden Access'})
                }
            })
            .catch(next)
    
        }else {
            // res.status(401).json({message: 'NOT AUTHENTICATION'})
            next ({status:401, message:'Not Authentication'})
        }
        
    } catch (error) {
       next({status: 401, message: 'Not Logged In'})
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
                    next({status: 403, message: 'Forbidden Access'})
                }
            })
            .catch(next)
    
        }else {
            // res.status(401).json({message: 'NOT AUTHENTICATION'})
            next({status: 400, message: 'Not Authentication'})
        }
        
    } catch (error) {
        next({status: 401, message: 'Not Logged In'})
    }
   
}



module.exports = {
    authenticationUser: authenticationUser,
    authenticationCommon: authenticationCommon
}