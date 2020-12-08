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

#include "stdlib/strided/base/smap.h"
#include <stdint.h>

/**
* Applies a unary function accepting and returning single-precision floating-point numbers to each element in a single-precision floating-point strided input array and assigns each result to an element in a single-precision floating-point strided output array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
* @param fcn      unary function to apply
*
* @example
* #include "stdlib/strided/base/smap.h"
* #include <stdint.h>
*
* static float scale( const float x ) {
*     return x * 10.0;
* }
*
* float X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
* float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* int64_t N = 6;
*
* stdlib_strided_smap( N, X, 1, Y, 1, scale );
*/
void stdlib_strided_smap( const int64_t N, const float *X, const int64_t strideX, float *Y, const int64_t strideY, float (*fcn)( float ) ) {
	int64_t ix;
	int64_t iy;
	int64_t i;
	if ( N <= 0 ) {
		return;
	}
	if ( strideX < 0 ) {
		ix = (1-N) * strideX;
	} else {
		ix = 0;
	}
	if ( strideY < 0 ) {
		iy = (1-N) * strideY;
	} else {
		iy = 0;
	}
	for ( i = 0; i < N; i++ ) {
		Y[ iy ] = fcn( X[ ix ] );
		ix += strideX;
		iy += strideY;
	}
	return;
}
