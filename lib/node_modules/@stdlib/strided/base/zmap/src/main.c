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

#include "stdlib/strided/base/zmap.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>
#include <complex.h>

/**
* Applies a unary function to a double-precision complex floating-point strided input array and assigns results to a double-precision complex floating-point strided output array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        destination array
* @param strideY  Y stride length
* @param fcn      unary function to apply
*
* @example
* #include "stdlib/strided/base/zmap.h"
* #include <stdint.h>
* #include <complex.h>
*
* static double complex scale( const double complex x ) {
*     double re = creal( x );
*     double im = cimag( x );
*     return ( re+10.0 ) + ( im+10.0 )*I;
* }
*
* double complex X[] = { 1.0+1.0*I, 2.0+2.0*I, 3.0+3.0*I, 4.0+4.0*I, 5.0+5.0*I, 6.0+6.0*I };
* double complex Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* int64_t N = 6;
*
* stdlib_strided_zmap( N, X, 1, Y, 1, scale );
*/
void stdlib_strided_zmap( const int64_t N, const double complex *X, const int64_t strideX, double complex *Y, const int64_t strideY, double complex (*fcn)( double complex ) ) {
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
