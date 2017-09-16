'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:sync' );
var path = require( 'path' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var resolve = require( './resolve.sync.js' );
var getEntries = require( './entries.sync.js' );


// MAIN //

/**
* Synchronously resolves package entry points.
*
* @param {StringArray} pkgs - list of packages
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to resolve packages
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {ObjectArray} entry points
*
* @example
* var pkgs = [ '/foo/bar/baz' ];
*
* var entries = entryPoints( pkgs );
* // returns [{...}]
*/
function entryPoints( pkgs, options ) {
	var results;
	var opts;
	var err;
	var dir;
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
		dir = path.resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	debug( 'Base directory: %s', dir );

	debug( 'Resolving packages...' );
	results = resolve( pkgs, dir );
	if ( results instanceof Error ) {
		debug( 'Encountered an error when resolving packages: %s', results.message );
		throw results;
	}
	debug( 'Successfully resolved packages.' );

	debug( 'Determining entry points...' );
	results = getEntries( results );
	if ( results instanceof Error ) {
		debug( 'Encountered an error when determining entry points: %s', results.message );
		throw results;
	}
	debug( 'Successfully determined entry points.' );
	return results;
} // end FUNCTION entryPoints()


// EXPORTS //

module.exports = entryPoints;
