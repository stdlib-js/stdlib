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

#include "stdlib/complex/float32/base/identity.h"
#include <stdio.h>
#include <complex.h>

int main( void ) {
	float complex x[] = { 3.14f+1.0f*I, -3.14f-1.0f*I, 0.0f+0.0f*I, 0.0f/0.0f+0.0f/0.0f*I };

	float complex v;
	float complex y;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		y = stdlib_base_complex64_identity( v );
		printf( "f(%f + %f) = %f + %f\n", crealf( v ), cimagf( v ), crealf( y ), cimagf( y ) );
	}
}
