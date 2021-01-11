/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

#include "stdlib/math/strided/special/sdeg2rad.h"
#include "stdlib/strided/base/smap.h"
#include "stdlib/math/base/special/deg2radf.h"
#include <stdint.h>

/**
* Converts each element in a single-precision floating-point strided array `X` from degrees to radians and assigns the results to elements in a single-precision floating-point strided array `Y`.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
*
* @example
* #include <stdint.h>
*
* // Create an input strided array:
* float x[] = { 0.0, 30.0, 45.0, 60.0, 90.0, 120.0, 150.0, 180.0 };
*
* // Create an output strided array:
* float y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* // Specify the number of elements:
* int64_t N = 4;
*
* // Specify the stride lengths:
* int64_t strideX = 2;
* int64_t strideY = 2;
*
* // Compute the results:
* stdlib_strided_sdeg2rad( N, x, strideX, y, strideY );
*/
void stdlib_strided_sdeg2rad( const int64_t N, const float *X, const int64_t strideX, float *Y, const int64_t strideY ) {
	stdlib_strided_smap( N, X, strideX, Y, strideY, stdlib_base_deg2radf );
}
