'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkg-deps:sync' );
var path = require( 'path' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var entryPoints = require( './../../entry-points' ).sync;
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var resolveDeps = require( './resolve.sync.js' );
var resolveDevDeps = require( './resolve_dev.sync.js' );


// MAIN //

/**
* Synchronously resolves package dependencies.
*
* @param {StringArray} pkgs - list of packages
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to resolve packages
* @param {boolean} [options.builtins=false] - boolean indicating whether to include built-in packages
* @param {boolean} [options.dev=false] - boolean indicating whether to resolve dev dependencies
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ObjectArray} resolved dependencies
*
* @example
* var pkgs = [ '/foo/bar/baz' ];
*
* var deps = pkgDeps( pkgs );
* // returns [{...}]
*/
function pkgDeps( pkgs, options ) {
	var results;
	var opts;
	var err;
	if ( !isStringArray( pkgs ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string array. Value: `' + pkgs + '`.' );
	}
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	debug( 'Options: %s', JSON.stringify( opts ) );
	if ( opts.dir ) {
		opts.dir = path.resolve( cwd(), opts.dir );
	} else {
		opts.dir = cwd();
	}
	debug( 'Base directory: %s', opts.dir );

	debug( 'Resolving package entry points...' );
	results = entryPoints( pkgs, opts );
	if ( results instanceof Error ) {
		debug( 'Encountered an error when resolving package entry points: %s', results.message );
		throw results;
	}
	debug( 'Successfully resolved package entry points.' );

	debug( 'Resolving package dependencies...' );
	results = resolveDeps( results, opts.builtins );
	if ( results instanceof Error ) {
		debug( 'Encountered an error when resolving package dependencies: %s', results.message );
		return results;
	}
	debug( 'Successfully resolved package dependencies.' );
	if ( opts.dev === false ) {
		return results;
	}
	debug( 'Resolving package dev dependencies...' );
	results = resolveDevDeps( results, opts );
	if ( results instanceof Error ) {
		debug( 'Encountered an error when resolving package dev dependencies: %s', results.message );
		return results;
	}
	debug( 'Successfully resolved package dev dependencies.' );
	return results;
} // end FUNCTION pkgDeps()


// EXPORTS //

module.exports = pkgDeps;
