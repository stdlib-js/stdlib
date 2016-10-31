'use strict';

/**
* Generate an HTML file for running tests.
*
* @module @stdlib/tools/gh-pages/tests-html
*
* @example
* var build = require( '/path/to/tests-html' );
*
* var bundle = '/foo/bar/bundle.js';
* var out = '/foo/bar/tests.html';
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
