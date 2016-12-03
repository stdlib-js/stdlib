'use strict';

// MODULES //

var exists = require( '@stdlib/fs/exists' );


// MAIN //

/**
* Filters out non-existing file paths.
*
* @private
* @param {StringArray} files - file paths
* @param {Callback} clbk - callback function
*/
function getExisting( files, clbk ) {
	var count = 0;
	var out = [];
	var i;

	for ( i = 0; i < files.length; i++ ) {
		exists( files[ i ], makeCallback( files[ i ] ) );
	}
	/**
	* Create a callback function with the correct file reference.
	*
	* @private
	* @param {string} file - full file path
	* @returns {Callback} callback function
	*/
	function makeCallback( file ) {
		/**
		* Appends path to output array in case the file exists. Once all checks have completed, the callback is invoked.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {boolean} boolean indicating if file exists
		*/
		return function onDone( err, bool ) {
			if ( err ) {
				console.error( err );
			}
			if ( bool ) {
				out.push( file );
			}
			count += 1;
			if ( count === files.length ) {
				clbk( null, out );
			}
		}; // end FUNCTION onDone()
	} // end FUNCTION makeCallback()
} // end FUNCTION getExisting()


// EXPORTS //

module.exports = getExisting;
