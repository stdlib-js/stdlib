'use strict';

// MODULES //

var startsWith = require( '@stdlib/string/starts-with' );
var endsWith = require( '@stdlib/string/ends-with' );
var trim = require( '@stdlib/string/trim' );


// VARIABLES //

var COMMENT_START = '<!--';
var COMMENT_END = '-->';
var ESLINT_PREFIX = 'eslint';


// MAIN //

/**
* Converts an HTML comment containing ESLint configuration to a JavaScript comment.
*
* @private
* @param {string} html - text content of an HTML AST node
* @returns {(string|null)} null or a JavaScript comment
*/
function transformHTML( html ) {
	if (
		!startsWith( html, COMMENT_START ) ||
		!endsWith( html, COMMENT_END )
	) {
		return null;
	}
	html = html.slice( COMMENT_START.length, html.length-COMMENT_END.length );
	html = trim( html );
	if ( !startsWith( html, ESLINT_PREFIX ) ) {
		return null;
	}
	return '/* ' + html + ' */';
}


// EXPORTS //

module.exports = transformHTML;
