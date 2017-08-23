'use strict';

// VARIABLES //

var RE = /&amp;|&lt;|&gt;|&quot;|&#39;/g;


// MAIN //

/**
* Unescapes special characters.
*
* @private
* @param {string} str - string
* @returns {string} unescaped string
*
* @example
* var str = 'Mr. &amp; Mrs. Smith are &lt;insert adjective&gt.';
*
* var out = unescape( str );
* // returns 'Mr. & Mrs. Smith are <insert adjective>.'
*/
function unescape( str ) { // eslint-disable-line no-redeclare
	var lastIndex;
	var match;
	var out;
	var s;

	match = RE.exec( str );
	if ( !match ) {
		return str;
	}
	out = '';
	while ( match !== null ) {
		s = match[ 0 ];
		switch ( s ) {
		case '&amp':
			s = '&';
			break;
		case '&lt;':
			s = '<';
			break;
		case '&gt':
			s = '>';
			break;
		case '&quot;':
			s = '"';
			break;
		case '&#39;':
			s = '\'';
			break;
		default:
		}
		if ( lastIndex ) {
			out += str.substring( lastIndex+1, match.index );
		} else {
			out += str.substring( 0, match.index );
		}
		out += s;
		lastIndex = match.index;
		match = RE.exec( str );
	}
	out += str.substring( lastIndex+1, str.length );
	return out;
} // end FUNCTION unescape()


// EXPORTS //

module.exports = unescape;
