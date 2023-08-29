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

#include "stdlib/math/base/special/csignum.h"
#include "stdlib/math/base/special/cabs.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"

/**
* Evaluates the signum function of a double-precision floating-point complex number.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( -4.2, 5.5 );
*
* stdlib_complex128_t out = stdlib_base_csignum( z );
*
* double re = stdlib_real( out );
* // returns -0.6069136033622302
*
* double im = stdlib_imag( out );
* // returns 0.79476781392673
*/
stdlib_complex128_t stdlib_base_csignum( const stdlib_complex128_t z ) {
	double re;
	double im;
	double az;

	az = stdlib_base_cabs( z );
	if ( az == 0.0 ) {
		return z;
	}
	stdlib_reim( z, &re, &im );
	re = re / az;
	im = im / az;
	return stdlib_complex128( re, im );
}
