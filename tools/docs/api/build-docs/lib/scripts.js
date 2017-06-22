'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// VARIABLES //

var dir = resolve( __dirname, '..', 'static', 'js' );

// Note: order matters, as the scripts are inserted in order into the HTML document.
var files = [
	'script.js'
];


// MAIN //

/**
* Returns an array of script elements.
*
* @private
* @returns {StringArray} elements
*/
function scripts() {
	var script;
	var opts;
	var out;
	var i;

	opts = {
		'encoding': 'utf8'
	};
	out = new Array( files.length );
	for ( i = 0; i < files.length; i++ ) {
		script = readFileSync( join( dir, files[i] ), opts );
		out[ i ] = '<script type="text/javascript">' + script + '</script>';
	}
	return out;
} // end FUNCTION scripts()


// EXPORTS //

module.exports = scripts();
