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

        Portofolio.create({
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

    static update(res, req){
        const {userId} = req.body
        const {portofolioid} = req.params

        Portofolio.findOneAndUpdate()
    }

}

module.exports = PortofolioController