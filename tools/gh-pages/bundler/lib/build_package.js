'use strict';

// MODULES //

var debug = require( 'debug' )( 'gh-pages:build:build-package' );
var join = require( 'path' ).join;
var mkdirp = require( 'mkdirp' );
var tests = require( './../../tests' );
var benchmarks = require( './../../benchmarks' );
var readmeToHTML = require( './../../readme-to-html' );
var packageName = require( './package_name.js' );


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
	var numBuilds;
	var builds;
	var count;
	var name;

	numBuilds = 2; // tests and benchmarks
	count = 0;
	builds = {
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
		runTasks();
	} // end FUNCTION onDir()

	/**
	* Executes tasks.
	*
	* @private
	*/
	function runTasks() {
		buildTests();
		buildBenchmarks();
	} // end FUNCTION runTasks()

	/**
	* Builds tests.
	*
	* @private
	*/
	function buildTests() {
		var topts;
		var dir;

		debug( 'Building package tests...' );
		dir = join( pkg, opts.tests.folder );
		topts = {
			'pattern': opts.tests.pattern,
			'bundle': opts.tests.bundle,
			'title': name+' - Tests',
			'mount': '/'+name,
			'html': opts.html.tests
		};
		tests( dir, dest, topts, onTests );
	} // end FUNCTION buildTests()

	/**
	* Builds benchmarks.
	*
	* @private
	*/
	function buildBenchmarks() {
		var topts;
		var dir;

		debug( 'Building package benchmarks...' );
		dir = join( pkg, opts.benchmarks.folder );
		topts = {
			'pattern': opts.benchmarks.pattern,
			'bundle': opts.benchmarks.bundle,
			'title': name+' - Benchmarks',
			'mount': '/'+name,
			'html': opts.html.benchmarks
		};
		benchmarks( dir, dest, topts, onBenchmarks );
	} // end FUNCTION buildBenchmarks()

	/**
	* Builds HTML assets.
	*
	* @private
	*/
	function buildHTML() {
		var bopts;
		var src;
		var out;

		src = join( pkg, opts.html.src );
		out = join( dest, opts.html.index );

		bopts = {};
		bopts.title = name;
		if ( builds.tests ) {
			bopts.tests = join( '/', name, opts.html.tests );
		} else {
			bopts.tests = '';
		}
		if ( builds.benchmarks ) {
			bopts.benchmarks = join( '/', name, opts.html.benchmarks );
		} else {
			bopts.benchmarks = '';
		}
		debug( 'Building HTML assets...' );
		readmeToHTML( src, out, bopts, onHTML );
	} // end FUNCTION buildHTML()

	/**
	* Callback invoked after building tests.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} boolean indicating whether a build generated artifacts
	*/
	function onTests( error, bool ) {
		if ( error ) {
			debug( 'Encountered an error when building tests: %s', error.message );
			return done( error );
		}
		debug( 'Finished building tests.' );
		builds[ 'tests' ] = bool;
		onTask();
	} // end FUNCTION onTests()

	/**
	* Callback invoked after building benchmarks.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating whether a build generated artifacts
	*/
	function onBenchmarks( error, bool ) {
		if ( error ) {
			debug( 'Encountered an error when building benchmarks: %s', error.message );
			return done( error );
		}
		debug( 'Finished building benchmarks.' );
		builds[ 'benchmarks' ] = bool;
		onTask();
	} // end FUNCTION onBenchmarks()

	/**
	* Callback invoked upon completing a task.
	*
	* @private
	*/
	function onTask() {
		count += 1;
		if ( count === numBuilds ) {
			buildHTML();
		}
	} // end FUNCTION onTask()

	/**
	* Callback invoked after building HTML assets.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onHTML( error ) {
		if ( error ) {
			debug( 'Encountered an error when building HTML assets: %s', error.message );
			return done( error );
		}
		debug( 'Finished building HTML assets.' );
		done();
	} // end FUNCTION onHTML()

	/**
	* Callback invoked upon completing all build tasks.
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
