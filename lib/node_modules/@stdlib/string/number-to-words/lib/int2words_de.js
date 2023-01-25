/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var floor = require( '@stdlib/math/base/special/floor' );


// VARIABLES //

var ONES = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
var TENS = ['null', 'zehn', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];
var QUADRILLION = 1000000000000000;
var TRILLION = 1000000000000;
var BILLION = 1000000000;
var MILLION = 1000000;
var THOUSAND = 1000;
var HUNDRED = 100;
var TWENTY = 20;
var TEN = 10;


// MAIN //

/**
* Converts a number to a word representation in German.
*
* @private
* @param {integer} num - number to convert
* @param {string} [out] - output string
* @returns {string} word representation
*
* @example
* var words = int2wordsDE( 1243 );
* // returns 'eintausendzweihundertdreiundvierzig'
*
* @example
* var words = int2wordsDE( 387 );
* // returns 'dreihundertsiebenundachtzig'
*
* @example
* var words = int2wordsDE( 100 );
* // returns 'einhundert'
*
* @example
* var words = int2wordsDE( 1421 );
* // returns 'eintausendvierhunderteinundzwanzig'
*
* @example
* var words = int2wordsDE( 100381 );
* // returns 'einhunderttausenddreihunderteinundachtzig'
*
* @example
* var words = int2wordsDE( -13 );
* // returns 'minus dreizehn'
*/
function int2wordsDE( num, out ) {
	var word;
	var rem;
	if ( num === 0 ) {
		// Case: We have reached the end of the number and the number is zero.
		return out || 'null';
	}
	if ( !out ) {
		// Initialize the output string for the first call:
		out = '';
	}
	if ( num < 0 ) {
		out += 'minus ';
		num *= -1;
	}
	if ( num < TWENTY ) {
		rem = 0;
		if ( num === 1 && out.length === 0 ) {
			word = 'ein';
		} else {
			word = ONES[ num ];
		}
	}
	else if ( num < HUNDRED ) {
		rem = num % TEN;
		word = TENS[ floor(num / TEN) ];
		if ( rem ) {
			word = ( ( rem === 1 ) ? 'ein' : ONES[ rem ] ) + 'und' + word;
			rem = 0;
		}
	}
	else if ( num < THOUSAND ) {
		rem = num % HUNDRED;
		word = int2wordsDE( floor( num / HUNDRED ) ) + 'hundert';
	}
	else if ( num < MILLION ) {
		rem = num % THOUSAND;
		word = int2wordsDE( floor( num / THOUSAND ) ) + 'tausend';
	}
	else if ( num < BILLION ) {
		rem = num % MILLION;
		if ( floor( num / MILLION ) === 1 ) {
			word = 'eine Million';
		} else {
			word = int2wordsDE( floor( num / MILLION ) ) + ' Millionen';
		}
		if ( rem ) {
			word += ' ';
		}
	}
	else if ( num < TRILLION ) {
		rem = num % BILLION;
		if ( floor( num / BILLION ) === 1 ) {
			word = 'eine Milliarde';
		} else {
			word = int2wordsDE( floor( num / BILLION ) ) + ' Milliarden';
		}
		if ( rem ) {
			word += ' ';
		}
	}
	else if ( num < QUADRILLION ) {
		rem = num % TRILLION;
		if ( floor( num / QUADRILLION ) === 1 ) {
			word = 'eine Billion';
		} else {
			word = int2wordsDE( floor( num / TRILLION ) ) + ' Billionen';
		}
		if ( rem ) {
			word += ' ';
		}
	}
	else {
		// Note: we do not support numbers greater than 2^53 (i.e., the maximum safe integer)...
		rem = num % QUADRILLION;
		if ( floor( num / QUADRILLION ) === 1 ) {
			word = 'eine Trillion';
		} else {
			word = int2wordsDE( floor( num / QUADRILLION ) ) + ' Trillionen';
		}
		if ( rem ) {
			word += ' ';
		}
	}
	out += word;
	return int2wordsDE( rem, out );
}


// EXPORTS //

module.exports = int2wordsDE;
