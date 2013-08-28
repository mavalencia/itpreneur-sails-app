/**
 * HomeController
 * 
 * @module :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {

	/**
	 * /home/index
	 */
	index : function(req, res) {
		
		// This will render the view:
		// C:\MikeFiles\node-projects\itpreneur-sails-app/views/home/register.ejs
		Post.create({
			title: 'test title',
			short_desc: "short_desc sample",
			}).done(function(err, post) {

			  // Error handling
			  if (err) {
			    return console.log(err);

			  // The User was created successfully!
			  }else {
				  
			    console.log("User created:", post);
			   
			  }
			});
		
		Post.find({}).done(function(err, post) {

			  // Error handling
			  if (err) {
			    return console.log(err);

			  // The User was created successfully!
			  }else {
				  req.session.retrievepost = post;
                  console.log("Found :", post);
			   
			  }
			});
			

		res.view({posts:req.session.retrievepost});

	},

	/**
	 * /home/register
	 */
	register : function(req, res) {

		// This will render the view:
		// C:\MikeFiles\node-projects\itpreneur-sails-app/views/home/register.ejs
		res.view();

	},

	/**
	 * /home/login
	 */
	login : function(req, res) {

		// This will render the view:
		// C:\MikeFiles\node-projects\itpreneur-sails-app/views/home/login.ejs
		res.view({layout: "nonavlayout"});

	},

	/**
	 * /home/search
	 */
	search : function(req, res) {

		// This will render the view:
		// C:\MikeFiles\node-projects\itpreneur-sails-app/views/home/search.ejs
		res.view();

	}

};
