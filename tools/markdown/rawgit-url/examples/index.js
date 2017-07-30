'use strict';

var rawgit = require( './../lib' );

var opts = {
	'cdn': true,
	'slug': 'stdlib-js/stdlib/38a27c972e29874f1bcd32b94ba4c5cfb283ca61',
	'file': 'README.md'
};

var url = rawgit( opts );

console.log( url );
// returns 'https://cdn.rawgit.com/stdlib-js/stdlib/38a27c972e29874f1bcd32b94ba4c5cfb283ca61/README.md'
