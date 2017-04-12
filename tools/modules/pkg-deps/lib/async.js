'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-pkg-deps:async' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var walkFile = require( './walk_file.js' );
var toArray = require( './to_array.js' );


// MAIN //

/**
* Lists package dependencies.
*
* @param {(string|StringArray)} file(s) - file or file list
* @param {Options} [options] - function options
* @param {boolean} [options.builtins=true] - boolean indicating whether to include built-in packages
* @param {boolean} [options.walk=true] - boolean indicating whether to walk relative module dependencies
* @param {Callback} clbk - callback
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* var files = [ '/foo/bar/index.js' ];
*
* pkgDeps( files, clbk );
*
* function clbk( error, deps ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( deps );
* }
*/
function pkgDeps( files, options, clbk ) {
	var isStr;
	var count;
	var cache;
	var list;
	var opts;
	var err;
	var len;
	var cb;
	var i;

	isStr = isString( files );
	if (
		!isStr &&
		!isStringArray( files )
	) {
		throw new TypeError( 'invalid input argument. First argument must be either a string or string array. Value: `' + files + '`.' );
	}
	if ( isStr ) {
		list = [ files ];
	} else {
		list = files;
	}
	opts = copy( defaults );
	if ( arguments.length < 3 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + cb + '`.' );
	}
	debug( 'Options: %s', JSON.stringify( opts ) );

	len = list.length;
	cache = {};
	count = 0;

	debug( 'Walking %s files...', len );
	for ( i = 0; i < len; i++ ) {
		debug( 'Walking file: %s (%d of %d)...', list[ i ], i+1, len );
		walkFile( cache, list[ i ], opts, onWalk( i ) );
	}

	/**
	* Returns a callback to be invoked upon walking a file.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onWalk( idx ) {
		var file = list[ idx ];
		var k = idx + 1;
		/**
		* Callback invoked upon walking a file.
		*
		* @private
		* @param {(Error|null)} error - error object
		*/
		return function onWalk( error ) {
			if ( error ) {
				debug( 'Encountered an error when walking file: %s (%d of %d). Error: %s', file, k, len, error.message );
				return clbk( error );
			}
			debug( 'Successfully walked file: %s (%d of %d).', file, k, len );

			count += 1;
			debug( 'Walked %d of %d files.', count, len );
			if ( count === len ) {
				return clbk( null, toArray( cache ) );
			}
		}; // end FUNCTION onWalk()
	} // end FUNCTION onWalk()
} // end FUNCTION pkgDeps()


// EXPORTS //

module.exports = pkgDeps;
