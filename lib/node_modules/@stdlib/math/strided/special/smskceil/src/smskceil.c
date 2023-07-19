/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/math/strided/special/smskceil.h"
#include "stdlib/strided/base/smskmap.h"
#include "stdlib/math/base/special/ceilf.h"
#include <stdint.h>

/**
* Rounds each element in a single-precision floating-point strided array `X` toward positive infinity according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `Y`.
*
* @param N           number of indexed elements
* @param X           input array
* @param strideX     X stride length
* @param Mask        mask array
* @param strideMask  Mask stride length
* @param Y           destination array
* @param strideY     Y stride length
*
* @example
* include <stdint.h>
*
* // Create an input strided array:
* float x[] = { 1.1, 2.5, -3.5, 4.0, -5.9, 6.4, -7.0, 8.2 };
*
* // Create a mask strided array:
* uint8_t m[] = { 0, 0, 1, 0, 1, 1, 0, 0 };
*
* // Create an output strided array:
* float y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* // Specify the number of elements:
* int64_t N = 4;
*
* // Specify the stride lengths:
* int64_t strideX = 2;
* int64_t strideM = 2;
* int64_t strideY = 2;
*
* // Compute the results:
* stdlib_strided_smskceil( N, x, strideX, m, strideM, y, strideY );
*/
void stdlib_strided_smskceil( const int64_t N, const float *X, const int64_t strideX, const uint8_t *Mask, const int64_t strideMask, float *Y, const int64_t strideY ) {
	stdlib_strided_smskmap( N, X, strideX, Mask, strideMask, Y, strideY, stdlib_base_ceilf );
}
