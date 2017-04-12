'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var pkg = require( './../../../snippets/package.json' );
var standardize = require( './../../../pkg-json/standardize' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a `package.json`.
*
* @param {Options} [options] - function options
* @param {string} [options.name] - package name
* @param {string} [options.desc] - package description
* @param {StringArray} [options.keywords] - package keywords
* @param {string} [options.cmd] - package command for use as a CLI tool
* @param {string} [options.browser] - browser entry point
* @throws {TypeError} must provide an object
* @throws {TypeError} must provide valid options
* @returns {Object} `package.json`
*
* @example
* var pkg = create({
*     'name': '@stdlib/math/base/special/erf',
*     'desc': 'Error function.',
*     'keywords': [
*         'math',
*         'mathematics',
*         'error',
*         'function',
*         'erf'
*      ]
* });
*/
function create( options ) {
	var opts;
	var err;
	var out;

	opts = copy( defaults );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	out = copy( pkg );
	if ( hasOwnProp( opts, 'name' ) ) {
		out.name = opts.name;
	}
	if ( hasOwnProp( opts, 'desc' ) ) {
		out.description = opts.desc;
	}
	if ( hasOwnProp( opts, 'keywords' ) ) {
		out.keywords = [ 'stdlib' ].concat( opts.keywords );
	}
	if ( hasOwnProp( opts, 'cmd' ) ) {
		out.bin = {};
		out.bin[ opts.cmd ] = opts.bin;
	}
	if ( hasOwnProp( opts, 'browser' ) ) {
		out.browser = opts.browser;
	}
	return standardize( out );
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
