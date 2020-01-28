const Portofolio = require('../models/profile/portofolio')

class PortofolioController {

    static create(req, res, next){
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
        .catch(next)
    }

    static readAll(req, res, next) {
        
        Portofolio
        .find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static readAllAdmin(req, res, next) {
        
        const {userId} = req.body

        Portofolio
        .find({_id: userId})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
    }

    static readOne(req, res, next){
        const {id} = req.params

        Portofolio
        .findOne({_id: id})
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                throw {status: 404}
            }
        })
        .catch(next)
    }

    static update(req, res, next){
        const {id} = req.params
        console.log(req.body)
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
   
    if(Object.keys(obj).length === 0){

        next({status: 401})

    }else{

       Portofolio
       .findOneAndUpdate({_id: id}, obj)
       .then(() => {
           
           return Portofolio.findOne({_id: id})
       })
       .then(data => {
           res.status(200).json(data)
       })
       .catch(next)
    

    }
    }

    static delete(req, res , next) {
        const {id} = req.params

         Portofolio
         .findOneAndDelete({_id: id})
         .then(data => {
            res.status(201).json(data)
         })
         .catch(next)

    }

}

module.exports = PortofolioController