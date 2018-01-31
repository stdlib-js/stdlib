'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// MAIN //

var fpath = resolve( __dirname, '../static/styles.css' );
var styles = readFileSync( fpath, {
	'encoding': 'utf8'
});


// EXPORTS //

module.exports = styles;
