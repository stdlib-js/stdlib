/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/cexp.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/math/base/special/sincos.h"
#include "stdlib/math/base/assert/is_nan.h"
#include "stdlib/math/base/assert/is_infinite.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/copysign.h"
#include "stdlib/constants/float64/ninf.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

/**
* Evaluates the exponential function of a double-precision complex floating-point number.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 0.0, 0.0 );
* stdlib_complex128_t out = stdlib_base_cexp( z );
*
* double re = stdlib_complex128_real( out );
* // returns 1.0
*
* double im = stdlib_complex128_imag( out );
* // returns 0.0
*/
stdlib_complex128_t stdlib_base_cexp( const stdlib_complex128_t z ) {
	double re;
	double im;
	double e;

	stdlib_complex128_reim( z, &re, &im );

	if ( stdlib_base_is_nan( re ) ) {
		re = 0.0 / 0.0; // NaN
		im = ( im == 0.0 ) ? im : re;
	} else if ( stdlib_base_is_infinite( im ) ) {
		if ( re == STDLIB_CONSTANT_FLOAT64_PINF ) {
			re = -re;
			im = 0.0 / 0.0; // NaN
		} else if ( re == STDLIB_CONSTANT_FLOAT64_NINF ) {
			re = -0.0;
			im = stdlib_base_copysign( 0.0, im );
		} else {
			re = 0.0 / 0.0; // NaN
			im = 0.0 / 0.0; // NaN
		}
	} else {
		e = stdlib_base_exp( re );
		if ( im == 0.0 ) {
			re = e;
		} else {
			stdlib_base_sincos( im, &im, &re );
			re *= e;
			im *= e;
		}
	}
	return stdlib_complex128( re, im );
}
