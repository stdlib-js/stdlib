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

#include "stdlib/math/base/special/cfloornf.h"
#include "stdlib/math/base/special/floornf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdint.h>

/**
* Rounds each component of a single-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.
*
* @param z       input value
* @param n       integer power of 10
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( -3.141592653589793f, 3.141592653589793f );
*
* stdlib_complex64_t out = stdlib_base_cfloornf( z, -2 );
*
* float re = stdlib_complex64_real( out );
* // returns -3.15f
*
* float im = stdlib_complex64_imag( out );
* // returns 3.14f
*/
stdlib_complex64_t stdlib_base_cfloornf( const stdlib_complex64_t z, const int32_t n ) {
	float re;
	float im;

	stdlib_complex64_reim( z, &re, &im );

	re = stdlib_base_floornf( re, n );
	im = stdlib_base_floornf( im, n );
	return stdlib_complex64( re, im );
}
