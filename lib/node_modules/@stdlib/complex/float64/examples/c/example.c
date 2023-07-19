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
#include <stdint.h>
#include <stdio.h>

/**
* Return the real component of a double-precision complex floating-point number.
*
* @param z    complex number
* @return     real component
*/
static double real( const stdlib_complex128_t z ) {
	stdlib_complex128_parts_t v;

	// Assign a double-precision complex floating-point number:
	v.value = z; // cppcheck-suppress unreadVariable

	// Extract the real component:
	double re = v.parts[ 0 ];

	return re;
}

/**
* Return the imaginary component of a double-precision complex floating-point number.
*
* @param z    complex number
* @return     imaginary component
*/
static double imag( const stdlib_complex128_t z ) {
	stdlib_complex128_parts_t v;

	// Assign a double-precision complex floating-point number:
	v.value = z; // cppcheck-suppress unreadVariable

	// Extract the imaginary component:
	double im = v.parts[ 1 ];

	return im;
}

int main( void ) {
	const stdlib_complex128_t x[] = {
		stdlib_complex128( 5.0, 2.0 ),
		stdlib_complex128( -2.0, 1.0 ),
		stdlib_complex128( 0.0, -0.0 ),
		stdlib_complex128( 0.0/0.0, 0.0/0.0 )
	};

	stdlib_complex128_t v;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		printf( "%lf + %lfi\n", real( v ), imag( v ) );
	}
}
