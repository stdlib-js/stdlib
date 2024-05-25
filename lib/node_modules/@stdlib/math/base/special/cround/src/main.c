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

#include "stdlib/math/base/special/cround.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/reim.h"
#include <math.h>

/**
* Rounds each component of a double-precision complex floating-point number to the nearest integer.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( -4.2, 5.5 );
*
* stdlib_complex128_t out = stdlib_base_cround( z );
*
* double re = stdlib_real( out );
* // returns -5.0
*
* double im = stdlib_imag( out );
* // returns 6.0
*/
stdlib_complex128_t stdlib_base_cround( const stdlib_complex128_t z ) {
	double re;
	double im;

	stdlib_reim( z, &re, &im );

	re = round( re ); // TODO: replace with stdlib function once available
	im = round( im ); // TODO: replace with stdlib function once available
	return stdlib_complex128( re, im );
}
