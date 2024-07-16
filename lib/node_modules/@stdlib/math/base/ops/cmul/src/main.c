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

#include "stdlib/math/base/ops/cmul.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

/**
* Multiplies two double-precision complex floating-point numbers.
*
* @param z1       input value
* @param z2       input value
* @return         result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z1 = stdlib_complex128( 5.0, 3.0 );
* stdlib_complex128_t z2 = stdlib_complex128( -2.0, 1.0 );
*
* stdlib_complex128_t out = stdlib_base_cmul( z1, z2 );
*
* double re = stdlib_real( out );
* // returns -13.0
*
* double im = stdlib_imag( out );
* // returns -1.0
*/
stdlib_complex128_t stdlib_base_cmul( const stdlib_complex128_t z1, const stdlib_complex128_t z2 ) {
	double re1;
	double re2;
	double im1;
	double im2;
	double re;
	double im;

	stdlib_complex128_reim( z1, &re1, &im1 );
	stdlib_complex128_reim( z2, &re2, &im2 );

	re = (re1*re2) - (im1*im2);
	im = (re1*im2) + (im1*re2);

	return stdlib_complex128( re, im );
}
