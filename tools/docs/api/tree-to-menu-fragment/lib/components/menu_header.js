'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );
var title = require( './menu_header_title.js' );


// VARIABLES //

var ELEMENT = 'header';


// MAIN //

/**
* Renders a menu header.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {
		'className': 'menu-header'
	};
	children = [ title( ctx ) ];

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
