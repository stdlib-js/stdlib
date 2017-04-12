'use strict';

// MODULES //

var remark = require( 'remark' );
var toHTML = require( 'remark-html' );
var headingSlugs = require( 'remark-slug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBuffer = require( '@stdlib/assert/is-buffer' );


// VARIABLES //

var transform = remark()
	.use( headingSlugs )
	.use( toHTML )
	.process;


// MAIN //

/**
* Converts Markdown to HTML.
*
* @param {(string|Buffer)} markdown - markdown to convert
* @throws {TypeError} must provide either a string or a Buffer
* @returns {string} HTML
*
* @example
* var markdown = '# Beep\n> Boop!';
*
* var html = convert( markdown );
*/
function convert( markdown ) {
	if (
		!isString( markdown ) &&
		!isBuffer( markdown )
	) {
		throw new TypeError( 'invalid input argument. Must provide either a string or a Buffer. Value: `'+markdown+'`.' );
	}
	return transform( markdown.toString() ).toString();
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
