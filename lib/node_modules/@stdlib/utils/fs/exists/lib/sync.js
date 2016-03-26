'use strict';

// MODULES //

var fs = require( 'fs' );


// FUNCTIONS //

var fcn;
if ( typeof fs.accessSync === 'function' ) {
	fcn = fs.accessSync;
} else {
	fcn = fs.statSync;
}


// EXISTS //

/**
* FUNCTION: existsSync( path )
*	Tests whether a path exists on the filesystem.
*
* @param {String} path - path to test
* @returns {Boolean} boolean indicating whether the path exists
*/
function existsSync( path ) {
	try {
		fcn( path );
	} catch ( err ) {
		return false;
	}
	return true;
} // end FUNCTION existsSync()


// EXPORTS //

module.exports = existsSync;
