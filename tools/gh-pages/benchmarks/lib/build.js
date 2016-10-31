'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:benchmarks' );
var resolve = require( 'path' ).resolve;
var join = require( 'path' ).join;
var bundle = require( './../../benchmarks-bundle' );
var html = require( './../../benchmarks-html' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Builds assets.
*
* @param {string} dir - root directory
* @param {string} out - output directory
* @param {Options} [options] - options
* @param {string} [options.pattern] - glob pattern
* @param {string} [options.bundle] - output bundle
* @param {string} [options.mount] - URL path on which to mount a bundle
* @param {string} [options.html] - output HTML filename
* @param {string} [options.title] - HTML title
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*/
function build( dir, out, options, clbk ) {
	var bopts;
	var opts;
	var bout;
	var err;
	var cb;
	var d;

	if ( !isString( dir ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+dir+'`.' );
	}
	if ( !isString( out ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be a string. Value: `'+out+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 4 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	d = cwd();
	debug( 'Current working directory: %s', d );

	dir = resolve( d, dir );
	debug( 'Root directory: %s', dir );

	out = resolve( d, out );
	debug( 'Output directory: %s', out );

	bout = join( out, opts.bundle );
	debug( 'Bundle output: %s', bout );

	bopts = {
		'pattern': opts.pattern
	};
	debug( 'Bundle options: %s', JSON.stringify( bopts ) );

	debug( 'Creating bundle...' );
	bundle( dir, bout, bopts, onBundle );

	/**
	* Callback invoked after creating a bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating whether a bundle was created
	*/
	function onBundle( error, bool ) {
		var bundle;
		var hopts;
		var hout;
		if ( error ) {
			debug( 'Encountered an error when creating bundle: %s', error.message );
			return done( error );
		}
		if ( !bool ) {
			debug( 'No bundle created.' );
			return done( null, false );
		}
		debug( 'Successfully created bundle.' );

		bundle = join( opts.mount, opts.bundle );
		debug( 'Bundle URL: %s', bundle );

		hout = join( out, opts.html );
		debug( 'HTML output: %s', hout );

		hopts = {
			'title': opts.title
		};
		debug( 'HTML options: %s', JSON.stringify( hopts ) );

		debug( 'Creating HTML...' );
		html( bundle, hout, hopts, onHTML );
	} // end FUNCTION onBundle()

	/**
	* Callback invoked after generating HTML.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onHTML( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating HTML: %s', error.message );
			return done( error );
		}
		debug( 'Successfully created HTML.' );
		done( null, true );
	} // end FUNCTION onHTML()

	/**
	* Callback invoked after completing build tasks.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating whether a bundle was created
	*/
	function done( error, bool ) {
		if ( error ) {
			return cb( error );
		}
		clbk( null, bool );
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
