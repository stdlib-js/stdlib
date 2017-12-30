'use strict';

// MODULES //

var escapeHTML = require( './escape_html.js' );


// MAIN //

/**
* Renders an HTML string.
*
* @private
* @param {Options} opts - render options
* @param {string} opts.className - element class name
* @param {string} opts.align - element alignment
* @param {string} opts.raw - raw equation text
* @param {string} opts.label - equation label
* @param {string} svg - SVG string
* @returns {string} HTML string
*/
function render( opts, svg ) {
	var str = '';

	str += '<div';
	str += ' ';
	str += 'class="' + opts.className + '"';
	str += ' ';
	str += 'align="' + opts.align + '"';
	str += ' ';
	str += 'data-raw-text="' + escapeHTML( opts.raw ) + '"';
	str += ' ';
	str += 'data-equation="' + opts.label + '"';
	str += '>';
	if ( svg ) {
		str += '\n    ';
		str += svg;
		str += '\n';
	}
	str += '</div>';

	return str;
} // end FUNCTION render()


// EXPORTS //

module.exports = render;
