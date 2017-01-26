'use strict';

// MODULES //

var debug = require( 'debug' )( 'pkgs:add-ons:read-pkgs' );
var resolve = require( 'path' ).resolve;
var readJSON = require( '@stdlib/fs/read-json' );
var dirname = require( '@stdlib/utils/dirname' );
var exists = require( '@stdlib/fs/exists' );


// MAIN //

/**
* Reads `package.json` files and resolves `binding.gyp` files.
*
* @private
* @param {StringArray} files - list of `package.json` files
* @param {Callback} clbk - callback to invoke upon completion
* @returns {void}
*/
function readPkgs( files, clbk ) {
	var total;
	var out;
	var i;

	total = files.length;
	i = -1;
	out = [];

	return next();

	/**
	* Reads the next `package.json` file.
	*
	* @private
	*/
	function next() {
		i += 1;
		debug( 'Reading package %d of %d: %s', i+1, total, files[ i ] );
		readJSON( files[ i ], onRead );
	} // end FUNCTION next()

	/**
	* Callback invoked upon reading a `package.json` file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} json - JSON object
	* @returns {void}
	*/
	function onRead( error, json ) {
		var fpath;
		var dir;
		var j;

		j = i + 1;
		if ( error ) {
			debug( 'Encountered an error when reading file: %s (%d of %d). Error: %s', files[ i ], j, total, error.message );
			return done( error );
		}
		debug( 'Successfully read file: %s (%d of %d).', files[ i ], j, total );

		if ( json.gypfile === true ) {
			dir = dirname( files[ i ] );
			fpath = resolve( dir, 'binding.gyp' );

			debug( 'Resolving binding...' );
			return exists( fpath, onExists );
		}
		return done();
	} // end FUNCTION onRead()

	/**
	* Callback invoked upon testing if a file exists.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Boolean} bool - boolean indicating whether a file exists
	* @returns {void}
	*/
	function onExists( error, bool ) {
		var j = i + 1;
		if ( error ) {
			debug( 'Encountered an error when testing for binding: %s (%d of %d). Error: %s', files[ i ], j, total, error.message );
		} else if ( bool ) {
			debug( 'Resolved binding.' );
			out.push( files[ i ] );
		} else {
			debug( 'Unable to resolve binding.' );
		}
		return done();
	} // end FUNCTION onRead()

	/**
	* Callback invoked upon reading all packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @returns {void}
	*/
	function done( error ) {
		var j;
		if ( error ) {
			return clbk( error );
		}
		j = i + 1;
		if ( j < total ) {
			debug( 'Read %d of %d packages.', j, total );
			return next();
		}
		debug( 'Successfully read all packages.' );
		return clbk( null, out );
	} // end FUNCTION done()
} // end FUNCTION readPkgs()


// EXPORTS //

module.exports = readPkgs;
