'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:async' );
var path = require( 'path' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var resolve = require( './resolve.js' );
var getEntries = require( './entries.js' );


// MAIN //

/**
* Resolves package entry points.
*
* @param {StringArray} pkgs - list of packages
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to resolve packages
* @param {Callback} clbk - callback to invoke after resolving entry points
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* var pkgs = [ '/foo/bar/baz' ];
*
* entryPoints( pkgs, clbk );
*
* function clbk( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*/
function entryPoints( pkgs, options, clbk ) {
	var opts;
	var err;
	var dir;
	var cb;
	if ( !isStringArray( pkgs ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string array. Value: `' + pkgs + '`.' );
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
	if ( opts.dir ) {
		dir = path.resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	debug( 'Base directory: %s', dir );

	debug( 'Resolving packages...' );
	resolve( pkgs, dir, onResolve );

	/**
	* Callback invoked upon reading a list of files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} pkgs - packages
	*/
	function onResolve( error, pkgs ) {
		if ( error ) {
			debug( 'Encountered an error when resolving packages: %s', error.message );
			return cb( error );
		}
		debug( 'Successfully resolved packages.' );

		debug( 'Determining entry points...' );
		getEntries( pkgs, onEntries );
	} // end FUNCTION onFiles()

	/**
	* Callback invoked upon determining entry points.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} pkgs - packages
	*/
	function onEntries( error, pkgs ) {
		if ( error ) {
			debug( 'Encountered an error when determining entry points: %s', error.message );
			return cb( error );
		}
		debug( 'Successfully determined entry points.' );
		cb( null, pkgs );
	} // end FUNCTION onEntries()
} // end FUNCTION entryPoints()


// EXPORTS //

module.exports = entryPoints;
