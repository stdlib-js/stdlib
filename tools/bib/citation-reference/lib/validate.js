'use strict';

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.database] - path to a bibliography database file
* @param {string} [options.csl] - path to a Citation Style Language file
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'database': '/foo/bar/baz.bib',
*     'csl': '/foo/bar/baz.csl'
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
	if ( hasOwnProp( options, 'database' ) ) {
		opts.database = options.database;
		if ( !isString( opts.database ) ) {
			return new TypeError( 'invalid option. `database` option must be a primitive string. Option: `' + opts.database + '`.' );
		}
	}
	if ( hasOwnProp( options, 'csl' ) ) {
		opts.csl = options.csl;
		if ( !isString( opts.csl ) ) {
			return new TypeError( 'invalid option. `csl` option must be a primitive string. Option: `' + opts.csl + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
