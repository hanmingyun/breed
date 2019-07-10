const router = require('express').Router();

const BreedController = require('../controllers/BreedController');

router.get('/breeds/list/all', BreedController.listAll);
router.get('/breeds/image/random', BreedController.getRandomImage);
router.get('/breeds/image/random/:num', BreedController.getMultipleRandomImages);
router.get('/breeds/:category/images', BreedController.getByCategory);
router.get('/breeds/:category/images/random', BreedController.getRandomByCategory);
router.get('/breeds/:category/images/random/:num', BreedController.getMultipleByCategory);
router.get('/breed/:category/list', BreedController.getAllSubCategory);
router.get('/breed/:category/:sub/images', BreedController.getSubCategoryBreedImages);
router.get('/breed/:category/:sub/images/random', BreedController.getRandomSubCategoryBreedImages);
router.get('/breed/:category/:sub/images/random/:num', BreedController.getMultipleSubCategoryBreedImages);
router.get('/breed/:sub/images/random/', BreedController.getRandomBySubCategory);
// router.get('/update/:id', customerController.edit);
// router.post('/update/:id', customerController.update);
// router.get('/delete/:id', customerController.delete);

module.exports = router;

