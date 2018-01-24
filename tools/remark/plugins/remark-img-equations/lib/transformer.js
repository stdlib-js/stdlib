'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-img-equations:transformer' );
var visit = require( 'unist-util-visit' );
var visitor = require( './insert_equations.js' );


// MAIN //

/**
* Transforms a Markdown abstract syntax tree (AST).
*
* @private
* @param {Node} tree - root AST node
*/
function transformer( tree ) {
	debug( 'Processing virtual file...' );
	visit( tree, 'html', visitor );
}


// EXPORTS //

module.exports = transformer;
