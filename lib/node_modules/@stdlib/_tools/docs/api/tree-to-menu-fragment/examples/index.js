'use strict';

var menu = require( './../lib' );

var obj = {
	'fs': {
		'__namespace__': true,
		'read-file': true,
		'read-dir': true
	},
	'math': {
		'base': {
			'blas': {
				'dasum': true,
				'daxpy': true
			},
			'special': {
				'abs': true,
				'asin': true
			},
			'utils': {
				'is-nan': true
			},
			'__namespace__': true
		},
		'__namespace__': true
	},
	'stdlib': true,
	'repl': true,
	'namespace': true
};

var html = menu( obj, {
	'title': 'stdlib',
	'url': '/',
	'mount': '/develop/'
});
console.log( html );
