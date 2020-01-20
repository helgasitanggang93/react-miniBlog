const router = require('express').Router()
const UserController = require('../controllers/userController')
const PortofolioController = require('../controllers/portofolioController')
const {authenticationUser, authenticationCommon} = require('../middlewares/authenticationProfile')
const {authorizationPortofolio} = require('../middlewares/authorization')

router.post('/users/signup', UserController.signUp);
router.post('/users/login', UserController.login);
router.patch('/users/personaldata', authenticationUser, UserController.updatePersonalData);
router.get('/users/personaldata', authenticationUser, UserController.readOnePersonalData);

router.post('/portofolio', authenticationUser, PortofolioController.create);
router.get('/portofolio', authenticationUser, PortofolioController.readAll)
router.patch('/portofolio/:id', authenticationCommon, authorizationPortofolio, PortofolioController.create);
module.exports = router