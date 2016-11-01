'use strict';

/**
* Build one or more packages.
*
* @module @stdlib/tools/gh-pages/build-packages
*
* @example
* var build = require( '/path/to/gh-pages/build-packages' );
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
