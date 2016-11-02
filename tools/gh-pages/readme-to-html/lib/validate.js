'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var hasOwnProp = require( prefix+'@stdlib/utils/has-own-property' );
var isObject = require( prefix+'@stdlib/utils/is-plain-object' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isBoolean = require( prefix+'@stdlib/utils/is-boolean' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.out] - output file path
* @param {string} [options.title] - HTML title
* @param {string} [options.tests] - tests URL
* @param {string} [options.benchmarks] - benchmarks URL
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {string} [options.head] - content to insert into HTML head
* @param {boolean} [options.fragment] - output an HTML fragment
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
	if ( hasOwnProp( options, 'tests' ) ) {
		opts.tests = options.tests;
		if ( !isString( opts.tests ) ) {
			return new TypeError( 'invalid option. `tests` option must be a string. Option: `'+opts.tests+'`.' );
		}
	}
	if ( hasOwnProp( options, 'benchmarks' ) ) {
		opts.benchmarks = options.benchmarks;
		if ( !isString( opts.benchmarks ) ) {
			return new TypeError( 'invalid option. `benchmarks` option must be a string. Option: `'+opts.benchmarks+'`.' );
		}
	}
	if ( hasOwnProp( options, 'head' ) ) {
		opts.head = options.head;
		if ( !isString( opts.head ) ) {
			return new TypeError( 'invalid option. `head` option must be a string. Option: `'+opts.head+'`.' );
		}
	}
	if ( hasOwnProp( options, 'prepend' ) ) {
		opts.prepend = options.prepend;
		if ( !isString( opts.prepend ) ) {
			return new TypeError( 'invalid option. `prepend` option must be a string. Option: `'+opts.prepend+'`.' );
		}
	}
	if ( hasOwnProp( options, 'append' ) ) {
		opts.append = options.append;
		if ( !isString( opts.append ) ) {
			return new TypeError( 'invalid option. `append` option must be a string. Option: `'+opts.append+'`.' );
		}
	}
	if ( hasOwnProp( options, 'fragment' ) ) {
		opts.fragment = options.fragment;
		if ( !isBoolean( opts.fragment ) ) {
			return new TypeError( 'invalid option. `fragment` option must be a boolean. Option: `'+opts.fragment+'`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
