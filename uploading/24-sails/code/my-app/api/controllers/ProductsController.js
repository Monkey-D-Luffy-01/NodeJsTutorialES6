/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//Use res.json
module.exports = {
  findAll:  async (req, res) => {   	  	
  	try {
  		const products = await Products.find({});  		
      	res.json({
      		result: "ok",
      		message: "Query all products successfully",
      		data: products
      	});
  	} catch(error) {  		
  		res.json({
  			result: "failed",
  			message: `Query all products error: ${error}`
  		});
  	}  
  },   
  filterProducts:  async (req, res) => {   	  	
  	try {
  		const {nameContains} = req.params;
  		const products = await Products.find({ "productName": { 
  			$regex: nameContains, $options: 'i' 
  		} });  		
      	res.json({
      		result: "ok",
      		message: "Filter products successfully",
      		data: products
      	});
  	} catch(error) {  		
  		res.json({
  			result: "failed",  			
  			message: `Filter products error: ${error}`
  		});
  	}
  },   

  addProduct:  async (req, res) => {   	  	
  	try {
  		console.log("addProduct");
  		const {productName, imageURL, categoryID, unit, price} = req.body;  		
  		const newProduct = await Products.create({productName, imageURL, categoryID, unit, price});
  		res.json({
      		result: "ok",
      		message: "Create new Product successfully",
      		data: newProduct
      	});
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Create new Product failed: ${error}`
  		});
  	}  
  }, 

  deleteProduct:  async (req, res) => {   	  	
  	try {
  		const {id} = req.params;  		
  		await Products.destroy({id});
  		res.json({
      		result: "ok",
      		message: "Delete successfully",
      		data: {}
      	});
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Delete a product failed: ${error}`
  		});
  	}  
  }, 

  updateProduct:  async (req, res) => {//Open "Edit Product form"   	  	
  	try {
  		const {id} = req.params; 
  		const {productName, imageURL, categoryID, unit, price} = req.body;  		  		
      	//console.log(`aa112: ${id}, productName = ${productName}, description = ${description}`);
      	const foundProduct = await Products.find({id});  		
      	if (!foundProduct) {
      			res.json({
  				result: "failed",  			
  				message: `Cannot find Product to update`
  			});
      	}
  		const product = await Products.update({id}, {
  			productName: productName ? productName : foundProduct.productName, 
  			imageURL: imageURL ? imageURL : foundProduct.imageURL, 
  			categoryID: categoryID ? categoryID : foundProduct.categoryID, 
  			unit: unit ? unit : foundProduct.unit, 
  			price: price ? price : foundProduct.price 
  		});
  		
  	} catch(error) {
  		res.json({
  			result: "failed",  			
  			message: `Update a product failed: ${error}`
  		});
  	}  
  }, 
};
