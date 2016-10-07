'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:async:resolve-files' );
var prefix = require( './stdlib.js' );
var exists = require( prefix+'@stdlib/fs/exists' );


// MAIN //

/**
* Resolves a list of files.
*
* @private
* @param {StringArray} files - list of absolute file paths
* @param {NonNegativeInteger} idx - package index
* @param {Callback} clbk - callback to invoke after resolving files
*/
function resolveFiles( files, idx, clbk ) {
	var count;
	var out;
	var len;
	var i;

	len = files.length;
	out = new Array( len );

	debug( 'Resolving %d files...', len );
	count = 0;
	for ( i = 0; i < len; i++ ) {
		debug( 'Resolving file: %s (%d of %d).', files[ i ], i+1, len );
		exists( files[ i ], onExists( i ) );
	}
	/**
	* Returns a callback to be invoked upon determining if a file path exists.
	*
	* @private
	* @param {NonNegativeInteger} i - index
	* @returns {Callback} callback
	*/
	function onExists( i ) {
		var file = files[ i ];
		var k = i + 1;
		/**
		* Callback to be invoked upon determining if a file path exists.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {boolean} bool - boolean indicating if a file path exists
		*/
		return function onExists( error, bool ) {
			if ( error ) {
				debug( 'Encountered an error while resolving file: %s (%d of %d). Error: %s', file, k, len, error.message );
				return clbk( error );
			}
			if ( !bool ) {
				debug( 'Unable to resolve file: %s (%d of %d). File does not exist.', file, k, len );
				error = new Error( 'file does not exist. Unable to resolve file: '+file+'.' );
				return clbk( error );
			}
			debug( 'Resolved file: %s (%d of %d). File: %s.', file, k, len, file );
			out[ i ] = file;

			count += 1;
			debug( 'Resolved %d of %d files.', count, len );
			if ( count === len ) {
				debug( 'Resolved all files.' );
				clbk( null, out, idx );
			}
		}; // end FUNCTION onExists()
	} // end FUNCTION onExists()
} // end FUNCTION resolveFiles()


// EXPORTS //

module.exports = resolveFiles;
