'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );
var itemLink = require( './item_link.js' );


// VARIABLES //

var ELEMENT = 'li';


// MAIN //

/**
* Renders a list item.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {};
	children = [ itemLink( ctx ) ];

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
