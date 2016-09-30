'use strict';

// MODULES //

var debug = require( 'debug' )( 'module-deps:async' );
var glob = require( 'glob' );
var prefix = require( './stdlib.js' );
var isFunction = require( prefix+'@stdlib/utils/is-function' );
var copy = require( prefix+'@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// LS //

/**
* Asynchronously generates a list of module dependencies.
*
* @param {Options} [options] - function options
* @param {string} [options.dir] - root directory from which to search for modules
* @param {string} [options.pattern] - filepath pattern
* @param {Callback} clbk - callback to invoke after finding module dependencies
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
	var gopts;
	var clbk;
	var opts;
	var err;

	opts = copy( defaults );
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
	debug( 'Options: %s', JSON.stringify( opts ) );

	gopts = {
		'cwd': opts.dir || '',
		'realpath': true // return absolute file paths
	};
	debug( 'Glob options: %s', JSON.stringify( gopts ) );

	debug( 'Searching for matching files...' );
	glob( opts.pattern, gopts, onGlob );

	/**
	* Callback invoked after matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} names - list of matching files
	*/
	function onGlob( error, names ) {
		if ( error ) {
			debug( 'Encountered an error when searching for matching files: %s', error.message );
			return clbk( error );
		}
		debug( 'Found %d matching files: %s', names.length, names.join( ',' ) );
		read( names, onRead );
	} // end FUNCTION onGlob()
} // end FUNCTION ls()


// EXPORTS //

module.exports = ls;
