'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );
var hasOwnProp = require( prefix+'@stdlib/utils/has-own-property' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isBoolean = require( prefix+'@stdlib/utils/is-boolean' ).isPrimitive;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to resolve packages
* @param {boolean} [options.builtins] - boolean indicating whether to include built-in packages
* @param {boolean} [options.dev] - boolean indicating whether to resolve dev dependencies
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'dir': '/foo/bar/baz'
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
	if ( hasOwnProp( options, 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( 'invalid option. `dir` option must be a primitive string. Option: `' + opts.dir + '`.' );
		}
	}
	if ( hasOwnProp( options, 'builtins' ) ) {
		opts.builtins = options.builtins;
		if ( !isBoolean( opts.builtins ) ) {
			return new TypeError( 'invalid option. `builtins` option must be a primitive boolean. Option: `' + opts.builtins + '`.' );
		}
	}
	if ( hasOwnProp( options, 'dev' ) ) {
		opts.dev = options.dev;
		if ( !isBoolean( opts.dev ) ) {
			return new TypeError( 'invalid option. `dev` option must be a primitive boolean. Option: `' + opts.dev + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
