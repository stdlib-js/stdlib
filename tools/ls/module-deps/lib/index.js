'use strict';

/**
* List module dependencies.
*
* @module @stdlib/tools/ls/module-deps
*
* @example
* var ls = require( '@stdlib/tools/ls/module-deps' );
*
* ls( onList );
*
* function onList( error, names ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( names );
* }
*/

// MODULES //

var ls = require( './async.js' );


// EXPORTS //

module.exports = ls;
