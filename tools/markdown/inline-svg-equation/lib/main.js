'use strict';

// MODULES //

var copy = require( '@stdlib/utils/copy' );
var isFunction = require( '@stdlib/assert/is-function' );
var tex2svg = require( '@stdlib/_tools/utils/tex-equation-to-svg' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );
var render = require( './render.js' );


// MAIN //

/**
* Generates an HTML string for inlining an SVG equation in Markdown.
*
* @param {Options} [options] - function options
* @param {string} [options.className='equation'] - element class name
* @param {string} [options.align='center'] - element alignment
* @param {string} [options.raw] - raw equation text
* @param {string} [options.label] - equation label
* @param {Callback} clbk - callback to invoke upon completion
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {TypeError} last argument must be a function
*
* @example
* var opts = {
*     'className': 'equation',
*     'align': 'center',
*     'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt'
*     'label': 'eqn:erf'
* };
* createElement( opts, done );
*
* function done( error, out ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( out );
* }
*/
function createElement( options, clbk ) {
	var opts;
	var err;
	var cb;
	opts = copy( defaults );
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		cb = clbk;
	} else {
		cb = options;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( 'invalid input argument. Last argument must be a callback function. Value: `'+cb+'`.' );
	}
	tex2svg( opts.raw, done );

	/**
	* Callback invoked upon rendering an equation as SVG.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} svg - SVG string
	* @returns {void}
	*/
	function done( error, svg ) {
		if ( error ) {
			return cb( error );
		}
		cb( null, render( opts, svg ) );
	} // end FUNCTION done()
} // end FUNCTION createElement()


// EXPORTS //

module.exports = createElement;
