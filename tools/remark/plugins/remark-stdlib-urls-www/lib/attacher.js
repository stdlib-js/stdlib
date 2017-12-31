'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-stdlib-urls-www:attacher' );
var copy = require( '@stdlib/utils/copy' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Attaches a plugin to a remark processor to resolve package identifiers to website URIs.
*
* @param {Options} [options] - plugin options
* @param {string} [options.version="develop"] - documentation version
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Function} transformer
*/
function attacher( options ) {
	var opts = copy( defaults );

	// NOTE: cannot use `arguments.length` check, as `options` may be explicitly passed as `undefined`
	if ( options !== void 0 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'version' ) ) {
			if ( !isString( options.version ) ) {
				throw new TypeError( 'invalid option. `version` option must be a string primitive. Value: `' + options.version + '`.' );
			}
			opts.version = options.version;
		}
	}
	debug( 'Attaching a plugin configured with the following options: %s', JSON.stringify( opts ) );
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
