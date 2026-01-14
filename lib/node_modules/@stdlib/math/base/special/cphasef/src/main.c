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

#include "stdlib/math/base/special/cphasef.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include "stdlib/math/base/special/atan2f.h"

/**
* Computes the argument of a complex single-precision complex floating-point number in radians.
*
* @param z       input value
* @return        argument
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 3.0f );
* float out = stdlib_base_cphasef( z );
* // returns ~0.5404f
*/
float stdlib_base_cphasef( const stdlib_complex64_t z ) {
	float re;
	float im;

	stdlib_complex64_reim( z, &re, &im );
	return stdlib_base_atan2f( im, re );
}
