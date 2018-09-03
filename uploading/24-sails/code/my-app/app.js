/**
sails lift
sails generate api products
sails generate api categories

GET /categories
GET /categories/:id
POST /categories
PUT /categories/:id
DELETE /categories/:id
I would recommend to use Postman to test the API

Insert
http://localhost:1337/categories/Create?categoryname=Beverages&description=Soft%20drinks,%20coffees,%20teas,%20beers,%20and%20ales
http://localhost:1337/categories
Install sails-mongo:
npm install sails-mongo
Open datastore.js
Open Categories.js
Install mongodb and Robo3T
brew install mongodb
mongo --port 27017 --host localhost
Config DB in datastore.js


Search bootstrap cdn, paste to layout.ejs
https://getbootstrap.com/docs/4.1/getting-started/introduction/


 */

process.chdir(__dirname);



// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
var sails;
var rc;
try {
  sails = require('sails');
  rc = require('sails/accessible/rc');
} catch (err) {
  console.error('Encountered an error when attempting to require(\'sails\'):');
  console.error(err.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error('locally (`./node_modules/sails`).  To do that, just make sure you\'re');
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error('(It even uses your app directory\'s local Sails install, if possible.)');
  return;
}//-•


// Start server
sails.lift(rc('sails'));
