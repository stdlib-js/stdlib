'use strict';

// MODULES //

var debug = require( 'debug' )( 'test:html' );
var resolve = require( 'path' ).resolve;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var cwd = require( '@stdlib/utils/cwd' );
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// VARIABLES //

var template = resolve( __dirname, '..', 'static/index.html' );
template = readFileSync( template, {
	'encoding': 'utf8'
});


// MAIN //

/**
* Generates an HTML file for running tests.
*
* @param {string} bundle - bundle URL
* @param {Options} [options] - options
* @param {string} [options.out] - output file path
* @param {string} [options.title] - HTML title
* @param {Callback} clbk - callback to invoke after generating file
* @throws {TypeError} first argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*
* @example
* var bundle = '/foo/bar/bundle.js';
*
* build( bundle, clbk );
*
* function clbk( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/
function build( bundle, options, clbk ) {
	var wopts;
	var opts;
	var view;
	var html;
	var err;
	var dir;
	var out;
	var cb;

	if ( !isString( bundle ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+bundle+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 3 ) {
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
	view = {
		'title': opts.title,
		'bundle': bundle
	};
	debug( 'Render options: %s', JSON.stringify( view ) );

	debug( 'Rendering...' );
	html = mustache.render( template, view );
	debug( 'Finished rendering.' );

	if ( !opts.out ) {
		// Don't release the zaglo...
		return process.nextTick( onTick( html ) );
	}
	dir = cwd();
	debug( 'Current working directory: %s', dir );

	if ( opts.out ) {
		out = resolve( dir, opts.out );
		debug( 'Destination filepath: %s', out );
	}
	debug( 'Writing to file...' );
	wopts = {
		'encoding': 'utf8'
	};
	writeFile( out, html, wopts, onWrite );

	/**
	* Returns a callback to invoke on the next tick.
	*
	* @private
	* @param {string} html - rendered HTML
	* @returns {Callback} callback
	*/
	function onTick( html ) {
		/**
		* Callback invoked on the next tick.
		*
		* @private
		*/
		return function onTick() {
			done( null, html );
		}; // end FUNCTION onTick()
	} // end FUNCTION onTick()

	/**
	* Callback invoked upon writing to file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWrite( error ) {
		if ( error ) {
			debug( 'Encountered an error when writing to file: %s', error.message );
			return done( error );
		}
		debug( 'Successfully wrote to file.' );
		done();
	} // end FUNCTION onWrite()

	/**
	* Callback invoked once finished.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} html - rendered HTML
	*/
	function done( error, html ) {
		if ( error ) {
			return cb( error );
		}
		if ( html ) {
			return cb( null, html );
		}
		cb();
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
