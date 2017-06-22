'use strict';

// MODULES //

var debug = require( 'debug' )( 'docs:package:browser-build' );
var join = require( 'path' ).join;
var mkdirp = require( 'mkdirp' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var tests = require( './../../../../test/browser-build' );
var benchmarks = require( './../../../../benchmarks/browser-build' );
var readmeToHTML = require( './../../../../readme/to-html' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Builds package assets.
*
* @private
* @param {string} pkg - package directory
* @param {string} dest - destination directory
* @param {Options} [options] - options
* @param {string} [options.readme] - README filename
* @param {string} [options.index] - index filename
* @param {string} [options.title] - index title
* @param {string} [options.mount] - URL mount
* @param {string} [options.prepend] - content to prepend to HTML body
* @param {string} [options.append] - content to append to HTML body
* @param {string} [options.head] - content to insert into HTML head
* @param {Object} [options.tests] - tests options
* @param {string} [options.tests.pattern] - glob pattern
* @param {string} [options.tests.bundle] - bundle filename
* @param {string} [options.tests.folder] - folder name
* @param {string} [options.tests.html] - HTML filename
* @param {string} [options.tests.title] - HTML title
* @param {Object} [options.benchmarks] - benchmarks options
* @param {string} [options.benchmarks.pattern] - benchmarks glob pattern
* @param {string} [options.benchmarks.bundle] - bundle filename
* @param {string} [options.benchmarks.folder] - folder name
* @param {string} [options.benchmarks.html] - HTML filename
* @param {string} [options.benchmarks.title] - HTML title
* @param {Callback} clbk - callback to invoke after completing build
* @throws {TypeError} first argument must be a string
* @throws {TypeError} second argument must be a string
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} callback argument must be a function
* @returns {void}
*/
function build( pkg, dest, options, clbk ) {
	var numBuilds;
	var builds;
	var count;
	var opts;
	var err;
	var cb;

	if ( !isString( pkg ) ) {
		throw new TypeError( 'invalid input argument. First argument must be a string. Value: `'+pkg+'`.' );
	}
	if ( !isString( dest ) ) {
		throw new TypeError( 'invalid input argument. Second argument must be a string. Value: `'+dest+'`.' );
	}
	opts = copy( defaults );
	if ( arguments.length < 4 ) {
		cb = options;
	} else {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	numBuilds = 2; // tests and benchmarks
	count = 0;
	builds = {
		'tests': false,
		'benchmarks': false
	};

	debug( 'Package directory: %s', pkg );
	debug( 'Destination directory: %s', dest );

	debug( 'Creating destination directory...' );
	return mkdirp( dest, onDir );

	/**
	* Callback invoked upon creating a directory.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @returns {void}
	*/
	function onDir( error ) {
		if ( error ) {
			debug( 'Encountered an error when creating destination directory: %s', error.message );
			return done( error );
		}
		debug( 'Successfully created destination directory.' );
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
			'title': opts.tests.title,
			'mount': opts.mount,
			'html': opts.tests.html
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
			'title': opts.benchmarks.title,
			'mount': opts.mount,
			'html': opts.benchmarks.html
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

		src = join( pkg, opts.readme );
		out = join( dest, opts.index );

		bopts = {};
		bopts.out = out;
		bopts.title = opts.title;
		bopts.head = opts.head;
		bopts.prepend = opts.prepend;
		bopts.append = opts.append;

		// TODO: support either a provided source URL or attempt to resolve a source URL
		bopts.source = 'https://github.com/stdlib-js/stdlib';
		if ( builds.tests ) {
			bopts.tests = join( opts.mount, opts.tests.html );
		} else {
			bopts.tests = '';
		}
		if ( builds.benchmarks ) {
			bopts.benchmarks = join( opts.mount, opts.benchmarks.html );
		} else {
			bopts.benchmarks = '';
		}
		debug( 'Building HTML assets...' );
		readmeToHTML( src, bopts, onHTML );
	} // end FUNCTION buildHTML()

	/**
	* Callback invoked after building tests.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating whether a build generated artifacts
	* @returns {void}
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
	* @returns {void}
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
	* @returns {void}
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
	* @returns {void}
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
