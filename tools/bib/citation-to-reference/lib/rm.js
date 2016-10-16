'use strict';

// MODULES //

var debug = require( 'debug' )( 'to-reference:rm' );
var unlink = require( 'fs' ).unlink;


// MAIN //

/**
* Deletes a file.
*
* @private
* @param {string} file - file to remove
*/
function rm( file ) {
	debug( 'Deleting file: %s.', file );
	unlink( file, onDelete );

	/**
	* Callback invoked upon removing a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onDelete( error ) {
		if ( error ) {
			debug( 'Encountered an error when attempting to delete file: %s. Error: %s', file, error.message );
			return;
		}
		debug( 'Successfully deleted file: %s', file );
	} // end FUNCTION onDelete()
} // end FUNCTION rm()


// EXPORTS //

module.exports = rm;
