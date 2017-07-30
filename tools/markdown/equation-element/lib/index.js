'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var render = require( './render.js' );


// MAIN //

/**
* Generates an HTML string for displaying an SVG equation in a Github Markdown file.
*
* @param {Object} [options] - function options
* @param {string} [options.className='equation'] - element class name
* @param {string} [options.align='center'] - element alignment
* @param {string} [options.raw] - raw equation text
* @param {string} [options.label] - equation label
* @param {string} [options.src] - image source URL
* @param {string} [options.alt] - alternative image text
* @returns {string} HTML string
*/
function createElement( options ) {
	var opts;
	var err;
	opts = copy( defaults );
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	return render( opts );
} // end FUNCTION createElement()


// EXPORTS //

module.exports = createElement;
