'use strict';

// MODULES //

var prefix = require( './stdlib.js' );
var dirname = require( prefix+'@stdlib/utils/dirname' );
var resolveParentPath = require( prefix+'@stdlib/fs/resolve-parent-path' );


// MAIN //

/**
* Resolves a package directory.
*
* @private
* @param {string} main - main file path
* @param {Callback} clbk - callback to invoke after resolving a package directory
*/
function resolveDir( main, clbk ) {
	var opts = {
		'dir': dirname( main )
	};
	resolveParentPath( 'package.json', opts, onPath );

	/**
	* Callback invoked upon resolving a `package.json`.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(string|null)} path - path or null
	*/
	function onPath( error, path ) {
		if ( error ) {
			return clbk( error );
		}
		if ( path === null ) {
			error = new Error( 'unexpected error. Unable to resolve package directory as unable to find a `package.json` in a parent directory.' );
			return clbk( error );
		}
		clbk( null, dirname( path ) );
	} // end FUNCTION onPath()
} // end FUNCTION resolveDir()


// EXPORTS //

module.exports = resolveDir;
