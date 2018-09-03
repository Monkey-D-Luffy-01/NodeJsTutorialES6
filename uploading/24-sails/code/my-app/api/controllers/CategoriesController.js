/**
 * CategoriesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  categoriesPage:  async (req, res) => {   	  	
  	try {
  		let categories = await Categories.find({});
  		console.log(`categories = ${JSON.stringify(categories)}`);
  		res.view('pages/categoriesPage', { categories });	
  	} catch(error) {
  		res.send(500, {
  			error: `Database error: ${error}`
  		});
  	}
  
  },  
};