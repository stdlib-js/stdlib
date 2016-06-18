'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-html-equations:transformer' );
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
	debug( 'Processing virtual file...' );
	visit( ast, 'html', insertEquations );
} // end FUNCTION transformer()


// EXPORTS //

module.exports = transformer;
