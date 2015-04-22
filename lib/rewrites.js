module.exports = [
	{ from : '/static/*', to : 'static/*' },
	{ from : '/welcome' , to : '_show/welcome' },
	{ from : '/welcome*' , to : '_show/welcome*' },
	{ from : '/welcome.html', to : '_show/welcome' },
	{ from : '/simple', to : '_view/simple' },
	{ from : '/simple*', to : '_view/simple*'},
	{ from : '/', to : '_show/welcome' },
	{ from : '*', to : '_show/not_found' }
];