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

#include "stdlib/math/base/special/cfloor.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"

/**
* Rounds a double-precision complex floating-point number toward negative infinity.
*
* @param z       input value
* @return        result
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 3.5, -2.5 );
*
* stdlib_complex128_t out = stdlib_base_cfloor( z );
*
* double re = stdlib_real( out );
* // returns 3.0
*
* double im = stdlib_imag( out );
* // returns -3.0
*/
stdlib_complex128_t stdlib_base_cfloor( const stdlib_complex128_t z ) {
	double re;
	double im;

	stdlib_reim( z, &re, &im );

	re = stdlib_base_floor( re );
	im = stdlib_base_floor( im );
	return stdlib_complex128( re, im );
}
