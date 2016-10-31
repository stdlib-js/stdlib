'use strict';

/**
* Generate an HTML file for running benchmarks.
*
* @module @stdlib/tools/gh-pages/benchmarks-html
*
* @example
* var build = require( '/path/to/benchmarks-html' );
*
* var bundle = '/foo/bar/bundle.js';
* var out = '/foo/bar/benchmarks.html';
*
* build( bundle, out, clbk );
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
