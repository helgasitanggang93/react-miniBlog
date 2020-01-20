const Portofolio = require('../models/profile/portofolio');
const User = require('../models/userModel')
const {verify} = require('../helpers/jwt');

const authorizationPortofolio = (req, res, next) => {
    if(req.headers.hasOwnProperty('token')){
       let payload = verify(req.headers.token, process.env.SECRET)
       let {email} = payload
       const {id} = req.params
       let promiseUser = User.findOne({email: email})
       let promisePortofolio = Portofolio.findOne({_id: id})
       Promise
       .all([promiseUser, promisePortofolio])
       .then(values => {
           console.log(values)
       })
    }else {
        res.status(401).json({message: 'not authorize'})
    }
}

module.exports = {
    authorizationPortofolio
}