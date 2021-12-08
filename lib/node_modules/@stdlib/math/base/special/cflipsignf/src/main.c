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

#include "stdlib/math/base/special/cflipsignf.h"
#include "stdlib/math/base/assert/is_negative_zerof.h"
#include <complex.h>

/**
* Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @param z       input value
* @param y       number from which to derive the sign
* @return        result
*
* @example
* float complex y = stdlib_base_cflipsignf( 3.0-2.0*I, -1.0 );
* // returns -3.0+2.0*I
*/
float complex stdlib_base_cflipsignf( const float complex z, const float y ) {
	float re = crealf( z );
	float im = cimagf( z );
	if ( y < 0 || stdlib_base_is_negative_zerof( y ) ) {
		re = -re;
		im = -im;
	}
	return re + im*I;
}
