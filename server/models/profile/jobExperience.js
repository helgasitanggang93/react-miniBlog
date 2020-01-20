const mongoose = require('mongoose');
const {Schema} = mongoose
const JobExperienceDataSchema = new Schema({
    name: String,
    dateBegin: String,
    dateFinish: String,
    role: String,
    image: String,
    description: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

const JobExperienceData = mongoose.model('JobExperienceData', JobExperienceDataSchema)
module.exports = JobExperienceData