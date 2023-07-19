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

#include "stdlib/strided/base/cmap.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>
#include <complex.h>

// Define a callback:
static float complex scale( const float complex x ) {
	float re = crealf( x );
	float im = cimagf( x );
	return ( re+10.0f ) + ( im+10.0f )*I;
}

int main( void ) {
	// Create an input strided array:
	float complex X[] = { 1.0+1.0*I, 2.0+2.0*I, 3.0+3.0*I, 4.0+4.0*I, 5.0+5.0*I, 6.0+6.0*I };

	// Create an output strided array:
	float complex Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

	// Specify the number of elements:
	int64_t N = 6;

	// Define the strides:
	int64_t strideX = 1;
	int64_t strideY = -1;

	// Apply the callback:
	stdlib_strided_cmap( N, X, strideX, Y, strideY, scale );

	// Print the results:
	for ( int64_t i = 0; i < N; i++ ) {
		printf( "Y[ %"PRId64" ] = %f + %fi\n", i, creal( Y[i] ), cimag( Y[i] ) );
	}
}
