'use strict';

// MODULES //

var mathjax = require( 'mathjax-node' );
var isFunction = require( '@stdlib/assert/is-function' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var copy = require( '@stdlib/utils/copy' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// FACTORY //

/**
* Returns a function for converting a TeX or LaTeX string to an SVG.
*
* @param {Options} options - function options
* @param {PositiveInteger} [options.width=100] - container width in `ex`
* @param {PositiveInteger} [options.ex=6] - `ex` size in pixels
* @param {boolean} [options.inline=false] - specifies whether to format the input string as an inline equation
* @param {boolean} [options.linebreaks=true] - enable linebreaking
* @param {Function} clbk - callback to invoke upon converting a string to an SVG
* @returns {Function} function to convert a string to an SVG
*
* @example
* var opts = {
*     'inline': true
* };
* var convert = factory( opts, done );
* convert( 'y = mx + b' );
*
* function done( error, svg ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( svg );
* }
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = copy( defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if ( opts.inline ) {
		opts.format = 'inline-TeX';
		delete opts.inline;
	}
	return tex2svg;

	/**
	* Converts a TeX or LaTeX string to an SVG.
	*
	* @param {string} str - string to convert
	* @returns {void}
	*/
	function tex2svg( str ) {
		if ( !isString( str ) ) {
			throw new TypeError( 'invalid input argument. Must provide a string primitive. Value: `' + str + '`.' );
		}
		opts.math = str;
		mathjax.typeset( opts, done );
		/**
		* Callback invoked upon converting a string to SVG.
		*
		* @private
		* @param {Object} data - output
		* @returns {void}
		*/
		function done( data ) {
			var err;
			if ( data.errors ) {
				err = new Error( data.errors[ 0 ] );
				return clbk( err );
			}
			clbk( null, data.svg );
		} // end FUNCTION done()
	} // end FUNCTION tex2svg()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;
