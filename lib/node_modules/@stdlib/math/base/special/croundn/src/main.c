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

#include "stdlib/math/base/special/croundn.h"
#include "stdlib/math/base/special/roundn.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"

/**
* Rounds each component of a double-precision complex floating-point number to the nearest multiple of `10^n`.
*
* @param z       input value
* @param n       integer power of 10
* @return        result
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( -3.141592653589793, 3.141592653589793 );
*
* stdlib_complex128_t out = stdlib_base_croundn( z, -2 );
*
* double re = stdlib_real( out );
* // returns 3.14
*
* double im = stdlib_imag( out );
* // returns -3.14
*/
stdlib_complex128_t stdlib_base_croundn( const stdlib_complex128_t z, const int32_t n ) {
	double re;
	double im;

	stdlib_reim( z, &re, &im );

	re = stdlib_base_roundn( re, n );
	im = stdlib_base_roundn( im, n );
	return stdlib_complex128( re, im );
}
