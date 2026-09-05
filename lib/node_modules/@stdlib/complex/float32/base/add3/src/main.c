/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/complex/float32/base/add3.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Computes the sum of three single-precision complex floating-point numbers.
*
* @param z1       first input value
* @param z2       second input value
* @param z3       third input value
* @return         result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );
*
* stdlib_complex64_t out = stdlib_base_complex64_add3( z, z, z );
*
* float re = stdlib_complex64_real( out );
* // returns 9.0f
*
* float im = stdlib_complex64_imag( out );
* // returns -6.0f
*/
stdlib_complex64_t stdlib_base_complex64_add3( const stdlib_complex64_t z1, const stdlib_complex64_t z2, const stdlib_complex64_t z3 ) {
	float re1;
	float im1;
	float re2;
	float im2;
	float re3;
	float im3;
	float re;
	float im;

	stdlib_complex64_reim( z1, &re1, &im1 );
	stdlib_complex64_reim( z2, &re2, &im2 );
	stdlib_complex64_reim( z3, &re3, &im3 );

	re = re1 + re2 + re3;
	im = im1 + im2 + im3;

	return stdlib_complex64( re, im );
}
