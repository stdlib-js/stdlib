'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var resolve = require( 'path' ).resolve;
var getKeys = require( 'object-keys' ).shim();
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var dirname = require( '@stdlib/utils/dirname' );
var config = require( './config.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Synchronously find package command-line interfaces (CLIs).
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} `pattern` option must end with `package.json`
* @throws {Error} unable to parse `package.json` as JSON
* @returns {(Array|StringArray)} list of command-line interfaces
*
* @example
* var files = findCLIs();
* // returns [...]
*/
function findCLIs( options ) {
	var fpath;
	var files;
	var gopts;
	var file;
	var opts;
	var keys;
	var err;
	var dir;
	var out;
	var i;
	var j;

	opts = copy( config );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	// Find `package.json` files...
	gopts = {
		'cwd': dir,
		'ignore': opts.ignore,
		'realpath': true // return absolute file paths
	};
	files = glob( opts.pattern, gopts );

	// Check for referenced CLI files...
	out = [];
	for ( i = 0; i < files.length; i++ ) {
		file = readJSON( files[ i ] );
		if ( file instanceof Error ) {
			throw file;
		}
		dir = dirname( files[ i ] );
		if ( isString( file.bin ) ) {
			fpath = resolve( dir, file.bin );
			out.push( fpath );
		} else if ( hasOwnProp( file, 'bin' ) ) {
			keys = getKeys( file.bin );
			for ( j = 0; j < keys.length; j++ ) {
				fpath = file.bin[ keys[j] ];
				fpath = resolve( dir, fpath );
				out.push( fpath );
			}
		}
	}
	return out;
} // end FUNCTION findCLIs()


// EXPORTS //

module.exports = findCLIs;
