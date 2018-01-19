'use strict';

// MODULES //

var debug = require( 'debug' )( 'licenses:infer' );
var glob = require( 'glob' );
var getKeys = require( 'object-keys' ).shim();
var readFiles = require( './read_files.js' );
var inferLicense = require( './infer_license.js' );


// MAIN //

/**
* Infers license information from file content.
*
* @private
* @param {ObjectArray} pkgs - package data
* @param {string} pattern - glob pattern
* @param {Callback} clbk - callback to invoke upon completion
*/
function infer( pkgs, pattern, clbk ) {
	var count;
	var opts;
	var dir;
	var i;

	debug( 'Searching for package files to infer license information for %d packages...', pkgs.length );
	count = 0;
	for ( i = 0; i < pkgs.length; i++ ) {
		dir = pkgs[ i ].pkg;
		opts = {
			'dir': dir,
			'nocase': true,
			'nodir': true,
			'realpath': true
		};
		debug( 'Searching for package files in directory: %s. Pattern: %s.', dir, pattern );
		glob( dir+'/'+pattern, opts, onGlobFactory( i ) );
	}
	/**
	* Returns a callback to be invoked after matching files.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onGlobFactory( idx ) {
		var pkg = pkgs[ idx ].pkg;
		return onGlob;

		/**
		* Callback invoked after matching files.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {(StringArray|EmptyArray)} files - matching files
		* @returns {void}
		*/
		function onGlob( error, files ) {
			if ( error ) {
				debug( 'Encountered an error when searching for files in directory: %s. Error: %s.', pkg, error.message );
				return clbk( error );
			}
			debug( 'Found %d files matching search criteria in directory: %s.', files.length, pkg );
			readFiles( files, onRead );
		} // end FUNCTION onGlobFactory()

		/**
		* Callback invoked upon reading files.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {Object} files - files
		* @returns {void}
		*/
		function onRead( error, files ) {
			var licenses;
			var keys;
			var key;
			var i;
			var j;
			if ( error ) {
				debug( 'Encountered an error while reading files in directory: %s. Error: %s.', pkg, error.message );
				return clbk( error );
			}
			count += 1;

			keys = getKeys( files );
			debug( 'Read %d files in directory: %s.', keys.length, pkg );

			if ( keys.length ) {
				debug( 'Attempting to infer licenses from file content...' );
				for ( i = 0; i < keys.length; i++ ) {
					key = keys[ i ];
					licenses = inferLicense( files[ key ] );

					debug( 'From file %s, inferred the following licenses: %s.', key, licenses.join( ',' ) || '(none)' );
					for ( j = 0; j < licenses.length; j++ ) {
						pkgs[ idx ].licenses.push({
							'src': key,
							'name': licenses[ j ]
						});
					}
				}
			}
			debug( 'Finished processing %d of %d packages.', count, pkgs.length );
			if ( count === pkgs.length ) {
				debug( 'Finished searching package files.' );
				clbk( null, pkgs );
			}
		} // end FUNCTION onRead()
	} // end FUNCTION onGlob()
} // end FUNCTION infer()


// EXPORTS //

module.exports = infer;
