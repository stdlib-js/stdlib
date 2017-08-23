'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var render = require( './render.js' );


// MAIN //

/**
* Generates an HTML string for displaying an SVG equation as an image in a GitHub Markdown file.
*
* @param {Options} [options] - function options
* @param {string} [options.className='equation'] - element class name
* @param {string} [options.align='center'] - element alignment
* @param {string} [options.raw] - raw equation text
* @param {string} [options.label] - equation label
* @param {string} [options.src] - image source URL
* @param {string} [options.alt] - alternative image text
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {string} HTML string
*
* @example
* var opts = {
*     'className': 'equation',
*     'align': 'center',
*     'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt'
*     'label': 'eqn:erf',
*     'src': 'https://cdn.rawgit.com/stdlib-js/stdlib/master/lib/node_modules/@stdlib/math/base/special/erf/docs/img/eqn.svg'
*     'alt': 'Error function.'
* };
* var html = createElement( opts );
* // returns <string>
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
