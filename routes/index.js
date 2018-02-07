var express = require('express');
var router = express.Router();
var path = require('path');
var serverMysql = require('./servers.js');

//Get images from the public/images directory
router.use('/images', express.static(__dirname+'/uploads/'));
 
//Get All Clients
router.get('/clients', function(req,res){
  fetchAllClients(req,res);  
});

//Get Single Client by ID
router.get('/clients/:id', function(req,res){
  fetchSingleClient(req,res);  
});

//Get Client Product association
router.get('/clientproduct', function(req,res){
  fetchAllClientProduct(req,res);  
});

//Get Single Client Product association
router.get('/clientproduct/:id', function(req,res){
  fetchSingleClientProduct(req,res);  
});

//Get All Products information
router.get('/products', function(req,res){
  fetchAllProducts(req,res);  
});

//Get Single Product information
router.get('/products/:id', function(req,res){
  fetchSingleProduct(req,res);  
});

module.exports = router;