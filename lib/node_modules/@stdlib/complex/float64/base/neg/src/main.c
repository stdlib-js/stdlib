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

#include "stdlib/complex/float64/base/neg.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"

/**
* Negates a double-precision complex floating-point number.
*
* @param z        input value
* @return         result
*
* @example
* #include "stdlib/complex/float64/ctor.h"
* #include "stdlib/complex/float64/real.h"
* #include "stdlib/complex/float64/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 3.0, -2.0 );
*
* stdlib_complex128_t out = stdlib_base_complex128_neg( z );
*
* double re = stdlib_complex128_real( out );
* // returns -3.0
*
* double im = stdlib_complex128_imag( out );
* // returns 2.0
*/
stdlib_complex128_t stdlib_base_complex128_neg( const stdlib_complex128_t z ) {
	double re;
	double im;
	stdlib_complex128_reim( z, &re, &im );
	return stdlib_complex128( -re, -im );
}
