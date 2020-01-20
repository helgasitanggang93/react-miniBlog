const mongoose = require('mongoose');
const {Schema} = mongoose
const {hash} = require('../helpers/bcrypt')

const userSchema = new Schema({
    fullName: {type: String, required: [true, 'Name must be required']},
    dateOfBirth: String,
    image: String,
    phoneNumber: String,
    email: {
        type: String,
        required: [true, 'Email must be required'],
        validate: [{
            validator: (value) => {
                return User.model('User', userSchema)
                .findOne({email: value})
                .then(data =>{
                    if(data){
                        return false
                    }
                    return true
                })
                .catch(err =>{
                    if(err) return false
                })
            },
            message: 'email already registered'
        }, {
            validator: (value) => {
                let regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
                return regex.test(value)
            },
            message : 'Invalid format email'
        }]
    },
    password: {type: String, required: [true, 'Password must be required']}
})

userSchema.pre('save', function (next) {
    this.password = hash(this.password)
    this.image = 'https://res.cloudinary.com/dpnjbs730/image/upload/v1574910240/no_image_yet_fmxurx.jpg'
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User