'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:readme-to-html' );
var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var prefix = require( './stdlib.js' );
var isString = require( prefix+'@stdlib/utils/is-string' ).isPrimitive;
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var readFileSync = require( prefix+'@stdlib/fs/read-file' ).sync;
var exists = require( prefix+'@stdlib/fs/exists' );
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
* Converts a README to HTML.
*
* @private
* @param {string} src - input file path
* @param {string} out - output file path
* @param {Options} [options] - options
* @param {string} [options.title] - HTML title
* @param {Object} [options.tests] - tests file path
* @param {Object} [options.benchmarks] - benchmarks file path
* @param {Callback} clbk - callback to invoke after converting README
*/
function convert( src, out, options, clbk ) {
	var opts;
	var err;
	var dir;
	var cb;

	if ( !isString( src ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+src+'`.' );
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

	src = resolve( dir, src );
	debug( 'Source filepath: %s', src );

	out = resolve( dir, out );
	debug( 'Destination filepath: %s', out );

	debug( 'Testing if source file exists...' );
	exists( src, onExists );

	/**
	* Callback invoked upon testing for file existence.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating if a file exists
	*/
	function onExists( error, bool ) {
		var opts;
		var cmd;
		if ( !bool ) {
			debug( 'Source file does not exist.' );
			return done();
		}
		cmd = 'pandoc';
		cmd += ' --from=markdown_github';
		cmd += ' --to=html';
		cmd += ' '+src;

		debug( 'Converting file to HTML...' );
		opts = {
			'cwd': dir
		};
		debug( 'Command: %s', cmd );
		exec( cmd, opts, onExec );
	} // end FUNCTION onExists()

	/**
	* Callback invoked when a child process terminates.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Buffer} stdout - standard output
	* @param {Buffer} stderr - standard error
	*/
	function onExec( error, stdout, stderr ) {
		var wopts;
		var view;
		var html;
		if ( error ) {
			debug( 'Encountered an error when converting file: %s', error.message );
			return done( error );
		}
		debug( 'Command stderr: %s', stderr.toString() );
		debug( 'Successfully converted file.' );

		view = {
			'title': opts.title,
			'tests': opts.tests,
			'benchmarks': opts.benchmarks
		};
		debug( 'Render options: %s', JSON.stringify( view ) );

		view.readme = stdout.toString();

		debug( 'Rendering...' );
		html = mustache.render( template, view );
		debug( 'Finished rendering.' );

		debug( 'Writing to file...' );
		wopts = {
			'encoding': 'utf8'
		};
		writeFile( out, html, wopts, onWrite );
	} // end FUNCTION onExec()

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
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
