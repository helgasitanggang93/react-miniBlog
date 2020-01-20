const mongoose = require('mongoose');
const {Schema} = mongoose

const SocialMediaDataSchema = new Schema({
    nameOfSocialMedia: String,
    accountOfSocialMedia: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

const SocialMediaData = mongoose.model('SocialMediaData', SocialMediaDataSchema)
module.exports = SocialMediaData