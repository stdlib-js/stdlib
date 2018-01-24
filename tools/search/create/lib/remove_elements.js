'use strict';

// MODULES //

var visit = require( 'unist-util-visit' );


// FUNCTIONS //

/**
* Removes all visited nodes.
*
* @private
* @param {Node} node - reference node
* @param {number} index - position of `node` in `parent`
* @param {Node} - parent - parent of `node`
*/
function remove( node, index, parent ) {
	if ( parent ) {
		parent.children.splice( index, 1 );
	}
}

/**
* Transforms a Markdown file by removing all code blocks and HTML elements.
*
* @private
* @param {Node} ast - root node
*/
function transformer( ast ) {
	visit( ast, 'code', remove );
	visit( ast, 'html', remove );
}


// MAIN //

/**
* Attach a plugin to a remark processor in order to remove elements.
*
* @private
* @returns {Function} transformer
*/
function attacher() {
	return transformer;
}


// EXPORTS //

module.exports = attacher;
