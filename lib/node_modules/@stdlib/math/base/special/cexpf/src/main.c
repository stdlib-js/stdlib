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

#include "stdlib/math/base/special/cexpf.h"
#include "stdlib/math/base/special/expf.h"
#include "stdlib/math/base/special/sincosf.h"
#include "stdlib/math/base/assert/is_nanf.h"
#include "stdlib/math/base/assert/is_infinitef.h"
#include "stdlib/math/base/special/copysignf.h"
#include "stdlib/constants/float32/pinf.h"
#include "stdlib/constants/float32/ninf.h"
#include "stdlib/constants/float32/nan.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Evaluates the exponential function of a single-precision complex floating-point number.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 0.0f, 0.0f );
* stdlib_complex64_t out = stdlib_base_cexpf( z );
*
* float re = stdlib_complex64_real( out );
* // returns 1.0f
*
* float im = stdlib_complex64_imag( out );
* // returns 0.0f
*/
stdlib_complex64_t stdlib_base_cexpf( const stdlib_complex64_t z ) {
	float re;
	float im;
	float e;

	stdlib_complex64_reim( z, &re, &im );

	if ( stdlib_base_is_nanf( re ) ) {
		re = STDLIB_CONSTANT_FLOAT32_NAN;
		im = ( im == 0.0f ) ? im : re;
	} else if ( stdlib_base_is_infinitef( im ) ) {
		if ( re == STDLIB_CONSTANT_FLOAT32_PINF ) {
			re = -re;
			im = STDLIB_CONSTANT_FLOAT32_NAN;
		} else if ( re == STDLIB_CONSTANT_FLOAT32_NINF ) {
			re = -0.0f;
			im = stdlib_base_copysignf( 0.0f, im );
		} else {
			re = STDLIB_CONSTANT_FLOAT32_NAN;
			im = STDLIB_CONSTANT_FLOAT32_NAN;
		}
	} else {
		e = stdlib_base_expf( re );
		if ( im == 0.0f ) {
			re = e;
		} else {
			stdlib_base_sincosf( im, &im, &re );
			re *= e;
			im *= e;
		}
	}
	return stdlib_complex64( re, im );
}
