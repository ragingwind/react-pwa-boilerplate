if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js').then(function (reg) {
		console.log('Registration succeeded. Scope is ' + reg.scope);
	}).catch(function (err) {
		console.log('Registration failed with ' + err);
	});
}
