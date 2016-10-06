'use strict';

/**
* List installed package dependencies.
*
* @module @stdlib/tools/pkgs/installed
*
* @example
* var pkgs = require( '@stdlib/tools/pkgs/installed' );
*
* pkgs( onPkgs );
*
* function onPkgs( error, list ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( list );
* }
*/

// MODULES //

var pkgs = require( './installed.js' );


// EXPORTS //

module.exports = pkgs;
