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

#include "stdlib/complex/float64/base/scale.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

/**
* Scales a double-precision complex floating-point number by a real-valued double-precision floating-point scalar constant.
*
* @param alpha   scalar constant
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );
*
* stdlib_complex128_t out = stdlib_base_complex128_scale( 5.0, z );
*
* double re = stdlib_complex128_real( out );
* // returns 25.0
*
* double im = stdlib_complex128_imag( out );
* // returns 15.0
*/
stdlib_complex128_t stdlib_base_complex128_scale( const double alpha, const stdlib_complex128_t z ) {
	double re;
	double im;

	stdlib_complex128_reim( z, &re, &im );
	return stdlib_complex128( re * alpha, im * alpha );
}
