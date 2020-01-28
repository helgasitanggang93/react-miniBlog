const router = require('express').Router()
const upload = require('../middlewares/imagesHandler')
const ImageController = require('../controllers/images')

router.post('/', upload.single('image'), ImageController.imageUpload)

module.exports = router