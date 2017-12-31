'use strict';

function getOpts() {
	var opts = {
		'hostname': 'api.github.com',
		'port': 443,
		'protocol': 'https'
	};
	return opts;
}


// EXPORTS //

module.exports = getOpts;
