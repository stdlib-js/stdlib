'use strict';

/**
* List package dependencies.
*
* @module @stdlib/tools/ls/pkgs
*
* @example
* var pkgs = require( '@stdlib/tools/ls/pkgs' );
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

var pkgs = require( './pkgs.js' );


// EXPORTS //

module.exports = pkgs;
