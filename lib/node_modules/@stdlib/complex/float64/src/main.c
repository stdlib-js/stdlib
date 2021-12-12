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

#include "stdlib/complex/float64.h"

/**
* Returns a double-precision complex floating-point number.
*
* @param real     real component
* @param imag     imaginary component
* @return         double-precision complex floating-point number
*
* @example
* stdlib_complex128_t z = stdlib_complex128( 5.0, 2.0 );
*/
stdlib_complex128_t stdlib_complex128( const double real, const double imag ) {
	stdlib_complex128_parts_t z;
	z.parts[ 0 ] = real;
	z.parts[ 1 ] = imag; // cppcheck-suppress unreadVariable
	return z.value;
}

