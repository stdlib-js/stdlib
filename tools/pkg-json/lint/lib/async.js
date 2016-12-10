'use strict';

// MODULES //

var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var isFunction = require( '@stdlib/utils/is-function' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var config = require( './config.json' );
var validate = require( './validate.js' );
var readPkgs = require( './read_pkgs.js' );


// MAIN //

/**
* Asynchronously lint `package.json` files.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {string} [options.pattern='**\/package.json'] - glob pattern
* @param {StringArray} [options.ignore] - glob pattern(s) to exclude matches
* @param {Callback} clbk - callback to invoke after completion
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} `pattern` option must end with `package.json`
*
* @example
* lint( clbk );
*
* function clbk( error, errs ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( errs ) {
*         console.dir( errs );
*     } else {
*         console.log( 'Success!' );
*     }
* }
*/
function lint() {
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
			done( null, null );
		}
	} // end FUNCTION onGlob()

	/**
	* Callback invoked upon reading packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(ObjectArray|null)} errs - lint errs
	*/
	function done( error, errs ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, errs );
	} // end FUNCTION done()
} // end FUNCTION lint()


// EXPORTS //

module.exports = lint;
