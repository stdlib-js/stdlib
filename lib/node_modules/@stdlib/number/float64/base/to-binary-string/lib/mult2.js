/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// VARIABLES //

var MAX_ITER = 1075; // 1023+52 (subnormals) => BIAS+NUM_SIGNFICAND_BITS-1
var MAX_BITS = 54; // only 53 bits for fraction


// MAIN //

/**
* Converts a fraction to a literal bit representation using the multiply-by-2 algorithm.
*
* @private
* @param {number} x - number less than 1
* @returns {BinaryString} bit representation
*
* @example
* var v = mult2( 0.234375 );
* // returns '001111'
*
* @example
* var v = mult2( 0.0 );
* // returns ''
*/
function mult2( x ) {
	var str;
	var y;
	var i;
	var j;

	str = '';
	if ( x === 0.0 ) {
		return str;
	}
	j = MAX_ITER;

	// Each time we multiply by 2 and find a ones digit, add a '1'; otherwise, add a '0'..
	for ( i = 0; i < MAX_ITER; i++ ) {
		y = x * 2.0;
		if ( y >= 1.0 ) {
			x = y - 1.0;
			str += '1';
			if ( j === MAX_ITER ) {
				j = i; // first '1'
			}
		} else {
			x = y;
			str += '0';
		}
		// Stop when we have no more decimals to process or in the event we found a fraction which cannot be represented in a finite number of bits...
		if ( y === 1.0 || i-j > MAX_BITS ) {
			break;
		}
	}
	return str;
}


// EXPORTS //

module.exports = mult2;
