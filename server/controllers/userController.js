const User = require('../models/userModel');
const {compare} = require('../helpers/bcrypt')
const {sign} = require('../helpers/jwt') 

class UserController {

    static signUp(req, res) {
        
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
        .catch(({errors}) => {
            const {email, name, password} = errors

            if(email){
                res.status(400).json({message: email.message})
            }else if(name){
                res.status(400).json({message : name.message})
            }else if(password){
                res.status(400).json({message: password.message})
            }else {
                res.status(400).json(errors)
            }
        })
    }

    static login(req, res) {
        const {email, password} = req.body

        User
        .findOne({email})
        .then( data => {
            if(!data || !compare(password, data.password)){

                throw 'email/password incorect'

            }else{
                const {email} = data
                const token = sign({email})
                res.status(200).json({token})
            }
        })
        .catch(errors => {

            res.status(401).json({message: errors})
        })
    }

    static updatePersonalData(req, res){
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

            res.status(201).json(data)
            
        })
        .catch(err => {
            res.status(401).json(err)
        })
    }

    static readOnePersonalData(req, res) {
        const {userId} = req.body
        User
        .findOne({_id: userId})
        .then(data => {
            res.status(200).json({
                _id: data._id,
                fullName: data.fullName,
                phoneNumber: data.phoneNumber,
                dateOfBirth: data.dateOfBirth,
                image: data.image
            })
            .catch(err => {
                res.status(401).json(err)
            })
        })
    }
}

module.exports = UserController