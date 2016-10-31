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
* @param {string} [options.title] - HTML title
* @param {Object} [options.tests] - tests URL
* @param {Object} [options.benchmarks] - benchmarks URL
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
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
