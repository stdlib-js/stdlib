'use strict';

/**
* Convert a package README to HTML.
*
* @module @stdlib/tools/gh-pages/readme-to-html
*
* @example
* var convert = require( '/path/to/readme-to-html' );
*
* var opts = {
*     'title': 'beep boop'
* };
*
* var src = '/beep/boop/README.md';
* var out = '/foo/bar/index.html';
*
* convert( src, out, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*/

// MODULES //

var convert = require( './convert.js' );


// EXPORTS //

module.exports = convert;
