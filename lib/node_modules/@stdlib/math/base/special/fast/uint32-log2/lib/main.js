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

// 4294901760 => 0xFFFF0000 => 11111111111111110000000000000000
var B4 = 0xFFFF0000 >>> 0; // asm type annotation

// 65280 => 0xFF00 => 00000000000000001111111100000000
var B3 = 0xFF00 >>> 0; // asm type annotation

// 240 => 0xF0 => 00000000000000000000000011110000
var B2 = 0xF0 >>> 0; // asm type annotation

// 12 => 0xC => 00000000000000000000000000001100
var B1 = 0xC >>> 0; // asm type annotation

// 2 => 0x2 => 00000000000000000000000000000010
var B0 = 0x2 >>> 0; // asm type annotation

// 16 => 00000000000000000000000000010000
var S4 = 16 >>> 0; // asm type annotation

// 8 => 00000000000000000000000000001000
var S3 = 8 >>> 0; // asm type annotation

// 4 => 00000000000000000000000000000100
var S2 = 4 >>> 0; // asm type annotation

// 2 => 00000000000000000000000000000010
var S1 = 2 >>> 0; // asm type annotation

// 1 => 00000000000000000000000000000001
var S0 = 1 >>> 0; // asm type annotation


// MAIN //

/**
* Computes an integer binary logarithm (base two).
*
* ## Method
*
* 1.  Note that the largest unsigned 32-bit integer is `4294967295`, which is `2^{32}-1`. Hence, the integer binary logarithm cannot exceed `31` (i.e., `16 + 8 + 4 + 2 + 1`), which corresponds to the bit sequence
*
*     ```binarystring
*     00000000000000000000000000011111
*     ```
*
* 2.  Initialize a return variable with the value zero.
*
* 3.  If at least one of the first sixteen most significant bits of the input 32-bit integer `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` is at least `16` (i.e., `x > 65536`). Hence, activate the corresponding bit of the return variable. Mutate `x` by shifting sixteen bits to the right, discarding the bits shifted off.
*
* 4.  Carry out the following steps with `B` in `[ 8, 4, 2, 1 ]`:
*
*     -   If at least one of the next `B` most significant bits of the current `x` is turned on, we know that the power to which the number `2` must be raised to obtain `x` has to be increased by `B`.
*     -   Activate the bit of the return variable that corresponds to `B`.
*     -   Mutate `x` by shifting `B` bits to the right, discarding the bits shifted off.
*
* 5.  The final value of the return variable is the integer binary logarithm of `x`.
*
*
* @param {uinteger32} x - input value
* @returns {uinteger32} integer binary logarithm
*
* @example
* var v = log2( 4 >>> 0 );
* // returns 2
*
* @example
* var v = log2( 8 >>> 0 );
* // returns 3
*
* @example
* var v = log2( 9 >>> 0 );
* // returns 3
*/
function log2( x ) {
	var out = 0 >>> 0; // asm type annotation
	var y = x >>> 0; // asm type annotation

	// `x >= 65536`:
	if ( y & B4 ) {
		y >>>= S4;
		out |= S4;
	}
	// `x >= 256`:
	if ( y & B3 ) {
		y >>>= S3;
		out |= S3;
	}
	// `x >= 16`:
	if ( y & B2 ) {
		y >>>= S2;
		out |= S2;
	}
	// `x >= 4`:
	if ( y & B1 ) {
		y >>>= S1;
		out |= S1;
	}
	// `x >= 2`:
	if ( y & B0 ) {
		y >>>= S0;
		out |= S0;
	}
	return out;
}


// EXPORTS //

module.exports = log2;
