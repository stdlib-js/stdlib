/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/fast/uint32_log2.h"
#include <stdint.h>

static const uint32_t B4 = 0xFFFF0000u;
static const uint32_t B3 = 0xFF00u;
static const uint32_t B2 = 0xF0u;
static const uint32_t B1 = 0xCu;
static const uint32_t B0 = 0x2u;
static const uint32_t S4 = 16u;
static const uint32_t S3 = 8u;
static const uint32_t S2 = 4u;
static const uint32_t S1 = 2u;
static const uint32_t S0 = 1u;

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
* @param x    number
* @return     integer binary logarithm
*
* @example
* uint32_t out = stdlib_base_fast_uint32_log2( 8 );
* // returns 3
*/
uint32_t stdlib_base_fast_uint32_log2( const uint32_t x ) {
	uint32_t out;
	uint32_t xc;
	
	xc = x;
	out = 0;
	// `xc >= 65536`:
	if ( xc & B4 ) {
		xc >>= S4;
		out |= S4;
	}
	// `xc >= 256`:
	if ( xc & B3 ) {
		xc >>= S3;
		out |= S3;
	}
	// `xc >= 16`:
	if ( xc & B2 ) {
		xc >>= S2;
		out |= S2;
	}
	// `xc >= 4`:
	if ( xc & B1 ) {
		xc >>= S1;
		out |= S1;
	}
	// `xc >= 2`:
	if ( xc & B0 ) {
		out |= S0;
	}
	return out;
}
