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
*     'title': 'beep boop',
*     'out': '/foo/bar/index.html'
* };
*
* var src = '/beep/boop/README.md';
*
* convert( src, opts, clbk );
*
* function clbk( error ) {
*     if ( error ) {
*         throw error;
*     }
* }
*
*
* @example
* var convert = require( '/path/to/readme-to-html' );
*
* var opts = {
*     'title': 'beep boop'
* };
*
* var src = '/beep/boop/README.md';
*
* convert( src, opts, clbk );
*
* function clbk( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/

// MODULES //

var convert = require( './convert.js' );


// EXPORTS //

module.exports = convert;
