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

#include "stdlib/strided/base/dmap2.h"
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

/**
* Applies a binary function to double-precision floating-point strided input arrays and assigns results to a double-precision floating-point strided output array.
*
* @param N        number of indexed elements
* @param X        input array
* @param strideX  X stride length
* @param Y        input array
* @param strideY  Y stride length
* @param Z        destination array
* @param strideZ  Z stride length
* @param fcn      binary function to apply
*
* @example
* #include "stdlib/strided/base/dmap2.h"
* #include <stdint.h>
*
* static double add( const double x, const double y ) {
*     return x + y;
* }
*
* double X[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
* double Z[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 };
* double Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };
*
* int64_t N = 6;
*
* stdlib_strided_dmap2( N, X, 1, Y, 1, Z, 1, add );
*/
void stdlib_strided_dmap2( const int64_t N, const double *X, const int64_t strideX, const double *Y, const int64_t strideY, double *Z, const int64_t strideZ, double (*fcn)( double, double ) ) {
	int64_t ix;
	int64_t iy;
	int64_t iz;
	int64_t i;
	if ( N <= 0 ) {
		return;
	}
	ix = stdlib_strided_stride2offset( N, strideX );
	iy = stdlib_strided_stride2offset( N, strideY );
	iz = stdlib_strided_stride2offset( N, strideZ );
	for ( i = 0; i < N; i++ ) {
		Z[ iz ] = fcn( X[ ix ], Y[ iy ] );
		ix += strideX;
		iy += strideY;
		iz += strideZ;
	}
	return;
}
