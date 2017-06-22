'use strict';

// MODULES //

var debug = require( 'debug' )( 'docs:packages:build' );
var join = require( 'path' ).join;
var copy = require( '@stdlib/utils/copy' );
var buildPkg = require( './../../pkg-browser-build' );
var packageName = require( './package_name.js' );


// MAIN //

/**
* Builds one or more packages.
*
* @private
* @param {StringArray} pkgs - list of package paths
* @param {string} dest - destination directory
* @param {Options} opts - options
* @param {string} opts.readme - README filename
* @param {string} opts.index - index filename
* @param {string} opts.mount - base URL mount
* @param {string} opts.prepend - content to prepend to HTML body
* @param {string} opts.append - content to append to HTML body
* @param {string} opts.head - content to insert into HTML head
* @param {Object} opts.tests - tests options
* @param {string} opts.tests.pattern - glob pattern
* @param {string} opts.tests.bundle - bundle filename
* @param {string} opts.tests.folder - folder name
* @param {string} opts.tests.html - HTML filename
* @param {string} opts.tests.title - HTML title
* @param {Object} opts.benchmarks - benchmarks options
* @param {string} opts.benchmarks.pattern - benchmarks glob pattern
* @param {string} opts.benchmarks.bundle - bundle filename
* @param {string} opts.benchmarks.folder - folder name
* @param {string} opts.benchmarks.html - HTML filename
* @param {string} opts.benchmarks.title - HTML title
* @param {Callback} clbk - callback to invoke upon completion
* @returns {void}
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
	return next();

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

		// TODO: read `package.json`
		name = packageName( pkg );
		debug( 'Package name: %s', name );

		out = join( dest, name );
		debug( 'Destination directory: %s', out );

		bopts = {};
		bopts.readme = opts.readme;
		bopts.index = opts.index;
		bopts.title = name;
		bopts.mount = opts.mount + name + '/';
		bopts.head = opts.head;
		bopts.prepend = opts.prepend;
		bopts.append = opts.append;

		bopts.tests = copy( opts.tests );
		bopts.tests.title = name + ' - Tests';

		bopts.benchmarks = copy( opts.benchmarks );
		bopts.benchmarks.title = name + ' - Benchmarks';

		debug( 'Build options: %s', JSON.stringify( bopts ) );

		debug( 'Building package: %s (%d of %d)', pkg, i+1, len );
		buildPkg( pkg, out, bopts, getClbk( i ) );
	} // end FUNCTION next()

	/**
	* Returns a callback to be invoked upon building a package.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback to be invoked upon building a package
	*/
	function getClbk( idx ) {
		var pkg = pkgs[ idx ];
		var k = idx + 1;
		return onBuild;
		/**
		* Callback invoked upon building a package.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @returns {void}
		*/
		function onBuild( error ) {
			if ( error ) {
				debug( 'Encountered an error when building package: %s (%d of %d)', pkg, k, len );
				return done( error );
			}
			debug( 'Successfully built package: %s (%d of %d)', pkg, k, len );
			done();
		} // end FUNCTION onBuild()
	} // end FUNCTION getClbk()

	/**
	* Callback invoked to track build progress.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @returns {void}
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
