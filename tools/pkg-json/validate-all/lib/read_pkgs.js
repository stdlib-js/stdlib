'use strict';

// MODULES //

var debug = require( 'debug' )( 'validate-all:read-pkgs' );
var readJSON = require( '@stdlib/fs/read-json' );
var isValid = require( './../../validate' );


// MAIN //

/**
* Reads and validates `package.json` files.
*
* @private
* @param {StringArray} files - list of `package.json` files
* @param {Callback} clbk - callback to invoke upon completion
*/
function readPkgs( files, clbk ) {
	var total;
	var i;

	total = files.length;
	i = -1;

	next();

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
	*/
	function onRead( error, json ) {
		var bool;
		var j;

		j = i + 1;
		if ( error ) {
			debug( 'Encountered an error reading file: %s (%d of %d). Error: %s', files[ i ], j, total, error.message );
			return done( error );
		}
		debug( 'Successfully read file: %s (%d of %d).', files[ i ], j, total );

		debug( 'Validating file.' );
		bool = isValid( json );
		if ( bool ) {
			debug( 'File is valid.' );
		} else {
			debug( 'File is invalid: %s.', JSON.stringify( isValid.errors ) );
			error = new Error( 'invalid file. '+files[ i ]+'. '+JSON.stringify( isValid.errors[ 0 ] ) );
			return done( error );
		}
		if ( j < total ) {
			debug( 'Read %d of %d files.', j, total );
			return next();
		}
		debug( 'Successfully read all files.' );
		return done();
	} // end FUNCTION onRead()

	/**
	* Callback invoked upon reading all files.
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
} // end FUNCTION readPkgs()


// EXPORTS //

module.exports = readPkgs;
