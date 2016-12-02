'use strict';

/**
* Bundle test files into a single file.
*
* @module @stdlib/tools/test/bundle
*
* @example
* var bundle = require( '@stdlib/tools/test/bundle' );
*
* var opts = {
*     'pattern': '\*\*\/test*.js',
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
* var bundle = require( '@stdlib/tools/test/bundle' );
*
* var opts = {
*     'pattern': '\*\*\/test*.js'
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
