'use strict';

// MODULES //

var visit = require( 'unist-util-visit' );


// VARIABLES //

var splice = [].splice;


// MAIN //

/**
* Retrieves all nodes of the section with the specified name and replaces the AST.
*
* @private
* @param {Node} ast - root node
* @param {string} name - section name
*/
function getSectionNodes( ast, name ) {
	var nodes = [];
	var scope = null;
	visit( ast, replacer );
	/**
	* Replaces AST by the nodes of the specified section.
	*
	* @private
	* @param {Node} node - reference node
	* @param {number} index - position of `node` in `parent`
	* @param {Node} - parent - parent of `node`
	*/
	function replacer( node, index, parent ) {
		var type = isSectionTag( node );
		if ( scope && parent === scope ) {
			if ( type === 'end' ) {
				if ( nodes ) {
					// Replace scope by nodes belonging to the given section...
					nodes = [ { type: 'root', children: nodes } ];
					splice.apply( scope.children, [ 0, scope.children.length ].concat( nodes ) );
				}
				scope = null;
				nodes = [];
			} else {
				// Add elements to keep...
				nodes.push( node );
			}
		}
		if ( !scope && type === 'start' ) {
			scope = parent;
		}
	}

	/**
	* Tests whether a node is an opening or closing section tag.
	*
	* @private
	* @param {Node} node - node to test
	* @returns {(string|null)} returns `start`, `end` or null
	*/
	function isSectionTag( node ) {
		if (
			node.type === 'html' &&
			node.value === '<section class="'+name+'">'
		) {
			return 'start';
		}
		else if (
			node.type === 'html' &&
			node.value === '<!-- /.'+name+' -->'
		) {
			return 'end';
		}
		return null;
	}
}


// MAIN //

/**
* Returns a remark attacher that extracts the section with the given name.
*
* @private
* @param {string} name - section name
* @param {Function} remark attacher function
*/
function extractor( name ) {
	/**
	* Transforms a Markdown file.
	*
	* @private
	* @param {Node} ast - root node
	*/
	function transformer( ast ) {
		getSectionNodes( ast, name );
	}

	/**
	* Attach a plugin to a remark processor in order to extract the specified section.
	*
	* @private
	* @returns {Function} transformer
	*/
	return function attacher() {
		return transformer;
	}; // end FUNCTION attacher()
};


// EXPORTS //

module.exports = extractor;
