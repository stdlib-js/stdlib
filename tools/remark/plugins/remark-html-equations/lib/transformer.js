'use strict';

// MODULES //

var visit = require( 'unist-util-visit' );
var insertEquations = require( './insert_equations.js' );


// TRANSFORMER //

/**
* Transforms a Markdown file.
*
* @private
* @param {Node} ast - root node
*/
function transformer( ast ) {
	visit( ast, 'html', insertEquations );
} // end FUNCTION transformer()


// EXPORTS //

module.exports = transformer;
