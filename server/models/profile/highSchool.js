const mongoose = require('mongoose');
const {Schema} = mongoose
const HighSchoolDataSchema = new Schema({
    name: String ,
    dateJoin: String ,
    dateGraduate: String,
    description: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

const HighSchoolData = mongoose.model('HighSchoolData', HighSchoolDataSchema)
module.exports = HighSchoolData