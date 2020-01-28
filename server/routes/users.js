const router = require('express').Router()
const UserController = require('../controllers/userController')
const {authenticationUser} = require('../middlewares/authenticationProfile')


router.post('/signup', UserController.signUp);
router.post('/login', UserController.login);
router.patch('/personaldata', authenticationUser, UserController.updatePersonalData);
router.get('/personaldata', authenticationUser, UserController.readOnePersonalData);

module.exports = router