'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var transform = require( './transform.js' );
var config = require( './config.json' );
var validate = require( './validate.js' );
var getRoot = require( './root.js' );


// LS //

/**
* Synchronously generates a list of stdlib module names.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for modules
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {StringArray} list of names
*
* @example
* var names = ls();
* // returns [...]
*/
function ls( options ) {
	var names;
	var opts;
	var err;
	opts = {};
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	opts = {
		'cwd': getRoot( opts.dir || '' ),
		'realpath': true // return absolute file paths
	};
	names = glob( config.pattern, opts );
	return transform( names );
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
