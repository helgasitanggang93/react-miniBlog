const AfterHighSchool = require('../models/profile/afterHighSchool');

class AfterHighSchool {

    static create(req, res){
        const {userId} = req.body
        const {name,
            dateJoin,
            dateGraduate,
            faculty,
            major,
            degree,
            description} = req.body

        AfterHighSchool
        .create({
            userId,
            name,
            dateJoin,
            dateGraduate,
            faculty,
            major,
            degree,
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
        
        AfterHighSchool
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

        AfterHighSchool
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

        AfterHighSchool
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
            faculty,
            major,
            degree,
            description} = req.body
        
        let obj = {
            name,
            dateJoin,
            dateGraduate,
            faculty,
            major,
            degree,
            description
        }

        for (const key in obj) {
            if (obj[key] === undefined) {
                delete obj[key] 
            }
        }

       AfterHighSchool
       .findOneAndUpdate({_id: id}, obj)
       .then(() => {
           return AfterHighSchool.findOne({_id: id})
       })
       .then(data => {
           res.status(200).json(data)
       })
       .catch(err => {
           res.status(401).json(err)
       })

    }

    static delete(req, res , next) {
        const {id} = req.params

         AfterHighSchool
         .findOneAndDelete({_id: id})
         .then(data => {
            res.status(201).json(data)
         })
         .catch(next)

    }

}

module.exports = AfterHighSchool