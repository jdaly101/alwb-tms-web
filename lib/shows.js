var templates = require('duality/templates'),
	fields = require('couchtypes/fields'),
	Form = require('couchtypes/forms').Form,
	session = require('session');

exports.welcome = function (doc, req) {
	return {
		title: "Welcome",
		content : templates.render('welcome.html', req, {
			user : req.userCtx.name,
			foo : "bar"
		})
	};
};

exports.not_found = function (doc, req) {
	return {
		title : '404 - Not Found',
		content : templates.render('404.html', req, {})
	};
};