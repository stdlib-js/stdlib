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

#include "stdlib/math/base/special/cphase.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <math.h>

/**
* Computes the argument of a complex double-precision complex floating-point number in radians.
*
* @param z       input value
* @return        argument
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 5.0, 3.0 );
* double out = stdlib_base_cphase( z );
* // returns ~0.5404
*/
double stdlib_base_cphase( const stdlib_complex128_t z ) {
	double re;
	double im;

	stdlib_complex128_reim( z, &re, &im );
	return atan2( im, re ); // TODO: replace with stdlib function once available
}
