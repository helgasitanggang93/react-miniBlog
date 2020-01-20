const mongoose = require('mongoose');
const {Schema} = mongoose

const PortofolioDataSchema = new Schema({
    name: String,
    dateBegin: String,
    dateFinish: String,
    stack: String,
    image: String,
    description: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

PortofolioDataSchema.post('save', function (doc, next) {
    next()
})

const PortofolioData = mongoose.model('PortofolioData', PortofolioDataSchema)
module.exports = PortofolioData