'use strict';

// VARIABLES //

var HTML_CHARS = /[&<>"']/g;


// MAIN //

/**
* Escapes special characters in an HTML string.
*
* @private
* @param {string} str - HTML string
* @returns {string} escaped string
*
* @example
* var str = 'Mr. & Mrs. Smith are <insert adjective>.';
* var out = escapeHTML( str );
* // returns 'Mr. &amp; Mrs. Smith are &lt;insert adjective&gt;.'
*/
function escapeHTML( str ) {
	var lastIndex;
	var match;
	var char;
	var out;

	match = HTML_CHARS.exec( str );
	if ( !match ) {
		return str;
	}
	out = '';
	while ( match !== null ) {
		char = match[ 0 ];
		switch ( char ) {
		case '&':
			char = '&amp;';
			break;
		case '<':
			char = '&lt;';
			break;
		case '>':
			char = '&gt;';
			break;
		case '"':
			char = '&quot;';
			break;
		case '\'':
			char = '&#39;';
			break;
		default:
		}
		if ( lastIndex === void 0 ) {
			out += str.substring( 0, match.index );
		} else {
			out += str.substring( lastIndex+1, match.index );
		}
		out += char;
		lastIndex = match.index;
		match = HTML_CHARS.exec( str );
	}
	out += str.substring( lastIndex+1, str.length );
	return out;
} // end FUNCTION escapeHTML()


// EXPORTS //

module.exports = escapeHTML;
