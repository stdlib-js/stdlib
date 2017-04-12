'use strict';

// MODULES //

var debug = require( 'debug' )( 'stdlib-docs:main' );
var resolve = require( 'path' ).resolve;
var isFunction = require( '@stdlib/assert/is-function' );
var copy = require( '@stdlib/utils/copy' );
var cwd = require( '@stdlib/utils/cwd' );
var menu = require( './../../stdlib-package-menu' );
var buildPkgs = require( './../../build-packages' );
var defaults = require( './defaults.json' );


// MAIN //

/**
* Builds documentation.
*
* @param {Callback} clbk - callback
* @throws {TypeError} callback argument must be a function
*
* @example
* build( clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/
function build( clbk ) {
	var opts;
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `'+clbk+'`.' );
	}
	opts = copy( defaults );
	menu( opts, onMenu );

	/**
	* Callback invoked upon creating a menu fragment.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {Object} menu - menu
	*/
	function onMenu( error, menu ) {
		var bopts;
		var dest;
		if ( error ) {
			debug( 'Encountered an error when generating a package menu: %s', error.message );
			return clbk( error );
		}
		dest = resolve( cwd(), opts.out );
		bopts = {
			'head': '<style>'+menu.css+'</style>',
			'prepend': menu.html
		};

		buildPkgs( dest, bopts, onBuild );
	} // end FUNCTION onMenu()

	/**
	* Callback invoked upon building packages.
	*
	* @private
	* @param {(Error|null)} error - error object
	*/
	function onBuild( error ) {
		if ( error ) {
			debug( 'Encountered an error when building packages: %s', error.message );
			return clbk( error );
		}
		clbk();
	} // end FUNCTION onBuild()
} // end FUNCTION build()


// EXPORTS //

module.exports = build;
