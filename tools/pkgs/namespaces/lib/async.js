'use strict';

// MODULES //

var pkgNames = require( './../../names' );
var isFunction = require( '@stdlib/assert/is-function' );
var validate = require( './validate.js' );
var filter = require( './filter.js' );


// MAIN //

/**
* Asynchronously lists stdlib namespaces.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for namespaces
* @param {Callback} clbk - callback to invoke after finding namespaces
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
	pkgNames( opts, onPkgs );

	/**
	* Callback invoked after finding packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} names - list of package names
	*/
	function onPkgs( error, names ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, filter( names ) );
	} // end FUNCTION onPkgs()
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
