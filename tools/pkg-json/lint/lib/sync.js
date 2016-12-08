'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var resolve = require( 'path' ).resolve;
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var readJSON = require( '@stdlib/fs/read-json' ).sync;
var isValid = require( './../../validate' );
var config = require( './config.json' );
var validateOptions = require( './validate.js' );


// MAIN //

/**
* Synchronously find and validate `package.json` files.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} `pattern` option must end with `package.json`
* @throws {Error} unable to parse `package.json` as JSON
* @returns {(Error|null)} validation errors or `null`
*
* @example
* var err = validate();
* if ( err ) {
*     throw err;
* }
*/
function validate( options ) {
	var files;
	var gopts;
	var file;
	var opts;
	var bool;
	var err;
	var dir;
	var i;

	opts = copy( config );
	if ( arguments.length ) {
		err = validateOptions( opts, options );
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

	// Validate each file...
	for ( i = 0; i < files.length; i++ ) {
		file = readJSON( files[ i ] );
		if ( file instanceof Error ) {
			err = new Error( 'invalid JSON. Unable to parse file as JSON. '+file.message );
			return err;
		}
		bool = isValid( file );
		if ( bool === false ) {
			err = new Error( 'invalid file. '+JSON.stringify( isValid.errors[ 0 ] ) );
			return err;
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
