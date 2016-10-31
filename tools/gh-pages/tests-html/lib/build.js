'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:tests-html' );
var resolve = require( 'path' ).resolve;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var readFileSync = require( prefix+'@stdlib/fs/read-file' ).sync;
var cwd = require( prefix+'@stdlib/utils/cwd' );
var copy = require( prefix+'@stdlib/utils/copy' );
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
* @param {string} bundle - bundle file path
* @param {string} out - output file path
* @param {Options} [options] - options
* @param {string} [options.title] - HTML title
* @param {Callback} clbk - callback to invoke after generating file
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
*/
function build( bundle, out, options, clbk ) {
	var wopts;
	var opts;
	var view;
	var html;
	var err;
	var dir;
	var cb;

	if ( !isString( bundle ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+bundle+'`.' );
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
	dir = cwd();
	debug( 'Current working directory: %s', dir );

	out = resolve( dir, out );
	debug( 'Destination filepath: %s', out );

	view = {
		'title': opts.title,
		'bundle': bundle
	};
	debug( 'Render options: %s', JSON.stringify( view ) );

	debug( 'Rendering...' );
	html = mustache.render( template, view );
	debug( 'Finished rendering.' );

	debug( 'Writing to file...' );
	wopts = {
		'encoding': 'utf8'
	};
	writeFile( out, html, wopts, onWrite );

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
	*/
	function done( error ) {
		if ( error ) {
			return cb( error );
		}
		cb();
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
