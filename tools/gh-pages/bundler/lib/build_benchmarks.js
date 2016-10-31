'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build-benchmarks' );
var join = require( 'path' ).join;
var glob = require( 'glob' );
var bundle = require( './bundle.js' );


// MAIN //

/**
* Builds package benchmark assets.
*
* @private
* @param {string} pkg - package
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {string} opts.pattern - glob pattern
* @param {string} opts.folder - package folder in which to look for source files
* @param {string} opts.bundle - output filename
* @param {Callback} clbk - callback to invoke after building assets
*/
function build( pkg, dest, opts, clbk ) {
	var gopts;

	dest = join( dest, opts.bundle );
	debug( 'Destination for benchmark assets: %s', dest );

	gopts = {
		'cwd': join( pkg, opts.folder ),
		'nodir': true,
		'realpath': true // resolve absolute file paths
	};
	debug( 'Glob options (benchmarks): %s', JSON.stringify( gopts ) );

	glob( opts.pattern, gopts, onGlob );

	/**
	* Callback invoked upon matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} files - matches
	*/
	function onGlob( error, files ) {
		if ( error ) {
			debug( 'Encountered an error when searching for package benchmarks: %s', error.message );
			return clbk( error );
		}
		if ( !files.length ) {
			debug( 'No benchmarks found.' );
			return clbk();
		}
		bundle( files, dest, onBundle );
	} // end FUNCTION onGlob()

	/**
	* Callback invoked upon creating a bundle.
	*
	* @private
	* @param {(Error|null)}  error - error object
	*/
	function onBundle( error ) {
		if ( error ) {
			debug( 'Encountered an error when generating a package benchmark bundle: %s', error.message );
			return clbk( error );
		}
		clbk();
	} // end FUNCTION onBundle()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
