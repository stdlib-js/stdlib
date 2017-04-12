'use strict';

// MODULES //

var glob = require( 'glob' );
var resolve = require( 'path' ).resolve;
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var linter = require( './lint.js' );
var IGNORE = require( './ignore_patterns.json' );


// MAIN //

/**
* Asynchronously lints filenames.
*
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for files
* @param {string} [options.pattern='**\/*'] - filename pattern
* @param {Callback} clbk - callback to invoke after linting
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} must provide a function
*
* @example
* lint( onLint );
*
* function onLint( error, filenames ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( filenames );
* }
*/
function lint() {
	var pattern;
	var options;
	var clbk;
	var opts;
	var dir;
	var err;

	opts = copy( DEFAULTS );
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
	pattern = opts.pattern;

	opts = {
		'cwd': dir,
		'ignore': IGNORE,
		'nodir': true // do not match directories
	};
	glob( pattern, opts, onGlob );

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
		clbk( null, linter( names ) );
	} // end FUNCTION onGlob()
} // end FUNCTION lint()


// EXPORTS //

module.exports = lint;
