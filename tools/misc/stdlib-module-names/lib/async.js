'use strict';

// MODULES //

var glob = require( 'glob' );
var path = require( 'path' );
var stdlib = require( './stdlib.js' );
var isFunction = require( stdlib+'@stdlib/utils/is-function' );
var dirname = require( stdlib+'@stdlib/utils/dirname' );


// VARIABLES //

var PATTERN = '**/package.json';
var ROOT = path.resolve( __dirname, stdlib );
var MATCH = /\@stdlib/;


// ASYNC //

/**
* Asynchronously generates a list of stdlib module names.
*
* @param {Callback} clbk - callback to invoke after finding modules
* @throws {TypeError} must provide a function
*
* @example
* list( onList );
*
* function onList( error, names ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( names );
* }
*/
function list( clbk ) {
	var opts;
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Must provide a function. Value: `' + clbk + '`.' );
	}
	opts = {
		'cwd': ROOT
	};
	glob( PATTERN, opts, onGlob );

	/**
	* Callback invoked after matching files.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {StringArray} names - list of matching files
	*/
	function onGlob( error, names ) {
		var match;
		var name;
		var out;
		var i;
		if ( error ) {
			return clbk( error );
		}
		out = [];
		for ( i = 0; i < names.length; i++ ) {
			match = names[ i ].match( MATCH );
			if ( match ) {
				name = names[ i ].substring( match.index );
				name = dirname( name );
				out.push( name );
			}
		}
		clbk( null, out );
	} // end FUNCTION onGlob()
} // end FUNCTION list()


// EXPORTS //

module.exports = list;
