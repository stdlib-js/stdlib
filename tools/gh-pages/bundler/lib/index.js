'use strict';

/**
* Run `gh-pages` bundling tasks.
*
* @module @stdlib/tools/gh-pages/bundler
*
* @example
* var build = require( '/path/to/gh-pages/bundler' );
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

var build = require( './async.js' );


// EXPORTS //

module.exports = build;
