const mongoose = require('mongoose');
const {Schema} = mongoose

const SkillDataSchema = new Schema({
    name: String,
    level: String,
    description: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

const SkillData = mongoose.model('SkillData', SkillDataSchema)
module.exports = SkillData