
var templates = require('duality/templates'),
	session = require('session');

session.on("change", function (userCtx, req) {
	/*
	console.log("in events...");
	return $("#session-menu").html(templates.render("session_menu.html", req, { userCtx : userCtx }
	));
*/
});

