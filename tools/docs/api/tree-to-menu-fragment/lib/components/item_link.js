'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );


// VARIABLES //

var ELEMENT = 'a';


// MAIN //

/**
* Renders an item link.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var props = {
		'attributes': {
			'href': ctx.href
		}
	};

	return h( ELEMENT, props, ctx.item );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
