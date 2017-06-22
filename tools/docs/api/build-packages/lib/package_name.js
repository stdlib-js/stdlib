'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;


// VARIABLES //

var root = resolve( __dirname, './../../../../../lib/node_modules/' ); // eslint-disable-line no-redeclare


// MAIN //

/**
* Extract a package name from package directory path.
*
* @private
* @param {string} dpath - package path
* @returns {string} package name
*/
function packageName( dpath ) {
	if ( dpath.length < root.length ) {
		return '@stdlib/stdlib';
	}
	return dpath.substring( root.length+1 );
} // end FUNCTION packageName()


// EXPORTS //

module.exports = packageName;
