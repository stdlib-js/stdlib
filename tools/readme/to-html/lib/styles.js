'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;


// VARIABLES //

var dir = resolve( __dirname, '../static/css' );

// Note: order matters, as the stylesheets are inserted in order into the HTML document.
var files = [
	'reset.css',
	'normalize.css',
	'layout.css',
	'typography.css',
	'highlight.css',
	'misc.css'
];


// MAIN //

/**
* Returns an array of stylesheet elements.
*
* @private
* @returns {StringArray} elements
*/
function styles() {
	var rules;
	var opts;
	var out;
	var i;

	opts = {
		'encoding': 'utf8'
	};
	out = new Array( files.length );
	for ( i = 0; i < files.length; i++ ) {
		rules = readFileSync( join( dir, files[i] ), opts );
		out[ i ] = '<style>' + rules + '</style>';
	}
	return out;
}


// EXPORTS //

module.exports = styles();
