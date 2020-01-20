const mongoose = require('mongoose');
const {Schema} = mongoose
const AfterHighSchoolDataSchema = new Schema({
    name: String,
    dateJoin: String ,
    dateGraduate: String,
    faculty: String,
    major: String,
    degree: String,
    description: String,
    userId: {type: Schema.Types.ObjectId, ref: 'UserId'}
})

const AfterHighSchoolData = mongoose.model('AfterHighSchoolData', AfterHighSchoolDataSchema)
module.exports = AfterHighSchoolData