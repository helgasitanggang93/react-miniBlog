const router = require('express').Router()
const PortofolioController = require('../controllers/portofolioController')
const {authorizationPortofolio} = require('../middlewares/authorization')
const {authenticationUser, authenticationCommon} = require('../middlewares/authenticationProfile')

router.post('/', authenticationUser, PortofolioController.create)
router.get('/', PortofolioController.readAll)
router.get('/:id', authenticationUser, PortofolioController.readOne)
router.delete('/:id', authenticationCommon, authorizationPortofolio, PortofolioController.delete)
router.patch('/:id', authenticationCommon, authorizationPortofolio, PortofolioController.update)

module.exports = router