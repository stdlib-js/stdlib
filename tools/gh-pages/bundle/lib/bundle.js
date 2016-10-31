'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:bundle' );
var writeFile = require( 'fs' ).writeFile;
var browserify = require( 'browserify' );


// MAIN //

/**
* Bundles files into a single file using `browserify`.
*
* @param {StringArray} files - files to bundle
* @param {string} dest - output file path
* @param {Callback} clbk - callback to invoke after creating a bundle
*/
function bundle( files, dest, clbk ) {
	var opts;
	var b;

	opts = {
		'transform': [ 'envify' ],
		'plugin': [ 'proxyquire-universal' ]
	};
	debug( 'Browserify options: %s', JSON.stringify( opts ) );

	b = browserify( files, opts );

	debug( 'Creating a bundle...' );
	b.bundle( onBundle );

	/**
	* Callback invoked upon creating a bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Buffer} bundle - bundle
	*/
	function onBundle( error, bundle ) {
		var opts;
		if ( error ) {
			debug( 'Encountered an error when creating a bundle: %s', error.message );
			return clbk( error );
		}
		debug( 'Successfully created a bundle.' );

		debug( 'Writing bundle to file...' );
		opts = {
			'encoding': 'utf8'
		};
		writeFile( dest, bundle, opts, onWrite );
	} // end FUNCTION onBundle()

	/**
	* Callback invoked upon writing a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onWrite( error ) {
		if ( error ) {
			debug( 'Encountered an error when writing bundle to file: %s', error.message );
			return clbk( error );
		}
		debug( 'Successfully wrote bundle to file.' );
		clbk();
	} // end FUNCTION onWrite()
} // end FUNCTION bundle()


// EXPORTS //

module.exports = bundle;
