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
#include <stdint.h>
#include <stdio.h>

/**
* Return the real component of a single-precision complex floating-point number.
*
* @param z    complex number
* @return     real component
*/
static float real( const stdlib_complex64_t z ) {
	stdlib_complex64_parts_t v;

	// Assign a single-precision complex floating-point number:
	v.value = z; // cppcheck-suppress unreadVariable

	// Extract the real component:
	float re = v.parts[ 0 ];

	return re;
}

/**
* Return the imaginary component of a single-precision complex floating-point number.
*
* @param z    complex number
* @return     imaginary component
*/
static float imag( const stdlib_complex64_t z ) {
	stdlib_complex64_parts_t v;

	// Assign a single-precision complex floating-point number:
	v.value = z; // cppcheck-suppress unreadVariable

	// Extract the imaginary component:
	float im = v.parts[ 1 ];

	return im;
}

int main( void ) {
	stdlib_complex64_t x[] = {
		stdlib_complex64( 5.0f, 2.0f ),
		stdlib_complex64( -2.0f, 1.0f ),
		stdlib_complex64( 0.0f, -0.0f ),
		stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
	};

	stdlib_complex64_t v;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		printf( "%f + %fi\n", real( v ), imag( v ) );
	}
}
