'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-svg-equations:attacher' );
var stdlib = require( './stdlib.js' );
var copy = require( stdlib+'@stdlib/utils/copy' );
var isObject = require( stdlib+'@stdlib/utils/is-object' ); // TODO: plain object
var isString = require( stdlib+'@stdlib/utils/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// ATTACHER //

/**
* Attach a plugin to a remark processor in order to create SVGs for HTML equation elements.
*
* @param {Remark} remark - remark instance
* @param {Options} [options] - options object
* @param {string} [options.dir="./docs/img/"] - resource directory
* @return {Function} transformer
*/
function attacher( remark, options ) {
	var opts = copy( defaults );
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'dir' ) ) {
			if ( !isString( options.dir ) ) {
				throw new TypeError( 'invalid option. `dir` option must be a string primitive. Value: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
	}
	debug( 'Attaching a plugin configured with the following options: %s', JSON.stringify( opts ) );
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
