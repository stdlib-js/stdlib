'use strict';

// MODULES //

var path = require( 'path' );
var prefix = require( './stdlib.js' );


// VARIABLES //

var ROOT = path.resolve( __dirname, prefix );


// ROOT //

/**
* Returns a root directory from which to search for packages.
*
* @private
* @param {string} dir - directory
* @returns {string} root directory from which to search
*/
function getRoot( dir ) {
	// Ensure that we do not enter a parent directory...
	dir = path.resolve( ROOT, dir );
	if ( dir.substring( 0, ROOT.length ) === ROOT ) {
		return dir;
	}
	return ROOT;
} // end FUNCTION getRoot()


// EXPORTS //

module.exports = getRoot;
