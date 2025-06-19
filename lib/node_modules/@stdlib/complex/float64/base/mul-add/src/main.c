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

#include "stdlib/complex/float64/base/mul_add.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

/**
* Performs a multiply-add operation involving three double-precision complex floating-point numbers.
*
* @param alpha    input value
* @param x        input value
* @param y        input value
* @return         result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
*
* stdlib_complex128_t z1 = stdlib_complex128( 5.0, 3.0 );
* stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );
* stdlib_complex128_t z3 = stdlib_complex128( 7.0, -8.0 );
*
* stdlib_complex128_t out = stdlib_base_complex128_muladd( z1, z2, z3 );
*
* double re = stdlib_complex128_real( out );
* // returns -6.0
*
* double im = stdlib_complex128_imag( out );
* // returns -9.0
*/
stdlib_complex128_t stdlib_base_complex128_muladd( const stdlib_complex128_t alpha, const stdlib_complex128_t x, const stdlib_complex128_t y ) {
	double re1;
	double re2;
	double re3;
	double im1;
	double im2;
	double im3;
	double re;
	double im;

	stdlib_complex128_reim( alpha, &re1, &im1 );
	stdlib_complex128_reim( x, &re2, &im2 );
	stdlib_complex128_reim( y, &re3, &im3 );

	re = (re1*re2) - (im1*im2) + re3;
	im = (re1*im2) + (im1*re2) + im3;

	return stdlib_complex128( re, im );
}
