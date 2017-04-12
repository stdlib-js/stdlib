'use strict';

// MODULES //

var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var pkgTree = require( './../../../pkgs/tree' );
var toFragment = require( './../../tree-to-menu-fragment' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Generates a package HTML menu fragment.
*
* @param {Options} [options] - options
* @param {string} [options.title] - title
* @param {string} [options.url] - URL
* @param {string} [options.mount] - root URL on which to mount package paths
* @param {Callback} clbk - callback
* @throws {TypeError} callback argument must be a function
*
* @example
* menu( clbk );
*
* function clbk( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results.html );
*     // => '...'
* }
*/
function menu( options, clbk ) {
	var opts;
	var err;
	var cb;

	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		cb = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		cb = options;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+cb+'`.' );
	}
	pkgTree( onTree );

	/**
	* Callback invoked upon generating a package tree.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} tree - package tree
	*/
	function onTree( error, tree ) {
		var subtree;
		var out;
		if ( error ) {
			return cb( error );
		}
		subtree = tree[ '@stdlib' ];
		subtree.stdlib = subtree.__namespace__;
		delete subtree.__namespace__;

		out = {
			'html': toFragment( subtree, opts ),
			'css': toFragment.css
		};
		return cb( null, out );
	} // end FUNCTION onTree()
} // end FUNCTION menu()


// EXPORTS //

module.exports = menu;
