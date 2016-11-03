'use strict';

/**
* Build documentation.
*
* @module @stdlib/tools/gh-pages/stdlib-docs
*
* @example
* var build = require( '/path/to/gh-pages/stdlib-docs' );
*
* build( clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;

