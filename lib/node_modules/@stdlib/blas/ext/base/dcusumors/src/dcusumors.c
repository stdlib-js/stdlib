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

#include "stdlib/blas/ext/base/dcusumors.h"
#include <stdint.h>

/**
* Computes the cumulative sum of double-precision floating-point strided array elements using ordinary recursive summation.
*
* @param N        number of indexed elements
* @param sum      initial sum
* @param X        input array
* @param strideX  X stride length
* @param Y        output array
* @param strideY  Y stride length
*/
void stdlib_strided_dcusumors( const int64_t N, const double sum, const double *X, const int64_t strideX, double *Y, const int64_t strideY ) {
	int64_t ix;
	int64_t iy;
	int64_t i;
	double s;

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
	s = sum;
	for ( i = 0; i < N; i++ ) {
		s += X[ ix ];
		Y[ iy ] = s;
		ix += strideX;
		iy += strideY;
	}
	return;
}
