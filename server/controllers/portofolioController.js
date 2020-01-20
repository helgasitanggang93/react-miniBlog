const Portofolio = require('../models/profile/portofolio')

class PortofolioController {

    static create(req, res){
        const {userId} = req.body
        const {
            name, 
            dateBegin, 
            dateFinish, 
            stack, 
            image,
            description} = req.body

        Portofolio
        .create({
            userId,
            name,
            dateBegin,
            dateFinish,
            stack,
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
        
        Portofolio
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

        Portofolio
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

        Portofolio
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
        const {
            name,
            dateBegin,
            dateFinish,
            stack,
            image,
            description} = req.body
        
        let obj = {
            name,
            dateBegin,
            dateFinish,
            stack,
            image,
            description
        }

        for (const key in obj) {
            if (obj[key] === undefined) {
                delete obj[key] 
            }
        }

       Portofolio
       .findOneAndUpdate({_id: id}, obj)
       .then(() => {
           return Portofolio.findOne({_id: id})
       })
       .then(data => {
           res.status(200).json(data)
       })
       .catch(err => {
           res.status(401).json(err)
       })

    }

}

module.exports = PortofolioController