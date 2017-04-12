'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-pkg-deps:sync' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var walkFile = require( './walk_file.sync.js' );
var toArray = require( './to_array.js' );


// MAIN //

/**
* Synchronously lists package dependencies.
*
* @param {(string|StringArray)} file(s) - file or file list
* @param {Options} [options] - function options
* @param {boolean} [options.builtins=true] - boolean indicating whether to include built-in packages
* @param {boolean} [options.walk=true] - boolean indicating whether to walk relative module dependencies
* @throws {TypeError} first argument must be a string array
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {(ObjectArray|Error)} results or an error
*
* @example
* var files = [ '/foo/bar/index.js' ];
*
* var deps = pkgDeps( files );
*/
function pkgDeps( files, options ) {
	var isStr;
	var cache;
	var list;
	var file;
	var opts;
	var err;
	var len;
	var i;
	var k;

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
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	debug( 'Options: %s', JSON.stringify( opts ) );

	len = list.length;
	cache = {};

	debug( 'Walking %s files...', len );
	for ( i = 0; i < len; i++ ) {
		file = list[ i ];
		k = i + 1;
		debug( 'Walking file: %s (%d of %d)...', file, k, len );
		err = walkFile( cache, file, opts );
		if ( err instanceof Error ) {
			debug( 'Encountered an error when walking file: %s (%d of %d). Error: %s', file, k, len, err.message );
			return err;
		}
		debug( 'Successfully walked file: %s (%d of %d).', file, k, len );
	}
	debug( 'Finished walking %s files.', len );
	return toArray( cache );
} // end FUNCTION pkgDeps()


// EXPORTS //

module.exports = pkgDeps;
