'use strict';

// MODULES //

var remark = require( 'remark' );
var toVirtualDOM = require( 'remark-vdom' );
var headingSlugs = require( 'remark-slug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBuffer = require( '@stdlib/assert/is-buffer' );


// VARIABLES //

var transform = remark()
	.use( headingSlugs )
	.use( toVirtualDOM )
	.process;


// MAIN //

/**
* Converts Markdown to Virtual DOM.
*
* @param {(string|Buffer)} markdown - markdown to convert
* @throws {TypeError} must provide either a string or a Buffer
* @returns {VTree} virtual tree
*
* @example
* var markdown = '# Beep\n> Boop!';
*
* var vtree = convert( markdown );
*/
function convert( markdown ) {
	if (
		!isString( markdown ) &&
		!isBuffer( markdown )
	) {
		throw new TypeError( 'invalid input argument. Must provide either a string or a Buffer. Value: `'+markdown+'`.' );
	}
	return transform( markdown.toString() ).contents;
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
