'use strict';

// MODULES //

var createElement = require( 'github-markdown-equation-element' );
var visit = require( 'unist-util-visit' );


// CONSTANTS //

var EQN_REGEX_START = /<!-- <equation[^>]*> -->/gi;
var EQN_REGEX_END = /<!-- <\/equation> -->/gi;
var ALT = /alt="([^"]*)"/;
var LABEL = /label="([^"]*)"/;
var RAW = /raw="([^"]*)"/;


// FUNCTIONS //

/**
* Insert a HTML equation DIV element into the Markdown file.
*
* @private
* @param {Node} node - reference node
* @param {number} index - position of `node` in `parent`
* @param {Node} - parent - parent of `node`
*/
function equationInserter( node, index, parent ) {
	var newNode;
	var html;
	var label;
	var opts;
	var alt;
	var raw;
	if ( EQN_REGEX_START.test( node.value ) === true ) {

		alt = ALT.exec( node.value )[ 1 ];
		label = LABEL.exec( node.value )[ 1 ];
		raw = RAW.exec( node.value )[ 1 ];

		opts = {
			'raw': raw,
			'alt': alt,
			'label': label
		};
		html = createElement( opts );
		newNode = {
			'type': 'html',
			'value': html
		};

		if ( EQN_REGEX_END.test( parent.children[ index + 1 ].value ) ) {
			// Case: Insert new node between escaped equation tags
			parent.children.splice( index + 1, 0, newNode );
		}
		else if ( EQN_REGEX_END.test( parent.children[ index + 2 ].value ) ) {
			// Case: Replace currently existing node
			parent.children.splice( index + 1, 1, newNode );
		}
		else {
			throw new TypeError( 'invalid equation comment. Value: `' + node.value + '`.' );
		}
	}
} // end FUNCTION equationInserter()


// TRANSFORMER //

/**
* Transforms a Markdown file.
*
* @private
* @param {Node} ast - root node
*/
function transformer( ast ) {
	visit( ast, 'html', equationInserter );
} // end FUNCTION transformer()


// EXPORTS //

module.exports = transformer;
