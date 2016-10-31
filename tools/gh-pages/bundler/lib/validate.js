'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {};
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options +
			'`.' );
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
