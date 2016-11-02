'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var prefix = require( './stdlib.js' );
var readFileSync = require( prefix+'@stdlib/fs/read-file' ).sync;


// MAIN //

var template = resolve( __dirname, '..', 'static/index.html' );
template = readFileSync( template, {
	'encoding': 'utf8'
});


// EXPORTS //

module.exports = template;
