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
* @param {string} [dest] - output file path
* @param {Callback} clbk - callback to invoke after creating a bundle
*/
function bundle( files, dest, clbk ) {
	var opts;
	var out;
	var cb;
	var b;

	if ( arguments.length < 3 ) {
		cb = dest;
	} else {
		out = dest;
		cb = clbk;
	}
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
			return cb( error );
		}
		debug( 'Successfully created a bundle.' );
		if ( out === void 0 ) {
			return cb( null, bundle );
		}
		debug( 'Writing bundle to file...' );
		opts = {
			'encoding': 'utf8'
		};
		writeFile( out, bundle, opts, onWrite );
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
			return cb( error );
		}
		debug( 'Successfully wrote bundle to file.' );
		cb();
	} // end FUNCTION onWrite()
} // end FUNCTION bundle()


// EXPORTS //

module.exports = bundle;
