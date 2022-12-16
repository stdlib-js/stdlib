/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

#include "stdlib/math/base/special/kernel_cos.h"
#include "polyval_c13.c"
#include "polyval_c46.c"

/**
* Computes the cosine of a number on [-π/4, π/4].
*
* @param x    input value (in radians, assumed to be bounded by `~pi/4` in magnitude)
* @param y    tail of `x`
* @return	  sine value
*
* @example
* double x = 1.0;
* double y = 2.0;
*
* double out = stdlib_base_kernel_cos( x, y );
*/
double stdlib_base_kernel_cos( const double x, const double y ) {
	double hz;
	double r;
	double w;
	double z;

	z = x * x;
	w = z * z;
	r = z * polyval13( z );
	r += w * w * polyval46( z );
	hz = 0.5 * z;
	w = 1.0 - hz;
	return w + ( ((1.0-w) - hz) + ((z*r) - (x*y)) );
}
