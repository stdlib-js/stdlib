'use strict';

// MODULES //

var createDebug = require( 'debug' );
var resolve = require( 'path' ).resolve;
var readInstalled = require( 'read-installed' );
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var PINF = require( '@stdlib/math/constants/float64-pinf' );
var DEFAULTS = require( './defaults.json' );
var validate = require( './validate.js' );
var recurse = require( './recurse.js' );
var toArray = require( './to_array.js' );


// FUNCTIONS //

var debug = createDebug( 'installed-pkgs:main' );


// MAIN //

/**
* Generates a list of installed package dependencies.
*
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search
* @param {NonNegativeInteger} [options.depth] - search depth
* @param {boolean} [options.dev=true] - boolean indicating whether to include dev dependencies
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} must provide a function
*
* @example
* pkgs( onPkgs );
*
* function onPkgs( error, list ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( list );
* }
*/
function pkgs() {
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
		'dev': opts.dev,
		'log': createDebug( 'installed-pkgs:read-installed' )
	};

	debug( 'Reading installed packages...' );
	readInstalled( opts.dir, options, onRead );

	/**
	* Callback invoked after reading installed packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} results - results
	*/
	function onRead( error, results ) {
		if ( error ) {
			debug( 'Encountered an error while attempting to read installed packages: %s.', error.message );
			return done( error );
		}
		debug( 'Successfully read installed packages.' );
		results = recurse( {}, results );
		done( null, toArray( results ) );
	} // end FUNCTION onRead()

	/**
	* Callback invoked after generating a list of package dependencies.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(StringArray|EmptyArray)} results - results
	*/
	function done( error, results ) {
		if ( error ) {
			debug( 'Encountered an error while generating a list of package dependencies: %s.', error.message );
			return clbk( error );
		}
		debug( 'Finished resolving package dependencies.' );
		clbk( null, results );
	} // end FUNCTION done()
} // end FUNCTION pkgs()


// EXPORTS //

module.exports = pkgs;
