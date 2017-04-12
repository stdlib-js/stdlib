'use strict';

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;


// VARIABLES //

var RE = /^\@stdlib\/.+/;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.name] - package name
* @param {string} [options.desc] - package description
* @param {StringArray} [options.keywords] - package keywords
* @param {string} [options.cmd] - package command for use as a CLI tool
* @param {string} [options.browser] - browser entry point
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'name': '@stdlib/beep/boop'
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
	if ( hasOwnProp( options, 'name' ) ) {
		opts.name = options.name;
		if ( !isString( opts.name ) ) {
			return new TypeError( 'invalid option. `name` option must be a primitive string. Option: `' + opts.name + '`.' );
		}
		if ( !RE.test( opts.name ) ) {
			return new Error( 'invalid option. `name` option must begin with `@stdlib/`. Option: `'+ opts.name + '`.' );
		}
	}
	if ( hasOwnProp( options, 'desc' ) ) {
		opts.desc = options.desc;
		if ( !isString( opts.desc ) ) {
			return new TypeError( 'invalid option. `desc` option must be a primitive string. Option: `' + opts.desc + '`.' );
		}
	}
	if ( hasOwnProp( options, 'keywords' ) ) {
		opts.keywords = options.keywords;
		if ( !isStringArray( opts.keywords ) ) {
			return new TypeError( 'invalid option. `keywords` option must be a string array. Option: `' + opts.keywords + '`.' );
		}
	}
	if ( hasOwnProp( options, 'cmd' ) ) {
		opts.cmd = options.cmd;
		if ( !isString( opts.cmd ) ) {
			return new TypeError( 'invalid option. `cmd` option must be a primitive string. Option: `' + opts.cmd + '`.' );
		}
	}
	if ( hasOwnProp( options, 'browser' ) ) {
		opts.browser = options.browser;
		if ( !isString( opts.browser ) ) {
			return new TypeError( 'invalid option. `browser` option must be a primitive string. Option: `' + opts.browser + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
