'use strict';

// MODULES //

var pkgNames = require( './../../pkg-names' ).sync;
var filter = require( './filter.js' );
var validate = require( './validate.js' );


// SYNC //

/**
* Synchronously lists namespaces.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for namespaces
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
	names = pkgNames( opts );
	return filter( names );
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
