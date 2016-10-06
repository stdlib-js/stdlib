'use strict';

// MODULES //

var glob = require( 'glob' ).sync;
var resolve = require( 'path' ).resolve;
var prefix = require( './stdlib.js' );
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
var transform = require( './transform.js' );
var config = require( './config.json' );
var validate = require( './validate.js' );


// FIND //

/**
* Synchronously finds packages.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {StringArray} list of packages
*
* @example
* var pkgs = findPkgs();
* // returns [...]
*/
function findPkgs( options ) {
	var names;
	var gopts;
	var opts;
	var err;
	var dir;

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
	gopts = {
		'cwd': dir,
		'ignore': opts.ignore,
		'realpath': true // return absolute file paths
	};
	names = glob( opts.pattern, gopts );
	return transform( names );
} // end FUNCTION findPkgs()


// EXPORTS //

module.exports = findPkgs;
