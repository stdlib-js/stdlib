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

#include "stdlib/complex/float32.h"

/**
* Returns a single-precision complex floating-point number.
*
* @param real     real component
* @param imag     imaginary component
* @return         single-precision complex floating-point number
*
* @example
* stdlib_complex64_t z = stdlib_complex64( 5.0f, 2.0f );
*/
stdlib_complex64_t stdlib_complex64( const float real, const float imag ) {
	stdlib_complex64_parts_t z;
	z.parts[ 0 ] = real;
	z.parts[ 1 ] = imag; // cppcheck-suppress unreadVariable
	return z.value;
}

