/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var trim = require( '@stdlib/string/trim' );
var reEOL = require( '@stdlib/regexp/eol' );
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var startsWith = require( '@stdlib/string/starts-with' );
var aliases = require( './../data/aliases.json' );
var keywords = require( './../data/keywords.json' );

// TODO: consider also getting keywords (see page source) from https://www.webfx.com/tools/emoji-cheat-sheet/


// VARIABLES //

var VERSION = '12.0';

var FILENAME = resolve( __dirname, '..', 'data', 'unicode_emoji_'+replace( VERSION, '.', '_' )+'_test.txt' );
var OUTPUT = resolve( __dirname, '..', 'data', 'data.json' );

var RE_COMMENT = /^#/;
var RE_GROUP = /^# group: (.*)/;
var RE_SUBGROUP = /^# subgroup: (.*)/;

// See https://github.com/github/gemoji/blob/0a24792305bdde17f01976f4dabdafd859d305ad/vendor/unicode-emoji-test.txt#L2479
var RE_SKIN_TONES = /1F3FB|1F3FC|1F3FD|1F3FE|1F3FF/g;
var SKIN_TONES = {
	'1F3FB': 'skin-tone-2', // 'light'
	'1F3FC': 'skin-tone-3', // 'medium-light'
	'1F3FD': 'skin-tone-4', // 'medium'
	'1F3FE': 'skin-tone-5', // 'medium-dark'
	'1F3FF': 'skin-tone-6'  // 'dark'
};

// See https://www.unicode.org/reports/tr51/#Presentation_Style
var RE_VARIATION_SELECTOR = /FE0F/g;

// See https://www.unicode.org/reports/tr51/#Emoji_ZWJ_Sequences
var RE_ZERO_WIDTH_JOINER = /200D/g;


// FUNCTIONS //

/**
* Converts a codepoint string to a rendered emoji.
*
* @private
* @param {string} pts - codepoints
* @returns {string} emoji
*/
function render( pts ) {
	var i;
	pts = pts.split( ' ' );
	for ( i = 0; i < pts.length; i++ ) {
		pts[ i ] = parseInt( pts[ i ], 16 );
	}
	return fromCodePoint( pts );
}

/**
* Normalizes a codepoint sequence.
*
* @private
* @param {string} pts - codepoints
* @returns {string} normalized string
*/
function normalize( pts ) {
	var tmp = replace( pts, RE_VARIATION_SELECTOR, '' );
	tmp = replace( tmp, RE_ZERO_WIDTH_JOINER, '' ); // zero width joiner (ZWJ) sequences
	tmp = replace( tmp, RE_SKIN_TONES, '' );
	return replace( tmp, /\s+/g, '' );
}

/**
* Resolves emoji aliases.
*
* @private
* @param {Array} out - output array
* @param {string} pts - codepoints
* @param {string} shortName - short name
* @param {Array} related - related emoji
* @param {Array} db - emoji database
* @returns {Array} output array
*/
function resolveAliases( out, pts, shortName, related, db ) {
	var tmp;
	var m;
	var j;
	var k;

	// Check for aliases (see https://github.com/github/gemoji/blob/master/db/emoji.json)...
	tmp = aliases[ render( pts ) ];
	if ( tmp ) {
		for ( j = 0; j < tmp.length; j++ ) {
			out.push( tmp[ j ] );
		}
		return out;
	}
	// If the alias database did not contain an entry for the current emoji, use the alias(es) of the first emoji having aliases...
	for ( j = 0; j < related.length; j++ ) {
		tmp = aliases[ render( related[ j ].codepoints ) ];
		if ( tmp ) {
			for ( k = 0; k < tmp.length; k++ ) {
				out.push( tmp[ k ] );
			}
			return out;
		}
	}
	// Account for special cases where we cannot determine "related" emoji just by examining the codepoints (see https://github.com/github/gemoji/blob/0a24792305bdde17f01976f4dabdafd859d305ad/vendor/unicode-emoji-test.txt#L2368):
	if ( startsWith( shortName, 'women holding hands' ) ) {
		m = 'women holding hands';
	} else if ( startsWith( shortName, 'men holding hands' ) ) {
		m = 'men holding hands';
	} else if ( startsWith( shortName, 'woman and man holding hands' ) ) {
		m = 'woman and man holding hands';
	} else {
		m = '';
	}
	if ( m ) {
		for ( j = 0; j < db.length; j++ ) {
			if ( db[ j ].short_name === m ) {
				tmp = aliases[ render( db[ j ].codepoints ) ];
				if ( tmp ) {
					for ( k = 0; k < tmp.length; k++ ) {
						out.push( tmp[ k ] );
					}
					return out;
				}
			}
		}
	}
	return out;
}

/**
* Resolves emoji keywords.
*
* @private
* @param {Array} out - output array
* @param {string} shortName - short name
* @param {Array} related - related emoji
* @returns {Array} output array
*/
function resolveKeywords( out, shortName, related ) {
	var tmp;
	var m;
	var j;
	var k;

	// Check for keywords (see https://www.unicode.org/emoji/charts/emoji-list.html)...
	tmp = keywords[ shortName ];
	if ( tmp ) {
		for ( j = 0; j < tmp.length; j++ ) {
			if ( tmp[ j ] !== shortName ) {
				out.push( tmp[ j ] );
			}
		}
		return out;
	}
	// If the keywords database did not contain an entry for the current emoji, use the keywords of the first emoji having keywords...
	for ( j = 0; j < related.length; j++ ) {
		tmp = keywords[ related[ j ].short_name ];
		if ( tmp ) {
			for ( k = 0; k < tmp.length; k++ ) {
				if ( tmp[ k ] !== related[ j ].short_name ) {
					out.push( tmp[ k ] );
				}
			}
			return out;
		}
	}
	// Account for special cases where we cannot determine "related" emoji just by examining the codepoints (see https://github.com/github/gemoji/blob/0a24792305bdde17f01976f4dabdafd859d305ad/vendor/unicode-emoji-test.txt#L2368):
	if ( startsWith( shortName, 'women holding hands' ) ) {
		m = 'women holding hands';
	} else if ( startsWith( shortName, 'men holding hands' ) ) {
		m = 'men holding hands';
	} else if ( startsWith( shortName, 'woman and man holding hands' ) ) {
		m = 'woman and man holding hands';
	} else {
		m = '';
	}
	if ( m ) {
		tmp = keywords[ m ];
		if ( tmp ) {
			for ( j = 0; j < tmp.length; j++ ) {
				out.push( tmp[ j ] );
			}
			return out;
		}
	}
	return out;
}

/**
* Generates emoji codes.
*
* @private
* @param {Array} out - output array
* @param {Array} aliases - emoji aliases
* @param {Array} [tones] - skin tones
* @returns {Array} output array
*/
function emojiCodes( out, aliases, tones ) {
	var code;
	var len;
	var j;
	var k;

	if ( tones ) {
		// Schema: `:<alias>::<modifier>[, <modifier>[, ...]]:`
		len = tones.length;
		for ( j = 0; j < aliases.length; j++ ) {
			code = ':' + aliases[ j ] + '::';
			for ( k = 0; k < len; k++ ) {
				code += tones[ k ];
				if ( k < len-1 ) {
					code += ', ';
				}
			}
			code += ':';
			out.push( code );
		}
		return out;
	}
	// Schema: `:<alias>:`
	for ( j = 0; j < aliases.length; j++ ) {
		out.push( ':' + aliases[ j ] + ':' );
	}
	return out;
}


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var subgroup;
	var status;
	var cache;
	var group;
	var data;
	var out;
	var arr;
	var m;
	var l;
	var o;
	var i;
	var j;

	cache = {};

	subgroup = '';
	group = '';

	// Read the raw Unicode data:
	data = readFile( FILENAME, {
		'encoding': 'utf8'
	});

	// Split into lines:
	data = data.split( reEOL.REGEXP );

	// Process each line...
	out = [];
	for ( i = 0; i < data.length; i++ ) {
		l = data[ i ];

		m = l.match( RE_GROUP );
		if ( m ) {
			group = trim( m[ 1 ] );
			continue;
		}
		m = l.match( RE_SUBGROUP );
		if ( m ) {
			subgroup = trim( m[ 1 ] );
			continue;
		}
		if ( RE_COMMENT.test( l ) ) {
			continue;
		}
		if ( trim( l ) === '' ) {
			continue;
		}
		o = {};
		o.group = group;
		o.subgroup = subgroup;

		// Get the emoji codepoints:
		l = l.split( ';' );
		o.codepoints = trim( l[ 0 ] );

		// Extract any skin tones:
		m = o.codepoints.match( RE_SKIN_TONES );
		if ( m ) {
			o.skin_tones = [];
			for ( j = 0; j < m.length; j++ ) {
				o.skin_tones.push( SKIN_TONES[ m[ j ] ] );
			}
		}
		// Normalize the codepoint sequence:
		o.hash = normalize( o.codepoints );

		// Get the emoji status:
		l = l[ 1 ].split( '#' );
		status = trim( l[ 0 ] );
		if ( status === 'component' ) {
			// Skip further processing for emoji "components" (see https://github.com/github/gemoji/blob/0a24792305bdde17f01976f4dabdafd859d305ad/vendor/unicode-emoji-test.txt#L2477)...
			continue;
		}
		o.status = status;

		// Get the emoji:
		l = trim( l[ 1 ] );
		for ( j = 0; j < l.length; j++ ) {
			// Stop at the first whitespace character...
			if ( l[ j ] === ' ' ) {
				break;
			}
		}
		o.emoji = l.slice( 0, j );

		// Get the CLDR short name (see https://www.unicode.org/emoji/format.html#col-name):
		l = l.slice( j );
		o.short_name = trim( l );

		// Get the description:
		l = l.split( ':' );
		o.description = trim( l[ 0 ] );

		// Add the emoji data to the cache/hash:
		if ( cache[ o.hash ] ) {
			cache[ o.hash ].push( o );
		} else {
			cache[ o.hash ] = [ o ];
		}
		// Save the emoji data:
		out.push( o );
	}
	// Perform another pass over the data to check for aliases and keywords and to generate emoji codes...
	for ( i = 0; i < out.length; i++ ) {
		o = out[ i ];
		arr = cache[ o.hash ];

		// NOTE: searching for aliases and keywords assumes that emoji codepoint sequences differing in only the presence of variation selectors, zero width joiners, and/or skin tones are all related closely enough such that the emoji can share the same alias(es) and keywords...
		o.aliases = resolveAliases( [], o.codepoints, o.short_name, arr, out );
		o.keywords = resolveKeywords( [], o.short_name, arr );

		// Generate emoji codes from the aliases:
		o.codes = emojiCodes( [], o.aliases, o.skin_tones );
	}
	// Write the processed data to file:
	writeFile( OUTPUT, JSON.stringify( out )+'\n', {
		'encoding': 'utf8'
	});
}

main();
