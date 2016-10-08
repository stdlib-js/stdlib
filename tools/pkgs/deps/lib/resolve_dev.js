'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkg-deps:async:resolve-dev' );
var glob = require( 'glob' );
var pkgDeps = require( './../../../modules/pkg-deps' );
var transform = require( './transform.js' );
var setDifference = require( './set_difference.js' );


// MAIN //

/**
* Resolves package dev dependencies.
*
* @private
* @param {ObjectArray} pkgs - packages
* @param {Options} options - function options
* @param {Callback} clbk - callback
*/
function resolve( pkgs, options, clbk ) {
	var count;
	var gopts;
	var len;
	var i;

	len = pkgs.length;
	count = 0;

	debug( 'Resolving %d packages...', len );
	for ( i = 0; i < len; i++ ) {
		debug( 'Resolving package: %s (%d of %d)...', pkgs[ i ].pkg, i+1, len );
		gopts = {
			'cwd': pkgs[ i ].dir,
			'ignore': options.ignore,
			'realpath': true // absolute paths
		};
		debug( 'Glob options: %s', JSON.stringify( gopts ) );
		glob( options.pattern, gopts, onGlob( i ) );
	}

	/**
	* Returns a callback to be invoked upon matching files.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onGlob( idx ) {
		var pkg = pkgs[ idx ].pkg;
		var k = idx + 1;
		/**
		* Callback invoked upon matching files.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {(StringArray|EmptyArray)} files - matched files
		*/
		return function onGlob( error, files ) {
			var opts;
			if ( error ) {
				debug( 'Encountered an error when attempting to match files for package: %s (%d of %d). Error: %s', pkg, k, len, error.message );
				return done( error );
			}
			if ( files.length === 0 ) {
				debug( 'No files matched for package: %s (%d of %d).', pkg, k, len );
				return done();
			}
			debug( 'Successfully matched files for package: %s (%d of %d).', pkg, k, len );

			debug( 'Removing previously resolved files...' );
			files = setDifference( files, pkgs[ idx ].files );
			if ( files.length === 0 ) {
				debug( 'Package does not contain dev files: %s (%d of %d).', pkg, k, len );
				return done();
			}
			opts = {
				'walk': false, // walking is not necessary, as we globbed for everything
				'builtins': options.builtins
			};
			debug( 'Resolve options: %s', JSON.stringify( opts ) );
			pkgDeps( files, opts, onDeps( idx ) );
		}; // end FUNCTION onGlob()
	} // end FUNCTION onGlob()

	/**
	* Returns a callback to be invoked upon resolving package dependencies.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function onDeps( idx ) {
		var pkg = pkgs[ idx ].pkg;
		var k = idx + 1;
		/**
		* Callback invoked upon resolving dependencies.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {ObjectArray} results - results
		*/
		return function onDeps( error, results ) {
			if ( error ) {
				debug( 'Encountered an error when resolving package dev dependencies: %s (%d of %d). Error: %s', pkg, k, len, error.message );
				return done( error );
			}
			debug( 'Successfully resolved package dev dependencies: %s (%d of %d).', pkg, k, len );

			results = transform( results );
			pkgs[ idx ].files = pkgs[ idx ].files.concat( results.files );

			// Only include as dev dependencies dependencies which are not already listed as deps:
			pkgs[ idx ].devDeps = setDifference( results.deps, pkgs[ idx ].deps );

			done();
		}; // end FUNCTION onDeps()
	} // end FUNCTION onDeps()

	/**
	* Callback invoked upon resolving dependencies.
	*
	* @private
	* @param {(Error|null)} [error] - error object
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		count += 1;
		debug( 'Resolved %d of %d packages.', count, len );
		if ( count === len ) {
			debug( 'Resolved all packages.' );
			clbk( null, pkgs );
		}
	} // end FUNCTION done()
} // end FUNCTION resolve()


// EXPORTS //

module.exports = resolve;
