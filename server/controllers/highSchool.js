const HighSchool = require('../models/profile/highSchool');

class HighSchoolController {

    static create(req, res){
        const {userId} = req.body
        const {name,
            dateJoin,
            dateGraduate,
            description} = req.body

        HighSchool
        .create({
            userId,
            name,
            dateJoin,
            dateGraduate,
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
        
        HighSchool
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

        HighSchool
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

        HighSchool
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
            dateJoin,
            dateGraduate,
            description} = req.body
        
        let obj = {
            name,
            dateJoin,
            dateGraduate,
            description
        }

        for (const key in obj) {
            if (obj[key] === undefined) {
                delete obj[key] 
            }
        }

       HighSchool
       .findOneAndUpdate({_id: id}, obj)
       .then(() => {
           return HighSchool.findOne({_id: id})
       })
       .then(data => {
           res.status(200).json(data)
       })
       .catch(err => {
           res.status(401).json(err)
       })

    }

}

module.exports = HighSchoolController