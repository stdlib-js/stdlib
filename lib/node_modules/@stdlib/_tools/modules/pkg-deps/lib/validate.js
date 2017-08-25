'use strict';

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {boolean} [options.builtins] - boolean indicating whether to include built-in packages
* @param {boolean} [options.walk] - boolean indicating whether to walk relative module dependencies
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'builtins': false
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
	if ( hasOwnProp( options, 'builtins' ) ) {
		opts.builtins = options.builtins;
		if ( !isBoolean( opts.builtins ) ) {
			return new TypeError( 'invalid option. `builtins` option must be a primitive boolean. Option: `' + opts.builtins + '`.' );
		}
	}
	if ( hasOwnProp( options, 'walk' ) ) {
		opts.walk = options.walk;
		if ( !isBoolean( opts.walk ) ) {
			return new TypeError( 'invalid option. `walk` option must be a primitive boolean. Option: `' + opts.walk + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
