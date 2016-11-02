'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var hasOwnProp = require( prefix+'@stdlib/utils/has-own-property' );
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.out] - output filename
* @param {string} [options.pattern] - glob pattern
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'pattern': 'beep*.js'
* };
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
	if ( hasOwnProp( options, 'out' ) ) {
		opts.out = options.out;
		if ( !isString( opts.out ) ) {
			return new TypeError( 'invalid option. `out` option must be a string. Option: `'+opts.out+'`.' );
		}
	}
	if ( hasOwnProp( options, 'pattern' ) ) {
		opts.pattern = options.pattern;
		if ( !isString( opts.pattern ) ) {
			return new TypeError( 'invalid option. `pattern` option must be a string. Option: `'+opts.pattern+'`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
