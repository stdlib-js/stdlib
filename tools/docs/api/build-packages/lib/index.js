'use strict';

/**
* Build one or more packages.
*
* @module @stdlib/tools/docs/api/build-packages
*
* @example
* var build = require( '@stdlib/tools/docs/api/build-packages' );
*
* build( done );
*
* function done( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var build = require( './run.js' );


// EXPORTS //

module.exports = build;
