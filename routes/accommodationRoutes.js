const express = require('express');
const router = express.Router();
const accommodationController = require('../controllers/accommodationController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/',authMiddleware,  accommodationController.createAccommodation);
router.get('/', authMiddleware, accommodationController.getAccommodations);
router.get('/:id',authMiddleware,  accommodationController.getAccommodationById);
router.put('/:id',authMiddleware,  accommodationController.updateAccommodation);
router.delete('/:id',authMiddleware,  accommodationController.deleteAccommodation);

module.exports = router;
