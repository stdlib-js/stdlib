'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var isObject = require( prefix+'@stdlib/utils/is-object' ); // TODO: plain object
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isBoolean = require( prefix+'@stdlib/utils/is-boolean' ).isPrimitive;
var isNonNegativeInteger = require( prefix+'@stdlib/utils/is-nonnegative-integer' ).isPrimitive;
var isStringArray = require( prefix+'@stdlib/utils/is-string' ).isPrimitiveStringArray;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search
* @param {NonNegativeInteger} [options.depth] - search depth
* @param {StringArray} [options.exclude] - SPDX identifiers used to filter license results
* @param {boolean} [options.dev] - boolean indicating whether to include dev dependencies
* @param {boolean} [options.infer] - boolean indicating whether to infer licenses from text
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'dir': './'
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
	if ( options.hasOwnProperty( 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( 'invalid option. `dir` option must be a primitive string. Option: `' + opts.dir + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'depth' ) ) {
		opts.depth = options.depth;
		if ( !isNonNegativeInteger( opts.depth ) ) {
			return new TypeError( 'invalid option. `depth` option must be a nonnegative integer. Option: `' + opts.depth + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'exclude' ) ) {
		opts.exclude = options.exclude;
		if ( !isStringArray( opts.exclude ) ) {
			return new TypeError( 'invalid option. `exclude` option must be a primitive string array. Option: `' + opts.exclude + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'dev' ) ) {
		opts.dev = options.dev;
		if ( !isBoolean( opts.dev ) ) {
			return new TypeError( 'invalid option. `dev` option must be a primitive boolean. Option: `' + opts.dev + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'infer' ) ) {
		opts.infer = options.infer;
		if ( !isBoolean( opts.infer ) ) {
			return new TypeError( 'invalid option. `infer` option must be a primitive boolean. Option: `' + opts.infer + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
