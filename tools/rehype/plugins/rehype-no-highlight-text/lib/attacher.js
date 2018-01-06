'use strict';

// MODULES //

var transformer = require( './transformer.js' );


// MAIN //

/**
* Attaches a plugin to a rehype processor in order to prevent HTML `code` elements having a `language-text` class from being syntax highlighted by `highlight.js`.
*
* ## Notes
*
* -   This plugin should be used _before_ applying syntax highlighting.
*
*
* @returns {Function} transformer
*/
function attacher() {
	return transformer;
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
