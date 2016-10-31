'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build-html' );
var join = require( 'path' ).join;
var resolve = require( 'path' ).resolve;
var exec = require( 'child_process' ).exec;
var writeFile = require( 'fs' ).writeFile;
var mustache = require( 'mustache' );
var prefix = require( './stdlib.js' );
var readFileSync = require( prefix+'@stdlib/fs/read-file' ).sync;
var exists = require( prefix+'@stdlib/fs/exists' );
var packageName = require( './package_name.js' );


// VARIABLES //

var template = resolve( __dirname, '..', 'static/index.html' );
template = readFileSync( template, {
	'encoding': 'utf8'
});


// MAIN //

/**
* Builds package HTML assets.
*
* @private
* @param {string} pkg - package
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {string} opts.src - documentation file
* @param {string} opts.index - main output filename
* @param {Object} [opts.tests] - tests filename
* @param {Object} [opts.benchmarks] - benchmarks filename
* @param {Callback} clbk - callback to invoke after building assets
*/
function build( pkg, dest, opts, clbk ) {
	var src = join( pkg, opts.src );
	debug( 'Source for HTML assets: %s', src );

	dest = join( dest, opts.index );
	debug( 'Destination for HTML assets: %s', dest );

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
			'cwd': pkg
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
			'title': packageName( pkg ),
			'tests': opts.tests,
			'benchmarks': opts.benchmarks
		};
		debug( 'Render options: %s', JSON.stringify( view ) );

		view.docs = stdout.toString();

		debug( 'Rendering...' );
		html = mustache.render( template, view );
		debug( 'Finished rendering.' );

		debug( 'Writing to file...' );
		wopts = {
			'encoding': 'utf8'
		};
		writeFile( dest, html, wopts, onWrite );
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
	* Callback invoked upon building assets.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		clbk();
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
