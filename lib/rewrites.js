module.exports = [
	{ from : '/static/*', to : 'static/*' },
	{ from : '/welcome' , to : '_show/welcome' },
	{ from : '/welcome*' , to : '_show/welcome*' },
	{ from : '/welcome.html', to : '_show/welcome' },
	{ from : '/login', to : '_update/login' },
	{ from : '/simple', to : '_view/simple' },
	{ from : '/simple*', to : '_view/simple*'},
	{ from : '/all', to : '_view/all' },
	{ from : '/all/*', to : '_view/all/*' },
	{ from : '/redirects', to : '_view/redirects' },
	{ from : '/redirects/*', to : '_view/redirects/*' },
	{ from : '/', to : '_show/welcome' },
	{ from : '*', to : '_show/not_found' }
];