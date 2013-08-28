/**
 * ProfileController
 * 
 * @module :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {

	profilehome : function(req, res) {

		//var currentUser = new Object();

		//req.session.user = currentUser;

		if (req.session.user != null) {
			console.log('Going to Home Page of User');
			res.view();
		} else {
			console.log('Going to Home Page');
			res.redirect('/home');

		}

	},

};
