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

// Set the second most significant bit: 00100000000000000000000000000000 => 1<<30 = 1073741824
var BIT = 1073741824 >>> 0; // asm type annotation


// MAIN //

/**
* Returns an integer square root.
*
* @param {uinteger32} x - input value
* @returns {uinteger32} integer square root
*
* @example
* var v = sqrt( 9 >>> 0 );
* // returns 3
*
* @example
* var v = sqrt( 2 >>> 0 );
* // returns 1
*
* @example
* var v = sqrt( 3 >>> 0 );
* // returns 1
*
* @example
* var v = sqrt( 0 >>> 0 );
* // returns 0
*/
function sqrt( x ) {
	var root;
	var bit;
	var sum;
	var y;

	y = x >>> 0; // asm type annotation

	root = 0 >>> 0; // asm type annotation
	bit = BIT;

	// `bit` should start as the highest power of `4` less than or equal to `x`:
	while ( bit > y ) {
		bit >>>= 2;
	}
	// Perform a digit-by-digit/abacus computation...
	while ( bit !== 0 ) {
		sum = ( root + bit ) >>> 0; // asm type annotation
		root >>>= 1;
		if ( x >= sum ) {
			x -= sum;
			root += bit;
		}
		bit >>>= 2;
	}
	// Note: `x` is the remainder

	return root >>> 0; // asm type annotation
}


// EXPORTS //

module.exports = sqrt;
