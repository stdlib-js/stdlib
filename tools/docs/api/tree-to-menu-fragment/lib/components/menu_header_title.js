'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );


// VARIABLES //

var ELEMENT = 'span';


// MAIN //

/**
* Renders a menu header.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var props = {
		'className': 'menu-header-title'
	};
	return h( ELEMENT, props, ctx.title );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
