'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );
var header = require( './menu_header.js' );


// VARIABLES //

var ELEMENT = 'a';


// MAIN //

/**
* Renders a menu header wrapper.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {
		'className': 'menu-header-wrapper',
		'attributes': {
			'href': ctx.href
		}
	};
	children = [ header( ctx ) ];

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
