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
* @param {string} [options.pattern] - glob pattern
* @param {string} [options.bundle] - output bundle filename
* @param {string} [options.mount] - URL path on which to mount a bundle
* @param {string} [options.html] - output HTML filename
* @param {string} [options.title] - HTML title
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
	if ( hasOwnProp( options, 'pattern' ) ) {
		opts.pattern = options.pattern;
		if ( !isString( opts.pattern ) ) {
			return new TypeError( 'invalid option. `pattern` option must be a string. Option: `'+opts.pattern+'`.' );
		}
	}
	if ( hasOwnProp( options, 'bundle' ) ) {
		opts.bundle = options.bundle;
		if ( !isString( opts.bundle ) ) {
			return new TypeError( 'invalid option. `bundle` option must be a string. Option: `'+opts.bundle+'`.' );
		}
	}
	if ( hasOwnProp( options, 'mount' ) ) {
		opts.mount = options.mount;
		if ( !isString( opts.mount ) ) {
			return new TypeError( 'invalid option. `mount` option must be a string. Option: `'+opts.mount+'`.' );
		}
	}
	if ( hasOwnProp( options, 'html' ) ) {
		opts.html = options.html;
		if ( !isString( opts.html ) ) {
			return new TypeError( 'invalid option. `html` option must be a string. Option: `'+opts.html+'`.' );
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
