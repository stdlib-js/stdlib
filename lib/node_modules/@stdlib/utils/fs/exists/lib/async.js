'use strict';

// MODULES //

var fs = require( 'fs' );


// FUNCTIONS //

var fcn;
if ( typeof fs.access === 'function' ) {
	fcn = fs.access;
} else {
	fcn = fs.stat;
}


// EXISTS //

/**
* FUNCTION: exists( path, clbk )
*	Tests whether a path exists on the filesystem.
*
* @param {String} path - path to test
* @param {Function} clbk - callback to invoke after testing path existence
* @returns {Void}
*/
function exists( path, clbk ) {
	fcn( path, done );

	/**
	* FUNCTION: done( error )
	*	Callback invoked performing a filesystem call.
	*
	* @private
	* @param {Error|Null} error - error object
	*/
	function done( error ) {
		if ( clbk.length === 2 ) {
			if ( error ) {
				return clbk( error, false );
			}
			return clbk( null, true );
		}
		if ( error ) {
			return clbk( false );
		}
		return clbk( true );
	}
} // end FUNCTION exists()


// EXPORTS //

module.exports = exists;
