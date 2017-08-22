'use strict';

// MODULES //

var visit = require( 'unist-util-visit' );
var indexOf = require( '@stdlib/utils/index-of' );


// MAIN //

/**
* Returns a transformer which pre-processes HTML nodes before applying syntax highlighting.
*
* @private
* @returns {Function} transformer
*/
function attacher() {
	return transformer;

	/**
	* Pre-processes HTML nodes.
	*
	* @private
	* @param {Object} tree - abstract syntax tree (AST)
	* @param {Object} file - file
	* @param {Object} options - options
	*/
	function transformer( tree ) {
		visit( tree, 'element', onNode );
	} // end FUNCTION transformer()

	/**
	* Callback invoked upon visiting a tree node.
	*
	* @private
	* @param {Object} node - AST node
	* @param {number} index - position of node in parent
	* @param {Object} parent - parent AST node
	*/
	function onNode( node, index, parent ) {
		var className;
		if ( parent && parent.tagName === 'pre' && node.tagName === 'code' ) {
			className = node.properties.className || [];

			// `text` is not a registered highlight.js language, so we need to disable attempted highlighting...
			if ( indexOf( className, 'language-text' ) !== -1 ) {
				className.unshift( 'no-highlight' );
			}
		}
	} // end FUNCTION onNode()
} // end FUNCTION attacher()


// EXPORTS //

module.exports = attacher;
