module.exports = {
    getUserId : (req, res, next) => {
        const {verify} = require('../helpers/jwt');
        const User = require('../models/userModel');

        if(req.headers.hasOwnProperty('token')){
            let payload = verify(req.headers.token, process.env.SECRET);
            User.findOne({email: payload.email})
            .then(data => {
                if(data){
                    req.body.userId = data._id
                    next()
                }
            })
            .catch(err => {
                res.status(401).json(err)
            })

        }else {
            res.status(401).json({message: 'NOT AUTHENTICATION'})
        }
    }
}