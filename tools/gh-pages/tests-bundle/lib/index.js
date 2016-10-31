'use strict';

/**
* Bundle test files into a single file.
*
* @module @stdlib/tools/gh-pages/tests-bundle
*
* @example
* var bundle = require( '/path/to/tests-bundle' );
*
* var opts = {
*     'pattern': '\*\*\/test*.js'
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
