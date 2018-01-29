'use strict';

// MODULES //

var debug = require( 'debug' )( 'rehype-no-highlight-text:transformer' );
var visit = require( 'unist-util-visit' );
var indexOf = require( '@stdlib/utils/index-of' );


// FUNCTIONS //

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
		debug( 'Found a `code` element...' );
		className = node.properties.className || [];

		// `text` is not a registered highlight.js language, so we need to disable attempted highlighting...
		if ( indexOf( className, 'language-text' ) !== -1 ) {
			debug( 'Found a `code` element labeled as text. Adding a `no-highlight` class...' );
			className.unshift( 'no-highlight' );
		}
	}
}


// MAIN //

/**
* Transforms HTML `code` elements which have been labeled `language-text`.
*
* @private
* @param {Object} tree - abstract syntax tree (AST)
* @param {Object} file - virtual file
*/
function transformer( tree ) {
	debug( 'Processing a virtual file...' );
	visit( tree, 'element', onNode );
}


// EXPORTS //

module.exports = transformer;
