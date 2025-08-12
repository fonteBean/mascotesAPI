const mascoteController = require('../controllers/mascoteController');
const express = require('express');
const router= express.Router();

router.get('/mascotes',mascoteController.readAll);
router.get('/mascotes/:id', mascoteController.read);
router.post('/mascotes',mascoteController.create);
router.delete('/mascotes/:id', mascoteController.del);

module.exports = router;