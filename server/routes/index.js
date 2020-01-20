const router = require('express').Router()
const UserController = require('../controllers/userController')
const PortofolioController = require('../controllers/portofolioController')
const {getUserId} = require('../middlewares/authenticationProfile')

router.post('/users/signup', UserController.signUp);
router.post('/users/login', UserController.login);
router.patch('/users/personaldata', getUserId, UserController.updatePersonalData);
router.get('/users/personaldata', getUserId, UserController.readOnePersonalData);

router.post('/portofolio', getUserId, PortofolioController.create);
module.exports = router