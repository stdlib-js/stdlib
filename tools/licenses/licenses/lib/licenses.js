'use strict';

// MODULES //

var debug = require( 'debug' )( 'licenses:main' );
var resolve = require( 'path' ).resolve;
var readInstalled = require( 'read-installed' );
var prefix = require( './stdlib.js' );
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
var PINF = require( prefix+'@stdlib/math/constants/float64-pinf' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var recurse = require( './recurse.js' );
var toArray = require( './to_array.js' );
var infer = require( './infer.js' );


// LICENSES //

/**
* Resolves licenses.
*
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search
* @param {NonNegativeInteger} [options.depth] - search depth
* @param {StringArray} [options.exclude] - SPDX identifiers used to filter license results
* @param {boolean} [options.dev=true] - boolean indicating whether to include dev dependencies
* @param {boolean} [options.infer=true] - boolean indicating whether to infer licenses from text
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} must provide a function
*
* @example
* licenses( onResults );
*
* function onResults( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( results );
* }
*/
function licenses() {
	var options;
	var clbk;
	var opts;
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
		opts.dir = resolve( cwd(), opts.dir );
	} else {
		opts.dir = cwd();
	}
	if ( opts.depth === null ) {
		opts.depth = PINF;
	}
	debug( 'Options: %s.', JSON.stringify( opts ) );
	options = {
		'depth': opts.depth,
		'dev': opts.dev
	};

	debug( 'Reading installed packages...' );
	readInstalled( opts.dir, options, onRead );

	/**
	* Callback invoked after reading installed modules.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} results - results
	*/
	function onRead( error, results ) {
		if ( error ) {
			debug( 'Encountered an error while attempting to read installed packages: %s.', error.message );
			return clbk( error );
		}
		debug( 'Successfully read installed packages.' );
		results = recurse( {}, results );
		results = toArray( results );

		if ( opts.infer ) {
			debug( 'Attempting to infer license information from package files...' );
			infer( results, opts.pattern, done );
		} else {
			done( null, results );
		}
	} // end FUNCTION onRead()

	/**
	* Callback invoked after resolving licenses.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} results - results
	*/
	function done( error, results ) {
		if ( error ) {
			debug( 'Encountered an error while resolving licenses: %s.', error.message );
			return clbk( error );
		}
		debug( 'Finished resolving licenses.' );
		clbk( null, results );
	} // end FUNCTION done()
} // end FUNCTION licenses()


// EXPORTS //

module.exports = licenses;
