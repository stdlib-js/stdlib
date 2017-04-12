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
* @param {string} [options.title] - title
* @param {string} [options.url] - URL
* @param {string} [options.mount] - root URL on which to mount tree paths
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'title': 'Beep'
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
	if ( hasOwnProp( options, 'title' ) ) {
		opts.title = options.title;
		if ( !isString( opts.title ) ) {
			return new TypeError( 'invalid option. `title` option must be a string. Option: `'+opts.title+'`.' );
		}
	}
	if ( hasOwnProp( options, 'url' ) ) {
		opts.url = options.url;
		if ( !isString( opts.url ) ) {
			return new TypeError( 'invalid option. `url` option must be a string. Option: `'+opts.url+'`.' );
		}
	}
	if ( hasOwnProp( options, 'mount' ) ) {
		opts.mount = options.mount;
		if ( !isString( opts.mount ) ) {
			return new TypeError( 'invalid option. `mount` option must be a string. Option: `'+opts.mount+'`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
