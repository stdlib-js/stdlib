'use strict';

/**
* Build benchmark assets.
*
* @module @stdlib/tools/gh-pages/benchmarks
*
* @example
* var build = require( '@stdlib/tools/gh-pages/benchmarks' );
*
* var src = '/foo/bar/benchmark';
* var out = '/beep/boop';
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js',
*     'bundle': 'benchmark_bundle.js',
*     'html': 'benchmarks.html'
* };
*
* build( src, out, opts, clbk );
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
