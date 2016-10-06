'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var dirname = require( prefix+'@stdlib/utils/dirname' );


// TRANSFORM //

/**
* Transforms a raw `package.json` file list.
*
* @private
* @param {StringArray} files - list of `package.json` absolute file paths
* @returns {StringArray} list of packages
*
* @example
* var files = [ '/stdlib/stdlib/lib/node_modules/@stdlib/math/constants/float64-min-safe-integer/package.json' ];
*
* var pkgs = transform( files );
* // returns [ '/stdlib/stdlib/lib/node_modules/@stdlib/math/constants/float64-min-safe-integer' ]
*/
function transform( files ) {
	var out;
	var i;
	out = [];
	for ( i = 0; i < files.length; i++ ) {
		out.push( dirname( files[ i ] ) );
	}
	return out;
} // end FUNCTION transform()


// EXPORTS //

module.exports = transform;
