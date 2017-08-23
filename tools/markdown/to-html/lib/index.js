'use strict';

/**
* Convert Markdown to HTML.
*
* @module @stdlib/tools/markdown/to-html
*
* @example
* var toHTML = require( '@stdlib/tools/markdown/to-html' );
*
* var markdown = '# Beep\n> Boop!';
*
* toHTML( markdown, done );
*
* function done( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/

// MODULES //

var toHTML = require( './convert.js' );


// EXPORTS //

module.exports = toHTML;
