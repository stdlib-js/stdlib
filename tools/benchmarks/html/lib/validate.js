'use strict';

// MODULES //

var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.out] - output file path
* @param {string} [options.title] - HTML title
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'title': 'beep boop'
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
	if ( hasOwnProp( options, 'title' ) ) {
		opts.title = options.title;
		if ( !isString( opts.title ) ) {
			return new TypeError( 'invalid option. `title` option must be a string. Option: `'+opts.title+'`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
