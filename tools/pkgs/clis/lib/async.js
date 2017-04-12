'use strict';

// MODULES //

var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var config = require( './config.json' );
var validate = require( './validate.js' );
var readPkgs = require( './read_pkgs.js' );


// MAIN //

/**
* Asynchronously find package command-line interfaces (CLIs).
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for package CLIs
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @param {Callback} clbk - callback to invoke after finding package CLIs
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} `pattern` option must end with `package.json`
*
* @example
* findCLIs( clbk );
*
* function clbk( error, files ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( files );
* }
*/
function findCLIs() {
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
	// Find `package.json` files...
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
	* @param {StringArray} files - list of matching files
	*/
	function onGlob( error, files ) {
		if ( error ) {
			return done( error );
		}
		if ( files.length ) {
			readPkgs( files, done );
		} else {
			done( null, [] );
		}
	} // end FUNCTION onGlob()

	/**
	* Callback invoked upon reading packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} files - command-line interfaces
	*/
	function done( error, files ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, files );
	} // end FUNCTION done()
} // end FUNCTION findCLIs()


// EXPORTS //

module.exports = findCLIs;
