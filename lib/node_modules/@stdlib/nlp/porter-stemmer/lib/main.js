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
*
*
* ## Notice
*
* This code is a modification of an existing JavaScript implementation of ther [Porter stemming algorithm]{@link https://tartarus.org/martin/PorterStemmer/}.
*
* ```text
* Release 1 be 'andargor', Jul 2004
* Release 2 (substantially revised) by Christopher McKenzie, Aug 2009
* ```
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var endsWith = require( '@stdlib/string/ends-with' );
var lowercase = require( '@stdlib/string/lowercase' );
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var step2list = {
	'ational': 'ate',
	'tional': 'tion',
	'enci': 'ence',
	'anci': 'ance',
	'izer': 'ize',
	'bli': 'ble',
	'alli': 'al',
	'entli': 'ent',
	'eli': 'e',
	'ousli': 'ous',
	'ization': 'ize',
	'ation': 'ate',
	'ator': 'ate',
	'alism': 'al',
	'iveness': 'ive',
	'fulness': 'ful',
	'ousness': 'ous',
	'aliti': 'al',
	'iviti': 'ive',
	'biliti': 'ble',
	'logi': 'log'
};
var step3list = {
	'icate': 'ic',
	'ative': '',
	'alize': 'al',
	'iciti': 'ic',
	'ical': 'ic',
	'ful': '',
	'ness': ''
};
var c = '[^aeiou]'; // consonant
var v = '[aeiouy]'; // vowel
var C = c + '[^aeiouy]*'; // consonant sequence
var V = v + '[aeiou]*'; // vowel sequence
var RE_CV = new RegExp( '^' + C + v + '[^aeiouwxy]$' );
var mgr0 = '^(' + C + ')?' + V + C; // [C]VC... is m>0
var RE_MGR0 = new RegExp( mgr0 );
var meq1 = '^(' + C + ')?' + V + C + '(' + V + ')?$'; // [C]VC[V] is m=1
var RE_MEQ1 = new RegExp( meq1 );
var mgr1 = '^(' + C + ')?' + V + C + V + C; // [C]VCVC... is m>1
var RE_MGR1 = new RegExp( mgr1 );
var sV = '^(' + C + ')?' + v; // vowel in stem
var RE_SV = new RegExp( sV );
var RE_STEP1A = /^(.+?)(ss|i)es$/;
var RE2_STEP1A = /^(.+?)([^s])s$/;
var RE_STEP1B = /^(.+?)eed$/;
var RE2_STEP1B = /^(.+?)(ed|ing)$/;
var RE_STEP1C = /^(.+?)y$/;
var RE_STEP2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
var RE_STEP3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
var RE_STEP4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
var RE2_STEP4 = /^(.+?)(s|t)(ion)$/;
var RE_STEP5 = /^(.+?)e$/;
var RE_LAST = /.$/;
var RE_ATBLIZ = /(at|bl|iz)$/;
var RE_DOUBLE = new RegExp( '([^aeiouylsz])\\1$' );


// MAIN //

/**
* Extracts the stem of a given word using the Porter stemming algorithm.
*
* ## References
*
* -   Porter, Michael F. 1980. "An algorithm for suffix stripping." _Program_ 13 (3): 130–37. doi:[10.1108/eb046814][@porter:1980].
*
* [@porter:1980]: https://doi.org/10.1108/eb046814
*
* @param {string} word - input word
* @throws {TypeError} first argument must be a string primitive
* @returns {string} word stem
*
* @example
* var out = porterStemmer( 'walking' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'walked' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'walks' );
* // returns 'walk'
*
* @example
* var out = porterStemmer( 'worldwide' );
* // returns 'worldwid'
*
* @example
* var out = porterStemmer( '' );
* // returns ''
*/
function porterStemmer( word ) {
	var firstch;
	var suffix;
	var stem;
	var fp;

	if ( !isString( word ) ) {
		throw new TypeError( 'invalid argument. First argument must be a string primitive. Value: `' + word + '`.' );
	}
	if ( word.length < 3 ) {
		return word;
	}
	word = lowercase( word );
	firstch = word[ 0 ];
	if ( firstch === 'y' ) {
		word = firstch.toUpperCase() + word.substr( 1 );
	}

	// Step 1a:
	if ( RE_STEP1A.test( word ) ) {
		word = replace( word, RE_STEP1A, '$1$2' );
	} else if ( RE2_STEP1A.test( word ) ) {
		word = replace( word, RE2_STEP1A, '$1$2' );
	}

	// Step 1b:
	if ( RE_STEP1B.test( word ) ) {
		fp = RE_STEP1B.exec( word );
		if ( RE_MGR0.test( fp[ 1 ] ) ) {
			word = replace( word, RE_LAST, '' );
		}
	} else if ( RE2_STEP1B.test( word ) ) {
		fp = RE2_STEP1B.exec( word );
		stem = fp[ 1 ];
		if ( RE_SV.test( stem ) ) {
			word = stem;
			if ( RE_ATBLIZ.test( word ) ) {
				word += 'e';
			} else if ( RE_DOUBLE.test( word ) ) {
				word = replace( word, RE_LAST, '' );
			} else if ( RE_CV.test( word ) ) {
				word += 'e';
			}
		}
	}

	// Step 1c:
	if ( RE_STEP1C.test( word ) ) {
		fp = RE_STEP1C.exec( word );
		stem = fp[ 1 ];
		if ( RE_SV.test( stem ) ) {
			word = stem + 'i';
		}
	}

	// Step 2:
	if ( RE_STEP2.test( word ) ) {
		fp = RE_STEP2.exec( word );
		stem = fp[ 1 ];
		suffix = fp[ 2 ];
		if ( RE_MGR0.test( stem ) ) {
			word = stem + step2list[ suffix ];
		}
	}

	// Step 3:
	if ( RE_STEP3.test( word ) ) {
		fp = RE_STEP3.exec( word );
		stem = fp[ 1 ];
		suffix = fp[ 2 ];
		if ( RE_MGR0.test( stem ) ) {
			word = stem + step3list[ suffix ];
		}
	}

	// Step 4:
	if ( RE_STEP4.test( word ) ) {
		fp = RE_STEP4.exec( word );
		stem = fp[ 1 ];
		if ( RE_MGR1.test( stem ) ) {
			word = stem;
		}
	} else if ( RE2_STEP4.test( word ) ) {
		fp = RE2_STEP4.exec( word );
		stem = fp[ 1 ] + fp[ 2 ];
		if ( RE_MGR1.test( stem ) ) {
			word = stem;
		}
	}

	// Step 5:
	if ( RE_STEP5.test( word ) ) {
		fp = RE_STEP5.exec( word );
		stem = fp[ 1 ];
		if (
			RE_MGR1.test( stem ) ||
			( RE_MEQ1.test( stem ) && !( RE_CV.test( stem ) ) )
		) {
			word = stem;
		}
	}
	if ( endsWith( word, 'll' ) && RE_MGR1.test( word ) ) {
		word = replace( word, RE_LAST, '' );
	}

	// Turn initial Y back to y:
	if ( firstch === 'y' ) {
		word = firstch.toLowerCase() + word.substr( 1 );
	}
	return word;
}


// EXPORTS //

module.exports = porterStemmer;
