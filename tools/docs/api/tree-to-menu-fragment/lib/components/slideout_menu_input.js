'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );
var label = require( './slideout_menu_label.js' );


// VARIABLES //

var ELEMENT = 'input';


// MAIN //

/**
* Renders a slideout menu input element.
*
* @private
* @param {Object} ctx - context
* @returns {VTree} virtual tree
*/
function render( ctx ) {
	var children;
	var props;

	props = {
		'className': 'slideout-menu-input',
		'id': 'slideout-menu-input-root',
		'attributes': {
			'name': 'slideout-menu-input-root',
			'type': 'checkbox'
		}
	};
	children = [ label( ctx ) ];

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
