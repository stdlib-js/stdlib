'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build' );
var join = require( 'path' ).join;
var prefix = require( './stdlib.js' );
var copy = require( prefix+'@stdlib/utils/copy' );
var buildPkg = require( './../../package' );
var packageName = require( './package_name.js' );


// MAIN //

/**
* Builds one or more packages.
*
* @private
* @param {StringArray} pkgs - list of package paths
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {Callback} clbk - callback to invoke upon completion
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
		var bopts;
		var name;
		var pkg;
		var out;

		i += 1;
		pkg = pkgs[ i ];

		name = packageName( pkg );
		debug( 'Package name: %s', name );

		out = join( dest, name );
		debug( 'Destination directory: %s', out );

		bopts = {};
		bopts.title = name;
		bopts.mount = '/' + name + '/';

		bopts.tests = copy( opts.tests );
		bopts.tests.title = name + ' - Tests';

		bopts.benchmarks = copy( opts.benchmarks );
		bopts.benchmarks.title = name + ' - Benchmarks';

		debug( 'Build options: %s', JSON.stringify( bopts ) );

		debug( 'Building package: %s (%d of %d)', pkg, i+1, len );
		buildPkg( pkg, out, bopts, onBuild( i ) );
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
