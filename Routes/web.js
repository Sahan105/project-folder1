const express = require('express');
const router = express.Router();
const homeController=require('../app/http/controller/homeController');
const authController = require('../app/http/controller/authController');
const cartController= require('../app/http/controller/Customers/cartController');

router.get('/', homeController().index);
router.get('/login',authController().login);
router.get('/register', authController().register);
router.get('/cart',cartController().index);


module.exports = router;