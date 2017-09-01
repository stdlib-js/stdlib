'use strict';

// MODULES //

var remark = require( 'remark' );
var toHTML = require( 'remark-html' );
var rehype = require( 'rehype' );
var highlight = require( 'rehype-highlight' );
var headings = require( 'remark-slug' );
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isBuffer = require( '@stdlib/assert/is-buffer' );
var isFunction = require( '@stdlib/assert/is-function' );
var noHighlightText = require( './../../../rehype/plugins/rehype-no-highlight-text' );
var equations = require( './../../../remark/plugins/remark-svg-equations' );
var linkify = require( './../../../remark/plugins/remark-stdlib-urls-www' );
var postProcess = require( './post_process.js' );


// VARIABLES //

var mTransform = remark()
	.use( headings )
	.use( linkify )
	.use( equations )
	.use( toHTML )
	.process;

var hopts = {
	'fragment': true
};
var hTransform = rehype()
	.data( 'settings', hopts )
	.use( noHighlightText )
	.use( highlight )
	.process;


// MAIN //

/**
* Converts Markdown to HTML.
*
* @param {(string|Buffer)} markdown - markdown to convert
* @param {Function} clbk - callback to invoke on completion
* @throws {TypeError} first argument must be either a string or a Buffer
* @throws {TypeError} last argument must be a function
*
* @example
* var markdown = '# Beep\n> Boop!';
*
* convert( markdown, done );
*
* function done( error, html ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( html );
* }
*/
function convert( markdown, clbk ) {
	if (
		!isString( markdown ) &&
		!isBuffer( markdown )
	) {
		throw new TypeError( 'invalid input argument. First argument must be either a string or a Buffer. Value: `'+markdown+'`.' );
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Last argument must be a callback function. Value: `'+clbk+'`.' );
	}
	// Convert the Markdown to HTML:
	mTransform( markdown.toString(), onMarkdownTransform );

	/**
	* Callback invoked after transforming Markdown to HTML.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {File} [vfile] - virtual file
	* @returns {void}
	*/
	function onMarkdownTransform( error, vfile ) {
		if ( error ) {
			return done( error );
		}
		// Syntax highlight the HTML code elements:
		hTransform( vfile, onHTMLTransform );
	} // end FUNCTION onMarkdownTransform()

	/**
	* Callback invoked after transforming HTML.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {File} [vfile] - virtual file
	* @returns {void}
	*/
	function onHTMLTransform( error, vfile ) {
		if ( error ) {
			return done( error );
		}
		done( null, postProcess( vfile.toString() ) );
	} // end FUNCTION onHTMLTransform()

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {string} [html] - HTML
	* @returns {void}
	*/
	function done( error, html ) {
		if ( error ) {
			return clbk( error );
		}
		clbk( null, html );
	} // end FUNCTION done()
} // end FUNCTION convert()


// EXPORTS //

module.exports = convert;
