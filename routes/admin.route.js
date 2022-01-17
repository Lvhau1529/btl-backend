// const multer = require('multer');
// const sharp = require('sharp');
// const uuidv4  = require('uuid/v4');
// const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

router.get('/', adminController.index);

router.get('/v2', adminController.index2);

router.get('/', adminController.product);

router.get('/create', adminController.create);

router.get('/create/products', adminController.createProducts);

router.get('/create/products2', adminController.createProducts2);

router.get('/create/types', adminController.createTypes);

router.get('/create/types2', adminController.createTypes2);

router.get('/create/kinds', adminController.createKinds);

router.get('/create/kinds2', adminController.createKinds2);

router.get('/views', adminController.viewsProduct);

router.get('/views2', adminController.viewsProduct2);

router.get('/news', adminController.viewNews);

router.get('/news2', adminController.viewNews2);

router.get('/news/add', adminController.addNews);

router.get('/news2/add', adminController.addNews2);

router.get('/news/delete=:id', adminController.deleteNews);

router.get('/news2/delete=:id', adminController.deleteNews2);

router.get('/views/delete=:id', adminController.deleteProduct);

router.get('/views2/delete=:id', adminController.deleteProduct2);

router.get('/create/delete=:id', adminController.deleteTypes);

router.get('/create/delete=:id', adminController.deleteKinds);

router.get('/views/update=:id', adminController.updateProduct);

router.get('/views2/update=:id', adminController.updateProduct2);

router.get('/users', adminController.user);

router.get('/users2', adminController.user2);

router.get('/users/delete=:id', adminController.deleteUser);

router.get('/users2/delete=:id', adminController.deleteUser2);

router.post('/news/add', adminController.postNew);

router.post('/news2/add', adminController.postNew2);

router.post('/create/products',adminController.postCreateProducts);

router.post('/create/products2',adminController.postCreateProducts2);

router.post('/views/update=:id', adminController.post_Update);

router.post('/views2/update=:id', adminController.post_Update2);

module.exports = router;