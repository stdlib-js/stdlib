'use strict';

/**
* Bundle benchmarks files into a single file.
*
* @module @stdlib/tools/gh-pages/benchmarks-bundle
*
* @example
* var bundle = require( '/path/to/benchmarks-bundle' );
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js',
*     'out': '/foo/bar/bundle.js'
* };
*
* var root = '/beep/boop';
*
* bundle( root, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
* @example
* var bundle = require( '/path/to/benchmarks-bundle' );
*
* var opts = {
*     'pattern': '\*\*\/benchmark*.js'
* };
*
* var root = '/beep/boop';
*
* bundle( root, opts, clbk );
*
* function clbk( error, bundle ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( bundle.toString() );
* }
*/

// MODULES //

var bundle = require( './bundle.js' );


// EXPORTS //

module.exports = bundle;
