const router = require('express').Router()
const userRoutes = require('./users')
const portofolioRoutes = require('./portofolios')
const imageRoutes = require('./images')

router.use('/users', userRoutes)
router.use('/portofolios', portofolioRoutes)
router.use('/upload', imageRoutes)

module.exports = router