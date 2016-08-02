'use strict';

// MODULES //

var glob = require( 'glob' );
var path = require( 'path' );
var stdlib = require( './stdlib.js' );
var isFunction = require( stdlib+'@stdlib/utils/is-function' );
var transform = require( './transform.js' );
var config = require( './config.json' );


// VARIABLES //

var ROOT = path.resolve( __dirname, stdlib );


// LS //

/**
* Asynchronously generates a list of stdlib module names.
*
* @param {Callback} clbk - callback to invoke after finding modules
* @throws {TypeError} must provide a function
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
function ls( clbk ) {
	var opts;
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Must provide a function. Value: `' + clbk + '`.' );
	}
	opts = {
		'cwd': ROOT
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
