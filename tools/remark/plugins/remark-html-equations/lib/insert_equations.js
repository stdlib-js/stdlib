'use strict';

// MODULES //

var debug = require( 'debug' )( 'remark-html-equations:insert_equations' );
var createElement = require( 'github-markdown-equation-element' );


// CONSTANTS //

var EQN_START = /<!-- <equation[^>]*> -->/gi;
var EQN_END = /<!-- <\/equation> -->/gi;
var LABEL = /label="([^"]*)"/;
var ALT = /alt="([^"]*)"/;
var RAW = /raw="([^"]*)"/;


// FUNCTIONS //

/**
* Inserts an HTML equation element into a Markdown AST.
*
* @private
* @param {Node} node - reference node
* @param {number} index - position of `node` in `parent`
* @param {Node} - parent - parent of `node`
*/
function insertEquations( node, index, parent ) {
	var newNode;
	var label;
	var html;
	var opts;
	var alt;
	var raw;

	if ( EQN_START.test( node.value ) === true ) {
		debug( 'Found an equation...' );

		label = LABEL.exec( node.value )[ 1 ];
		debug( 'Label: %s', label );

		alt = ALT.exec( node.value )[ 1 ];
		debug( 'Alternate text: %s', alt );

		raw = RAW.exec( node.value )[ 1 ];
		debug( 'Raw equation: %s', raw );

		opts = {
			'label': label,
			'raw': raw,
			'alt': alt
		};
		html = createElement( opts );
		debug( 'Generated HTML: %s', html );

		newNode = {
			'type': 'html',
			'value': html
		};
		// Case 1: insert new node between equation tags...
		if ( EQN_END.test( parent.children[ index+1 ].value ) ) {
			debug( 'Inserting new node...' );
			parent.children.splice( index+1, 0, newNode );
		}
		// Case 2: replace existing node...
		else if ( EQN_END.test( parent.children[ index+2 ].value ) ) {
			debug( 'Replacing existing node...' );
			parent.children.splice( index+1, 1, newNode );
		}
		else {
			debug( 'Invalid Markdown HTML equation: %s', node.value );
			throw new Error( 'invalid equation comment. Value: `' + node.value + '`.' );
		}
	}
} // end FUNCTION insertEquations()


// EXPORTS //

module.exports = insertEquations;
