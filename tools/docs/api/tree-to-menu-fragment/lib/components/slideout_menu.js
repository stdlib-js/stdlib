'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );
var header = require( './menu_header_wrapper.js' );


// VARIABLES //

var ELEMENT = 'nav';


// MAIN //

/**
* Renders a slideout menu.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {
		'className': 'menu slideout-menu'
	};
	children = [];
	children.push( header( ctx ) );

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
