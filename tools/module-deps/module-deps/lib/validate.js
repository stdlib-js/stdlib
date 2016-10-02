'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );
var hasOwnProp = require( prefix+'@stdlib/utils/has-own-property' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for files
* @param {string} [options.pattern] - file glob pattern
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'dir': '/path/to/lib/node_modules/@stdlib/math'
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
	if ( hasOwnProp( options, 'pattern' ) ) {
		opts.pattern = options.pattern;
		if ( !isString( opts.pattern ) ) {
			return new TypeError( 'invalid option. `pattern` option must be a primitive string. Option: `' + opts.pattern + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
