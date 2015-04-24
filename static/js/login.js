var session = require('session');

$("#login_form").submit(function (ev) {
	ev.preventDefault();
	var username = $('input[name="username"]', this).val();
	var password = $('input[name="password"]', this).val();

	if (username && password) {
		session.login(username, password, function(err, info) {
			if (err) {
				$("#login_errors").html(err.toString());
			}
		});
	}
});
