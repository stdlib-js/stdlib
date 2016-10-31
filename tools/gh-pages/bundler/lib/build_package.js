'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build-package' );
var join = require( 'path' ).join;
var mkdirp = require( 'mkdirp' );
var prefix = require( './stdlib.js' );
var copy = require( prefix+'@stdlib/utils/copy' );
var packageName = require( './package_name.js' );
var buildTests = require( './build_tests.js' );
var buildBenchmarks = require( './build_benchmarks.js' );
var buildHTML = require( './build_html.js' );


// MAIN //

/**
* Runs build tasks for an individual package.
*
* @private
* @param {string} pkg - package
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {Callback} clbk - callback to invoke after building assets
*/
function build( pkg, dest, opts, clbk ) {
	var numBundles;
	var bundles;
	var count;
	var name;

	numBundles = 2; // tests and benchmarks
	count = 0;
	bundles = {
		'tests': false,
		'benchmarks': false
	};

	name = packageName( pkg );
	debug( 'Package name: %s', name );

	dest = join( dest, name );
	debug( 'Package destination directory: %s', dest );

	mkdirp( dest, onDir );

	/**
	* Callback invoked upon creating a directory.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onDir( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating package destination directory: %s', error.message );
			return done( error );
		}
		debug( 'Successfully created package destination directory.' );
		runBundleTasks();
	} // end FUNCTION onDir()

	/**
	* Executes bundle tasks.
	*
	* @private
	*/
	function runBundleTasks() {
		debug( 'Running bundle tasks...' );

		debug( 'Building package test bundle...' );
		buildTests( pkg, dest, opts.tests, onTests );

		debug( 'Building package benchmark bundle...' );
		buildBenchmarks( pkg, dest, opts.benchmarks, onBenchmarks );
	} // end FUNCTION runTasks()

	/**
	* Callback invoked after creating a package test bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} boolean indicating whether a bundle was created
	*/
	function onTests( error, bool ) {
		if ( error ) {
			debug( 'Encountered an error when creating package test bundle: %s', error.message );
			return done( error );
		}
		debug( 'Finished test bundle task.' );
		bundles[ 'tests' ] = bool;
		onBundle();
	} // end FUNCTION onTests()

	/**
	* Callback invoked after creating a package benchmark bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating whether a bundle was created
	*/
	function onBenchmarks( error, bool ) {
		if ( error ) {
			debug( 'Encountered an error when creating package benchmark bundle: %s', error.message );
			return done( error );
		}
		debug( 'Finished benchmark bundle task.' );
		bundles[ 'benchmarks' ] = bool;
		onBundle();
	} // end FUNCTION onBenchmarks()

	/**
	* Callback invoked upon creating a bundle.
	*
	* @private
	*/
	function onBundle() {
		var bopts;
		count += 1;
		if ( count === numBundles ) {
			debug( 'Finished bundle tasks.' );

			bopts = copy( opts.html );
			bopts.benchmarks = bundles.benchmarks;
			bopts.tests = bundles.tests;

			debug( 'Building package HTML assets...' );
			buildHTML( pkg, dest, bopts, onHTML );
		}
	} // end FUNCTION onBundle()

	/**
	* Callback invoked after creating a package HTML assets.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onHTML( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating package HTML assets: %s', error.message );
			return done( error );
		}
		debug( 'Finished HTML task.' );
		done();
	} // end FUNCTION onHTML()

	/**
	* Callback invoked upon completing a build task.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function done( error ) {
		if ( error ) {
			return clbk( error );
		}
		clbk();
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
