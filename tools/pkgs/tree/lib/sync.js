'use strict';

// MODULES //

var pkgNames = require( './../../names' ).sync;
var validate = require( './validate.js' );
var tree = require( './tree.js' );


// SYNC //

/**
* Synchronously generates a package tree.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} tree
*
* @example
* var tree = pkgTree();
* // returns {...}
*/
function pkgTree( options ) {
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
	return tree( names );
} // end FUNCTION pkgTree()


// EXPORTS //

module.exports = pkgTree;
