'use strict';

/**
* Convert Markdown to Virtual DOM.
*
* @module @stdlib/tools/markdown/to-vdom
*
* @example
* var toVirtualDOM = require( '@stdlib/tools/markdown/to-vdom' );
*
* var markdown = '# Beep\n> Boop!';
*
* var vtree = toVirtualDOM( markdown );
*/

// MODULES //

var toVirtualDOM = require( './convert.js' );


// EXPORTS //

module.exports = toVirtualDOM;
