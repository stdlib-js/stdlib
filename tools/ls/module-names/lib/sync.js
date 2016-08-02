'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var path = require( 'path' );
var stdlib = require( './stdlib.js' );
var transform = require( './transform.js' );
var config = require( './config.json' );


// VARIABLES //

var ROOT = path.resolve( __dirname, stdlib );


// LS //

/**
* Synchronously generates a list of stdlib module names.
*
* @returns {StringArray} list of names
*
* @example
* var names = ls();
* // returns [...]
*/
function ls() {
	var names;
	var opts;
	opts = {
		'cwd': ROOT
	};
	names = glob( config.pattern, opts );
	return transform( names );
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
