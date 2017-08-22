'use strict';

// MODULES //

var remark = require( 'remark' );
var toHTML = require( 'remark-html' );
var rehype = require( 'rehype' );
var highlight = require( 'rehype-highlight' );
var headingSlugs = require( 'remark-slug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBuffer = require( '@stdlib/assert/is-buffer' );


// VARIABLES //

var mTransform = remark()
	.use( headingSlugs )
	.use( toHTML )
	.processSync;

var hopts = {
	'fragment': true
};
var hTransform = rehype()
	.data( 'settings', hopts )
	.use( highlight )
	.processSync;


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
	var vfile;
	if (
		!isString( markdown ) &&
		!isBuffer( markdown )
	) {
		throw new TypeError( 'invalid input argument. Must provide either a string or a Buffer. Value: `'+markdown+'`.' );
	}
	// Convert the Markdown to HTML:
	vfile = mTransform( markdown.toString() );

	// Syntax highlight the HTML code elements:
	return hTransform( vfile ).toString();
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
