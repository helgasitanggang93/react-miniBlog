const router = require('express').Router()
const userRoutes = require('./users')

router.use('/users', userRoutes)

router.post('/portofolio', authenticationUser, PortofolioController.create);
router.get('/portofolio', authenticationUser, PortofolioController.readAll)
router.patch('/portofolio/:id', authenticationCommon, authorizationPortofolio, PortofolioController.create);
module.exports = router