'use strict';

// MODULES //

var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var transform = require( './transform.js' );
var config = require( './config.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Asynchronously find packages.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @param {Callback} clbk - callback to invoke after finding packages
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* findPkgs( onPkgs );
*
* function onPkgs( error, pkgs ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( pkgs );
* }
*/
function findPkgs() {
	var options;
	var gopts;
	var opts;
	var clbk;
	var err;
	var dir;

	opts = copy( config );
	if ( arguments.length < 2 ) {
		clbk = arguments[ 0 ];
	} else {
		options = arguments[ 0 ];
		clbk = arguments[ 1 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
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
	glob( opts.pattern, gopts, onGlob );

	/**
	* Callback invoked after matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} names - list of matching files
	*/
	function onGlob( error, names ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, transform( names ) );
	} // end FUNCTION onGlob()
} // end FUNCTION findPkgs()


// EXPORTS //

module.exports = findPkgs;
