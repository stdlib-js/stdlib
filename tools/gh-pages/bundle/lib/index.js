'use strict';

/**
* Bundle files into a single file using `browserify`.
*
* @module @stdlib/tools/gh-pages/bundle
*
* @example
* var bundle = require( '/path/to/bundle' );
*
* var files = [ '/foo/bar.js', '/beep/boop.js' ];
* var dest = '/bip/bundle.js';
*
* bundle( files, dest, clbk );
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
