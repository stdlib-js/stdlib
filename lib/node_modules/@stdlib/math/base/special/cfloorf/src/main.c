/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/cfloorf.h"
#include "stdlib/math/base/special/floorf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"

/**
* Rounds each component of a single-precision complex floating-point number toward negative infinity.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float32/ctor.h"
* #include "stdlib/complex/float32/real.h"
* #include "stdlib/complex/float32/imag.h"
*
* stdlib_complex64_t z = stdlib_complex64( 3.5f, -2.5f );
*
* stdlib_complex64_t out = stdlib_base_cfloorf( z );
*
* float re = stdlib_complex64_real( out );
* // returns 3.0f
*
* float im = stdlib_complex64_imag( out );
* // returns -3.0f
*/
stdlib_complex64_t stdlib_base_cfloorf( const stdlib_complex64_t z ) {
	float re;
	float im;

	stdlib_complex64_reim( z, &re, &im );

	re = stdlib_base_floorf( re );
	im = stdlib_base_floorf( im );
	return stdlib_complex64( re, im );
}
