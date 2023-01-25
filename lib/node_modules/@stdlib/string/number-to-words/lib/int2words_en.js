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

var ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var TENS = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
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
* Converts a number to a word representation in English.
*
* @private
* @param {integer} num - number to convert
* @param {string} [out] - output string
* @returns {string} word representation
*
* @example
* var words = int2wordsEN( 1234 );
* // returns 'one thousand two hundred thirty-four'
*
* @example
* var words = int2wordsEN( -129 );
* // returns 'minus one hundred twenty-nine'
*
* @example
* var words = int2wordsEN( 0 );
* // returns 'zero'
*/
function int2wordsEN( num, out ) {
	var word;
	var rem;
	if ( num === 0 ) {
		// Case: We have reached the end of the number and the number is zero.
		return out || 'zero';
	}
	if ( !out ) {
		// Initialize the output string for the first call:
		out = '';
	}
	if ( num < 0 ) {
		out += 'minus';
		num *= -1;
	}
	if ( num < TWENTY ) {
		rem = 0;
		word = ONES[ num ];
	}
	else if ( num < HUNDRED ) {
		rem = num % TEN;
		word = TENS[ floor(num / TEN) ];
		if ( rem > 0 ) {
			word += '-' + ONES[ rem ];
			rem = 0;
		}
	}
	else if ( num < THOUSAND ) {
		rem = num % HUNDRED;
		word = int2wordsEN( floor( num / HUNDRED ) ) + ' hundred';
	}
	else if ( num < MILLION ) {
		rem = num % THOUSAND;
		word = int2wordsEN( floor( num / THOUSAND ) ) + ' thousand';
	}
	else if ( num < BILLION ) {
		rem = num % MILLION;
		word = int2wordsEN( floor( num / MILLION ) ) + ' million';
	}
	else if ( num < TRILLION ) {
		rem = num % BILLION;
		word = int2wordsEN( floor( num / BILLION ) ) + ' billion';
	}
	else if ( num < QUADRILLION ) {
		rem = num % TRILLION;
		word = int2wordsEN( floor( num / TRILLION ) ) + ' trillion';
	}
	else {
		// Note: we do not support numbers greater than 2^53 (i.e., the maximum safe integer)...
		rem = num % QUADRILLION;
		word = int2wordsEN( floor( num / QUADRILLION ) ) + ' quadrillion';
	}
	if ( out.length > 0 ) {
		out += ' ';
	}
	out += word;
	return int2wordsEN( rem, out );
}


// EXPORTS //

module.exports = int2wordsEN;
