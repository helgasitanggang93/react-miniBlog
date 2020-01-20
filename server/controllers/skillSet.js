const SkillData = require('../models/profile/skillData');

class SkillDataController {

    static create(req, res){
        const {userId} = req.body
        const {name,
            dateBegin,
            dateFinish,
            role,
            image,
            description} = req.body

        SkillData
        .create({
            userId,
            name,
            dateBegin,
            dateFinish,
            role,
            image,
            description
        })
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }

    static readAll(req, res) {
        
        SkillData
        .find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(401).json(err)
        })
    }

    static readAllAdmin(req, res) {
        
        const {userId} = req.body

        SkillData
        .find({_id: userId})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(401).json(err)
        })
    }

    static readOne(req, res){
        const {id} = req.params

        SkillData
        .findOne({_id: id})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(401).json(err)
        })
    }

    static update(res, req){
        const {id} = req.params
        const {name,
            dateBegin,
            dateFinish,
            role,
            image,
            description} = req.body
        
        let obj = {
            name,
            dateBegin,
            dateFinish,
            role,
            image,
            description
        }

        for (const key in obj) {
            if (obj[key] === undefined) {
                delete obj[key] 
            }
        }

       SkillData
       .findOneAndUpdate({_id: id}, obj)
       .then(() => {
           return SkillData.findOne({_id: id})
       })
       .then(data => {
           res.status(200).json(data)
       })
       .catch(err => {
           res.status(401).json(err)
       })

    }
}

module.exports = SkillDataController