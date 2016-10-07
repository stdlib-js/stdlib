'use strict';

// MODULES //

var debug = require( 'debug' )( 'entry-points:async:resolve' );
var resolve = require( 'resolve' );
var resolveDir = require( './resolve_dir.js' );


// MAIN //

/**
* Resolves a list of packages.
*
* @private
* @param {StringArray} pkgs - list of packages
* @param {string} dir - base directory from which to resolve packages
* @param {Callback} clbk - callback to invoke after resolving packages
*/
function getPkgs( pkgs, dir, clbk ) {
	var count;
	var opts;
	var len;
	var out;
	var i;

	len = pkgs.length;
	debug( 'Resolving %d packages...', len );

	out = new Array( len );
	count = 0;
	for ( i = 0; i < len; i++ ) {
		debug( 'Resolving package: %s (%d of %d).', pkgs[ i ], i+1, len );
		opts = {
			'basedir': dir
		};
		out[ i ] = {
			'id': null,
			'pkg': pkgs[ i ],
			'dir': null,
			'data': null
		};
		resolve( pkgs[ i ], opts, onResolve( i ) );
	}
	/**
	* Returns a callback to be invoked upon resolving a package.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onResolve( idx ) {
		var name = pkgs[ idx ];
		var k = idx + 1;

		/**
		* Callback invoked upon resolving a package directory.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {string} dir - package directory
		*/
		function onDir( error, dir ) {
			if ( error ) {
				debug( 'Encountered an error while resolving package directory: %s (%d of %d). Error: %s', name, k, len, error.message );
				return clbk( error );
			}
			debug( 'Resolved package directory for package: %s (%d of %d). Dir: %s', name, k, len, dir );
			out[ idx ].dir = dir;

			count += 1;
			debug( 'Resolved %d of %d packages.', count, len );
			if ( count === len ) {
				debug( 'Resolved all packages.' );
				clbk( null, out );
			}
		} // end FUNCTION onDir()

		/**
		* Callback to be invoked upon resolving a package.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {string} main - main entry point
		* @param {Object} [pkg] - `package.json` contents
		*/
		return function onResolve( error, main, pkg ) {
			if ( error ) {
				debug( 'Encountered an error while resolving package: %s (%d of %d). Error: %s', name, k, len, error.message );
				return clbk( error );
			}
			debug( 'Resolved package: %s (%d of %d). Main: %s.', name, k, len, main );
			out[ idx ].id = main;
			if ( !pkg ) {
				pkg = {};
			}
			out[ idx ].data = pkg;

			debug( 'Resolving package directory for package: %s (%d of %d)...', name, k, len );
			resolveDir( main, onDir );
		}; // end FUNCTION onResolve()
	} // end FUNCTION onResolve()
} // end FUNCTION getPkgs()


// EXPORTS //

module.exports = getPkgs;
