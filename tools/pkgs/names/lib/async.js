'use strict';

// MODULES //

var glob = require( 'glob' );
var isFunction = require( '@stdlib/assert/is-function' );
var transform = require( './transform.js' );
var config = require( './config.json' );
var validate = require( './validate.js' );
var getRoot = require( './root.js' );


// MAIN //

/**
* Asynchronously generates a list of stdlib package names.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for packages
* @param {Callback} clbk - callback to invoke after finding packages
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
*
* @example
* ls( onList );
*
* function onList( error, names ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( names );
* }
*/
function ls() {
	var options;
	var clbk;
	var opts;
	var err;

	opts = {};
	if ( arguments.length < 2 ) {
		clbk = arguments[ 0 ];
	} else {
		options = arguments[ 0 ];
		clbk = arguments[ 1 ];
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	opts = {
		'cwd': getRoot( opts.dir || '' ),
		'realpath': true // return absolute file paths
	};
	glob( config.pattern, opts, onGlob );

	/**
	* Callback invoked after matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} names - list of matching files
	*/
	function onGlob( error, names ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, transform( names ) );
	} // end FUNCTION onGlob()
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
