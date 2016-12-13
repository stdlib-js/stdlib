'use strict';

var create = require( './../lib' );

var opts = {
	'name': '@stdlib/math/base/special/erf',
	'desc': 'Error function.',
	'keywords': [
		'math',
		'mathematics',
		'error',
		'function',
		'erf'
	],
	'cmd': 'erf',
	'bin': './bin/cli'
};

var pkg = create( opts );
console.dir( pkg );
