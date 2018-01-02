'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-img-equations-src-urls:attacher' );
var copy = require( '@stdlib/utils/copy' );
var isObject = require( '@stdlib/assert/is-plain-object' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var transformerFactory = require( './transformer.js' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Attaches a plugin to a remark processor in order to insert rawgit URLs for equation images into Markdown equation elements.
*
* @param {Options} [options] - plugin options
* @param {string} [options.dir="./docs/img/"] - resource directory
* @param {string} [options.prefix="equation_"] - filename prefix
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
		if ( hasOwnProp( options, 'dir' ) ) {
			if ( !isString( options.dir ) ) {
				throw new TypeError( 'invalid option. `dir` option must be a string primitive. Option: `' + options.dir + '`.' );
			}
			opts.dir = options.dir;
		}
		if ( hasOwnProp( options, 'prefix' ) ) {
			if ( !isString( options.prefix ) ) {
				throw new TypeError( 'invalid option. `prefix` option must be a string primitive. Option: `' + options.prefix + '`.' );
			}
			opts.prefix = options.prefix;
		}
	}
	debug( 'Attaching a plugin configured with the following options: %s', JSON.stringify( opts ) );
	return transformerFactory( opts );
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
