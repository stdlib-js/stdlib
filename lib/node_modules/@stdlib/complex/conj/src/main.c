/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

#include "stdlib/complex/conj.h"
#include "stdlib/complex/float64.h"

/**
* Returns the complex conjugate of a double-precision complex floating-point number.
*
* @param z     double-precision complex floating-point number
* @return      complex conjugate
*
* @example
* #include "stdlib/complex/float64.h"
* #include "stdlib/complex/real.h"
* #include "stdlib/complex/imag.h"
*
* stdlib_complex128_t z = stdlib_complex128( 5.0, 2.0 );
*
* // ...
*
* stdlib_complex128_t v = stdlib_conj( z );
*
* double re = stdlib_real( v );
* // returns 5.0
*
* double im = stdlib_imag( v );
* // returns -2.0
*/
stdlib_complex128_t stdlib_conj( const stdlib_complex128_t z ) {
	stdlib_complex128_parts_t v;
	v.value = z; // cppcheck-suppress unreadVariable
	return stdlib_complex128( v.parts[ 0 ], -v.parts[ 1 ] );
}
