'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build' );
var buildPkg = require( './build_package.js' );


// MAIN //

/**
* Runs build tasks for one or more packages.
*
* @private
* @param {StringArray} pkgs - list of package paths
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {Callback} clbk - callback to invoke upon completing tasks
*/
function build( pkgs, dest, opts, clbk ) {
	var count;
	var len;
	var i;

	len = pkgs.length;
	count = 0;
	i = -1;

	debug( 'Building %d packages...', len );

	// Build one package at a time to avoid filesystem limits:
	next();

	/**
	* Builds the next package.
	*
	* @private
	*/
	function next() {
		var pkg;

		i += 1;
		pkg = pkgs[ i ];

		debug( 'Building package: %s (%d of %d)', pkg, i+1, len );
		buildPkg( pkg, dest, opts, onBuild( i ) );
	} // end FUNCTION next()

	/**
	* Returns a callback to be invoked upon building a package.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	*/
	function onBuild( idx ) {
		var pkg = pkgs[ idx ];
		var k = idx + 1;
		/**
		* Callback invoked upon building a package.
		*
		* @private
		* @param {(Error|null)} error - error object
		*/
		return function onBuild( error ) {
			if ( error ) {
				debug( 'Encountered an error when building package: %s (%d of %d)', pkg, k, len );
				return done( error );
			}
			debug( 'Successfully built package: %s (%d of %d)', pkg, k, len );
			done();
		}; // end FUNCTION onBuild()
	} // end FUNCTION onBuild()

	/**
	* Callback invoked to track build progress.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		count += 1;
		debug( 'Built %d of %d packages.', count, len );
		if ( count < len ) {
			return next();
		}
		// Finished...
		clbk();
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
