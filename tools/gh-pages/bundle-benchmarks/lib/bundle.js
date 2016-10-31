'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:bundle-benchmarks' );
var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var bundle = require( './../../bundle' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Bundles benchmark files into a single file.
*
* @param {string} dir - root directory
* @param {string} out - output filename
* @param {Options} [options] - options
* @param {string} [options.pattern] - glob pattern
* @param {Callback} clbk - callback to invoke after bundling
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*/
function build( dir, out, options, clbk ) {
	var gopts;
	var opts;
	var err;
	var cb;
	var d;

	if ( !isString( dir ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+dir+'`.' );
	}
	if ( !isString( out ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be a string. Value: `'+out+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 4 ) {
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

	dir = resolve( d, dir );
	debug( 'Root directory: %s', dir );

	out = resolve( d, out );
	debug( 'Output filename: %s', out );

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
		bundle( files, out, onBundle );
	} // end FUNCTION onGlob()

	/**
	* Callback invoked upon creating a bundle.
	*
	* @private
	* @param {(Error|null)}  error - error object
	*/
	function onBundle( error ) {
		if ( error ) {
			debug( 'Encountered an error when generating bundle: %s', error.message );
			return cb( error );
		}
		cb( null, true );
	} // end FUNCTION onBundle()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
