'use strict';

/**
* Build benchmark assets.
*
* @module @stdlib/tools/gh-pages/benchmarks
*
* @example
* var build = require( '/path/to/benchmarks' );
*
* var src = '/foo/bar/benchmark';
* var out = '/beep/boop';
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js',
*     'bundle': 'benchmark_bundle.js',
*     'html': 'benchmarks.html'
* };
*/

// MODULES //

var build = require( './build.js' );


// EXPORTS //

module.exports = build;
