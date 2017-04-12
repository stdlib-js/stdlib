'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:packages:build' );
var resolve = require( 'path' ).resolve;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var findPkgs = require( './../../../pkgs/find' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var build = require( './build.js' );


// MAIN //

/**
* Performs a package search and generates web assets for all found packages.
*
* @param {string} dest - root destination directory
* @param {Options} [options] - function options
* @param {string} [options.dir] - root package directory
* @param {string} [options.readme] - README filename
* @param {string} [options.index] - index filename
* @param {string} [options.mount] - base URL mount
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {string} [options.head] - content to insert into HTML head
* @param {Object} [options.packages] - package options
* @param {string} [options.packages.pattern] - glob pattern
* @param {StringArray} [options.packages.ignore] - ignore patterns
* @param {Object} [options.tests] - tests options
* @param {string} [options.tests.pattern] - glob pattern
* @param {string} [options.tests.bundle] - bundle filename
* @param {string} [options.tests.folder] - folder name
* @param {string} [options.tests.html] - HTML filename
* @param {string} [options.tests.title] - HTML title
* @param {Object} [options.benchmarks] - benchmarks options
* @param {string} [options.benchmarks.pattern] - benchmarks glob pattern
* @param {string} [options.benchmarks.bundle] - bundle filename
* @param {string} [options.benchmarks.folder] - folder name
* @param {string} [options.benchmarks.html] - HTML filename
* @param {string} [options.benchmarks.title] - HTML title
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*
* @example
* run( done );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/
function run( dest, options, clbk ) {
	var fopts;
	var opts;
	var err;
	var dir;
	var cb;

	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `' + dest + '`.' );
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
	dir = cwd();
	debug( 'Current working directory: %s', dir );

	dest = resolve( dir, dest );
	debug( 'Root destination directory: %s', dest );

	if ( opts.dir ) {
		opts.dir = resolve( dir, opts.dir );
	} else {
		opts.dir = dir;
	}
	debug( 'Options: %s', JSON.stringify( opts ) );

	fopts = {
		'dir': opts.dir,
		'pattern': opts.packages.pattern,
		'ignore': opts.packages.ignore
	};
	debug( 'Searching for packages...' );
	findPkgs( fopts, onPkgs );

	/**
	* Callback invoked upon finding packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} pkgs - packages
	*/
	function onPkgs( error, pkgs ) {
		if ( error ) {
			debug( 'Encountered an error when searching for packages: %s', error.message );
			return done( error );
		}
		if ( !pkgs.length ) {
			debug( 'No packages found.' );
			return done();
		}
		debug( 'Found %d packages.', pkgs.length );

		debug( 'Starting build...' );
		build( pkgs, dest, opts, done );
	} // end FUNCTION onPkgs()

	/**
	* Callback invoked upon completing build.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function done( error ) {
		if ( error ) {
			return cb( error );
		}
		debug( 'Finished build.' );
		cb();
	} // end FUNCTION done()
} // end FUNCTION run()


// EXPORTS //

module.exports = run;
