'use strict';

/**
* Build assets for running tests in a web browser.
*
* @module @stdlib/tools/test/browser-build
*
* @example
* var build = require( '@stdlib/tools/test/browser-build' );
*
* var root = '/foo/bar/test';
* var out = '/beep/boop';
*
* var opts = {
*     'pattern': '\*\*\/test*.js',
*     'bundle': 'test_bundle.js',
*     'html': 'tests.html'
* };
*
* build( root, out, opts, clbk );
*
* function clbk( error, bool ) {
*     if ( error ) {
*         throw error;
*     }
*     if ( bool ) {
*         console.log( 'Success!' );
*     } else {
*         console.log( 'No generated assets.' );
*     }
* }
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
