'use strict';

// MODULES //

var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isURI = require( '@stdlib/assert/is-uri' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} options.uri - link URI
* @param {string} options.id - unique link identifier
* @param {string} options.description - link description
* @param {StringArray} [options.keywords] - link keywords
* @param {string} [options.database] - path to a bibliography database file
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'database': '/foo/bar/baz.json',
*     'url': 'http://stdlib.io',
*     'id': 'stdlib',
*     'description': 'A standard library for JavaScript and Node.js.'
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
	opts.uri = options.uri;
	if ( !isURI( opts.uri ) ) {
		return new TypeError( 'invalid option. `uri` option must be a valid URI. Option: `' + opts.uri + '`.' );
	}
	opts.id = options.id;
	if ( !isString( opts.id ) ) {
		return new TypeError( 'invalid option. `id` option must be a primitive string. Option: `' + opts.id + '`.' );
	}
	opts.description = options.description;
	if ( !isString( opts.description ) ) {
		return new TypeError( 'invalid option. `description` option must be a primitive string. Option: `' + opts.description + '`.' );
	}
	if ( hasOwnProp( options, 'database' ) ) {
		opts.database = options.database;
		if ( !isString( opts.database ) ) {
			return new TypeError( 'invalid option. `database` option must be a primitive string. Option: `' + opts.database + '`.' );
		}
	}
	if ( hasOwnProp( options, 'keywords' ) ) {
		opts.keywords = options.keywords;
		if ( !isStringArray( opts.keywords ) ) {
			return new TypeError( 'invalid option. `keywords` option must be an array of string primitives. Option: `' + opts.keywords + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
