'use strict';

// MODULES //

var h = require( 'virtual-dom/h' );


// VARIABLES //

var ELEMENT = 'label';


// MAIN //

/**
* Renders a slideout menu label.
*
* @private
* @returns {VTree} virtual tree
*/
function render() {
	var children;
	var props;

	props = {
		'className': 'slideout-menu-label hamburger-menu-icon',
		'attributes': {
			'for': 'slideout-menu-input-root'
		}
	};
	// A span for each hamburger menu bar:
	children = '<span></span><span></span><span></span>';

	return h( ELEMENT, props, children );
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
