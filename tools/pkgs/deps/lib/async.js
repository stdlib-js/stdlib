'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkg-deps:async' );
var path = require( 'path' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var entryPoints = require( './../../entry-points' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var resolveDeps = require( './resolve.js' );
var resolveDevDeps = require( './resolve_dev.js' );


// MAIN //

/**
* Asynchronously resolves package dependencies.
*
* @param {StringArray} pkgs - list of packages
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to resolve packages
* @param {boolean} [options.builtins=false] - boolean indicating whether to include built-in packages
* @param {boolean} [options.dev=false] - boolean indicating whether to resolve dev dependencies
* @param {Callback} clbk - callback to invoke after resolving dependencies
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* var pkgs = [ '/foo/bar/baz' ];
*
* pkgDeps( pkgs, clbk );
*
* function clbk( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*/
function pkgDeps( pkgs, options, clbk ) {
	var opts;
	var err;
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
		opts.dir = path.resolve( cwd(), opts.dir );
	} else {
		opts.dir = cwd();
	}
	debug( 'Base directory: %s', opts.dir );

	debug( 'Resolving entry points...' );
	entryPoints( pkgs, opts, onEntries );

	/**
	* Callback invoked upon resolving package entry points.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} results - results
	*/
	function onEntries( error, results ) {
		if ( error ) {
			debug( 'Encountered an error when resolving package entry points: %s', error.message );
			return done( error );
		}
		debug( 'Successfully resolved package entry points.' );

		debug( 'Resolving package dependencies...' );
		resolveDeps( results, opts.builtins, onDeps );
	} // end FUNCTION onEntries()

	/**
	* Callback invoked upon resolving package dependencies.
	*
	* @private
	* @{(Error|null)} error - error object
	* @param {ObjectArray} results - results
	*/
	function onDeps( error, results ) {
		if ( error ) {
			debug( 'Encountered an error when resolving package dependencies: %s', error.message );
			return done( error );
		}
		debug( 'Successfully resolved package dependencies.' );
		if ( opts.dev === false ) {
			return done( null, results );
		}
		debug( 'Resolving package dev dependencies...' );
		resolveDevDeps( results, opts, onDevDeps );
	} // end FUNCTION onDeps()

	/**
	* Callback invoked upon resolving package dev dependencies.
	*
	* @private
	* @{(Error|null)} error - error object
	* @param {ObjectArray} results - results
	*/
	function onDevDeps( error, results ) {
		if ( error ) {
			debug( 'Encountered an error when resolving package dev dependencies: %s', error.message );
			return done( error );
		}
		debug( 'Successfully resolved package dev dependencies.' );
		done( null, results );
	} // end FUNCTION onDeps()

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {ObjectArray} results - results
	*/
	function done( error, results ) {
		if ( error ) {
			return cb( error );
		}
		cb( null, results );
	} // end FUNCTION done()
} // end FUNCTION pkgDeps()


// EXPORTS //

module.exports = pkgDeps;
