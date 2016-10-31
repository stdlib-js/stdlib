'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build-package' );
var join = require( 'path' ).join;
var mkdirp = require( 'mkdirp' );
var packageName = require( './package_name.js' );
var buildTests = require( './build_tests.js' );
var buildBenchmarks = require( './build_benchmarks.js' );
var buildHTML = require( './build_html.js' );


// VARIABLES //

var TASKS = [ 'tests', 'benchmarks', 'HTML' ];


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
	var count = 0;
	var name;

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
		runTasks();
	} // end FUNCTION onDir()

	/**
	* Executes tasks.
	*
	* @private
	*/
	function runTasks() {
		debug( 'Running tasks...' );

		debug( 'Building package test bundle...' );
		buildTests( pkg, dest, opts.tests, onTests );

		debug( 'Building package benchmark bundle...' );
		buildBenchmarks( pkg, dest, opts.benchmarks, onBenchmarks );

		debug( 'Building package HTML assets...' );
		buildHTML( pkg, dest, opts.html, onHTML );
	} // end FUNCTION runTasks()

	/**
	* Callback invoked after creating a package test bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onTests( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating package test bundle: %s', error.message );
			return done( error );
		}
		done( null, 'tests' );
	} // end FUNCTION onTests()

	/**
	* Callback invoked after creating a package benchmark bundle.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onBenchmarks( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating package benchmark bundle: %s', error.message );
			return done( error );
		}
		done( null, 'benchmarks' );
	} // end FUNCTION onBenchmarks()

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
		done( null, 'HTML' );
	} // end FUNCTION onHTML()

	/**
	* Callback invoked upon completing a build task.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} task - task name
	*/
	function done( error, task ) {
		if ( error ) {
			return clbk( error );
		}
		debug( 'Completed task: %s.', task );

		count += 1;
		debug( 'Completed %d of %d tasks', count, TASKS.length );
		if ( count === TASKS.length ) {
			clbk();
		}
	} // end FUNCTION done()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
