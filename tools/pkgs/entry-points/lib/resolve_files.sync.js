'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:sync:resolve-files' );
var prefix = require( './stdlib.js' );
var exists = require( prefix+'@stdlib/fs/exists' ).sync;


// MAIN //

/**
* Resolves a list of files.
*
* @private
* @param {StringArray} files - list of absolute file paths
* @returns {(StringArray|Error)} resolved files or error
*/
function resolveFiles( files ) {
	var bool;
	var file;
	var out;
	var len;
	var err;
	var i;
	var k;

	len = files.length;
	out = new Array( len );

	debug( 'Resolving %d files...', len );
	for ( i = 0; i < len; i++ ) {
		file = files[ i ];
		k = i + 1;
		debug( 'Resolving file: %s (%d of %d).', file, k, len );
		bool = exists( file );
		if ( !bool ) {
			err = new Error( 'file does not exist. Unable to resolve file: '+file+'.' );
			debug( 'Encountered an error while resolving file: %s (%d of %d). Error: %s', file, k, len, err.message );
			return err;
		}
		debug( 'Resolved file: %s (%d of %d). File: %s.', file, k, len, file );
	}
	debug( 'Resolved all files.' );
	return files;
} // end FUNCTION resolveFiles()


// EXPORTS //

module.exports = resolveFiles;
