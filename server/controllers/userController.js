const User = require('../models/userModel');
const {compare} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt') 

class UserController {

    static signUp(req, res, next) {
        
        const {fullName, email, password} = req.body

        User
        .create({
            fullName,
            email,
            password
        })
        .then(() => {
            res.status(201).json({message:'register success'})
        })
        .catch(next)
    }

    static login(req, res, next) {
        const {email, password} = req.body

        User
        .findOne({email})
        .then( data => {
            if(!data || !compare(password, data.password)){

                throw {status: 400, message: 'email/password incorect'}

            }else{
                const {email} = data
                const token = sign({email})
                res.status(200).json({token})
            }
        })
        .catch(next)
    }

    static updatePersonalData(req, res, next){
        const {userId} = req.body
        const {
            fullName, 
            dateOfBirth, 
            image, 
            phoneNumber} = req.body
        
        let obj = {
            fullName,
            dateOfBirth,
            image,
            phoneNumber
        }

        for (const key in obj) {
           if(obj[key] === undefined){
               delete obj[key]
           }
        }

        User
        .findOneAndUpdate({_id: userId}, obj)
        .then(() => {

            return User.findOne({_id: userId})

        })
        .then(data => {
            const {_id, 
                fullName, 
                email, 
                image, 
                dateOfBirth } = data
            res.status(201).json({
                _id,
                fullName,
                email,
                image,
                dateOfBirth
            })
            
        })
        .catch(next)
    }

    static readOnePersonalData(req, res, next) {
        const {userId} = req.body
        User
        .findOne({_id: userId})
        .then(data => {
            if(data){
                const {_id, 
                    fullName, 
                    email, 
                    image, 
                    dateOfBirth } = data
                res.status(200).json({
                    _id,
                    fullName,
                    email,
                    image,
                    dateOfBirth
                })
            }else {
                throw {status: 404}
            }
        })
        .catch(next)
    }
}

module.exports = UserController