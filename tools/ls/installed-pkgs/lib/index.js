'use strict';

/**
* List installed package dependencies.
*
* @module @stdlib/tools/ls/installed-pkgs
*
* @example
* var pkgs = require( '@stdlib/tools/ls/installed-pkgs' );
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

var pkgs = require( './installed_pkgs.js' );


// EXPORTS //

module.exports = pkgs;
