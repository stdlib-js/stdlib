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
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Returns a single-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @param z       input value
* @param y       number from which to derive the sign
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 3.5f, -2.5f );
*
* stdlib_complex64_t out = stdlib_base_cflipsignf( z, -1.0f );
*
* float re = stdlib_complex64_real( out );
* // returns -3.5f
*
* float im = stdlib_complex64_imag( out );
* // returns 2.5f
*/
stdlib_complex64_t stdlib_base_cflipsignf( const stdlib_complex64_t z, const float y ) {
	float re;
	float im;

	stdlib_complex64_reim( z, &re, &im );

	if ( y < 0 || stdlib_base_is_negative_zerof( y ) ) {
		re = -re;
		im = -im;
	}
	return stdlib_complex64( re, im );
}
