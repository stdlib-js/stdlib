'use strict';

// MODULES //

var debug = require( 'debug' )( 'test:bundle' );
var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var bundle = require( './../../../browserify/bundle' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Bundles test files into a single file.
*
* @param {string} root - root directory
* @param {Options} [options] - options
* @param {string} [options.out] - output file path
* @param {string} [options.pattern] - glob pattern
* @param {Callback} clbk - callback to invoke after bundling
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be an function
*
* @example
* var opts = {
*     'pattern': '\*\*\/test*.js'
* };
*
* var root = '/beep/boop';
*
* build( root, opts, clbk );
*
* function clbk( error, bundle ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( bundle.toString() );
* }
*/
function build( root, options, clbk ) {
	var gopts;
	var opts;
	var err;
	var out;
	var dir;
	var cb;
	var d;

	if ( !isString( root ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+root+'`.' );
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
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	d = cwd();
	debug( 'Current working directory: %s', d );

	dir = resolve( d, root );
	debug( 'Root directory: %s', dir );

	if ( opts.out ) {
		out = resolve( d, opts.out );
		debug( 'Output filename: %s', out );
	}
	gopts = {
		'cwd': dir,
		'nodir': true,
		'realpath': true // resolve absolute file paths
	};
	debug( 'Glob options: %s', JSON.stringify( gopts ) );

	glob( opts.pattern, gopts, onGlob );

	/**
	* Callback invoked upon matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} files - matches
	*/
	function onGlob( error, files ) {
		if ( error ) {
			debug( 'Encountered an error when searching for files: %s', error.message );
			return cb( error );
		}
		if ( !files.length ) {
			debug( 'No files found.' );
			return cb( null, false );
		}
		if ( out === void 0 ) {
			return bundle( files, onBundle );
		}
		bundle( files, out, onBundle );
	} // end FUNCTION onGlob()

	/**
	* Callback invoked upon creating a bundle.
	*
	* @private
	* @param {(Error|null)}  error - error object
	* @param {Buffer} bundle - bundle
	*/
	function onBundle( error, bundle ) {
		if ( error ) {
			debug( 'Encountered an error when generating bundle: %s', error.message );
			return cb( error );
		}
		if ( bundle ) {
			return cb( null, bundle );
		}
		cb( null, true );
	} // end FUNCTION onBundle()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
