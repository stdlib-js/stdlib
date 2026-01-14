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

#include "stdlib/strided/base/cmap.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>
#include <complex.h>

/**
* Applies a unary function to a single-precision complex floating-point strided input array and assigns results to a single-precision complex floating-point strided output array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
* @param fcn      unary function to apply
*
* @example
* #include "stdlib/strided/base/cmap.h"
* #include <stdint.h>
* #include <complex.h>
*
* static float complex scale( const float complex x ) {
*     float re = crealf( x );
*     float im = cimagf( x );
*     return ( re+10.0f ) + ( im+10.0f )*I;
* }
*
* float complex X[] = { 1.0f+1.0f*I, 2.0f+2.0f*I, 3.0f+3.0f*I, 4.0f+4.0f*I, 5.0f+5.0f*I, 6.0f+6.0f*I };
* float complex Y[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };
*
* int64_t N = 6;
*
* stdlib_strided_cmap( N, X, 1, Y, 1, scale );
*/
void stdlib_strided_cmap( const int64_t N, const float complex *X, const int64_t strideX, float complex *Y, const int64_t strideY, float complex (*fcn)( float complex ) ) {
	int64_t ix;
	int64_t iy;
	int64_t i;
	if ( N <= 0 ) {
		return;
	}
	ix = stdlib_strided_stride2offset( N, strideX );
	iy = stdlib_strided_stride2offset( N, strideY );
	for ( i = 0; i < N; i++ ) {
		Y[ iy ] = fcn( X[ ix ] );
		ix += strideX;
		iy += strideY;
	}
	return;
}
