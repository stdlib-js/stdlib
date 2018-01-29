'use strict';

/**
* rehype plugin to prevent HTML `code` elements having a `language-text` class from being syntax highlighted by `highlight.js`.
*
* @module rehype-no-highlight-text
*
* @example
* var rehype = require( 'rehype' );
* var noHighlightText = require( 'rehype-no-highlight-text' );
*
* rehype.use( noHighlightText );
*/

// MODULES //

var attacher = require( './attacher.js' );


// EXPORTS //

module.exports = attacher;
