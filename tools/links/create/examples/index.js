'use strict';

var create = require( './../lib' );

var opts = {
	'uri': 'http://stdlib.io/',
	'id': 'stdlib',
	'description': 'A standard library for JavaScript and Node.js.',
	'keywords': [
		'standard',
		'library',
		'lib',
		'stdlib',
		'javascript',
		'js',
		'node.js',
		'nodejs',
		'node-js',
		'node'
	]
};

function done( error ) {
	if ( error ) {
		throw error;
	}
	console.log( 'Success!' );
}

create( opts, done );
