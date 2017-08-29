'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// MAIN //

var fpath = resolve( __dirname, '..', 'static', 'img', 'logo.svg' );
var opts = {
	'encoding': 'utf8'
};
var logo = readFileSync( fpath, opts );


// EXPORTS //

module.exports = logo;
