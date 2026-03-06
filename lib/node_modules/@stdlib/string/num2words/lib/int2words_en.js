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
var UNITS = require( './units.json' );


// VARIABLES //

var ONES = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
var TENS = [ 'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


// MAIN //

/**
* Converts a number to a word representation in English.
*
* @private
* @param {number} num - number to convert
* @param {string} out - output string
* @returns {string} word representation
*
* @example
* var words = int2wordsEN( 1234, '' );
* // returns 'one thousand two hundred thirty-four'
*
* @example
* var words = int2wordsEN( -129, '' );
* // returns 'minus one hundred twenty-nine'
*
* @example
* var words = int2wordsEN( 0, '' );
* // returns 'zero'
*/
function int2wordsEN( num, out ) {
	var word;
	var rem;
	var i;
	if ( num === 0 ) {
		// Case: We have reached the end of the number and the number is zero.
		return out || 'zero';
	}
	if ( num < 0 ) {
		out += 'minus';
		num *= -1;
	}
	if ( num < 20 ) {
		rem = 0;
		word = ONES[ num ];
	}
	else if ( num < 100 ) {
		rem = num % 10;
		word = TENS[ floor( num / 10 ) ];
		if ( rem > 0 ) {
			word += '-' + ONES[ rem ];
			rem = 0;
		}
	}
	else {
		for ( i = 3; i < UNITS.length - 1; i++ ) {
			if ( num < UNITS[ i ].VAL ) {
				rem = num % UNITS[ i-1 ].VAL;
				word = int2wordsEN( floor( num / UNITS[ i-1 ].VAL ), '' ) + ' ' + UNITS[ i-1 ].EN;
				break;
			}
		}
		if ( i === UNITS.length - 1 ) {
			rem = num % UNITS[ i-1 ].VAL;
			word = int2wordsEN( floor( num / UNITS[ i-1 ].VAL ), '' ) + ' ' + UNITS[ i-1 ].EN;
		}
	}
	if ( out.length > 0 ) {
		out += ' ';
	}
	out += word;
	return int2wordsEN( rem, out );
}


// EXPORTS //

module.exports = int2wordsEN;
