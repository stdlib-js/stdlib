'use strict';

/**
* Bundle benchmarks files into a single file.
*
* @module @stdlib/tools/gh-pages/bundle-benchmarks
*
* @example
* var bundle = require( '/path/to/bundle-benchmarks' );
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js'
* };
*
* var root = '/beep/boop';
* var dest = '/foo/bar/bundle.js';
*
* bundle( root, dest, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var bundle = require( './bundle.js' );


// EXPORTS //

module.exports = bundle;
