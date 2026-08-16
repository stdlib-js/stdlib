/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

#include "stdlib/complex/float32/base/mul_add.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Performs a multiply-add operation involving three single-precision complex floating-point numbers.
*
* @param alpha    input value
* @param x        input value
* @param y        input value
* @return         result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z1 = stdlib_complex64( 5.0f, 3.0f );
* stdlib_complex64_t z2 = stdlib_complex64( -2.0f, 1.0f );
* stdlib_complex64_t z3 = stdlib_complex64( 7.0f, -8.0f );
*
* stdlib_complex64_t out = stdlib_base_complex64_muladd( z1, z2, z3 );
*
* float re = stdlib_complex64_real( out );
* // returns -6.0f
*
* float im = stdlib_complex64_imag( out );
* // returns -9.0f
*/
stdlib_complex64_t stdlib_base_complex64_muladd( const stdlib_complex64_t alpha, const stdlib_complex64_t x, const stdlib_complex64_t y ) {
	float re1;
	float re2;
	float re3;
	float im1;
	float im2;
	float im3;
	float re;
	float im;

	stdlib_complex64_reim( alpha, &re1, &im1 );
	stdlib_complex64_reim( x, &re2, &im2 );
	stdlib_complex64_reim( y, &re3, &im3 );

	re = (re1*re2) - (im1*im2) + re3;
	im = (re1*im2) + (im1*re2) + im3;

	return stdlib_complex64( re, im );
}
