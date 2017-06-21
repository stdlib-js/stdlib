'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// MAIN //

var fpath = resolve( __dirname, '..', 'static', 'head.html' );
var opts = {
	'encoding': 'utf8'
};
var head = readFileSync( fpath, opts );


// EXPORTS //

module.exports = head;
