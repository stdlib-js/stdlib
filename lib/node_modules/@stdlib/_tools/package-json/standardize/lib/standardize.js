'use strict';

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var KEYS = require( './keys.json' );


// MAIN //

/**
* Standardizes a `package.json` object.
*
* ## Notes
*
* * The implementation relies on engines using insertion order for key ordering. This is __not__ specified by the ECMAScript specification; however, most engines order keys according to insertion order.
*
*
* @param {Object} pkg - `package.json` object
* @param {StringArray} [keys] - a list of keys in which the list order specifies insertion order
* @throws {TypeError} first argument must be an object
* @throws {TypeError} second argument must be an array of strings
* @returns {Object} standardized object
*
* @example
* var pkg = {'license':'MIT','name':'beep'};
*
* var out = standardize( pkg );
* // returns {'name':'beep','license':'MIT'}
*/
function standardize( pkg, keys ) {
	var out;
	var key;
	var k;
	var i;

	if ( !isObject( pkg ) ) {
		throw new TypeError( 'invalid input argument. First argument must be an object. Value: `'+pkg+'`.' );
	}
	if ( arguments.length > 1 ) {
		k = keys;
		if ( !isStringArray( k ) ) {
			throw new TypeError( 'invalid input argument. Second argument must be an array of strings. Value: `'+k+'`.' );
		}
	} else {
		k = KEYS;
	}
	out = {};
	for ( i = 0; i < k.length; i++ ) {
		key = k[ i ];
		if ( hasOwnProp( pkg, key ) ) {
			out[ key ] = pkg[ key ];
		}
	}
	return out;
} // end FUNCTION standardize()


// EXPORTS //

module.exports = standardize;
