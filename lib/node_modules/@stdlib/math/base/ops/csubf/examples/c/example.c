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

#include "stdlib/math/base/ops/csubf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"
#include <stdio.h>

int main( void ) {
	const stdlib_complex64_t x[] = {
		stdlib_complex64( 3.14f, 1.5f ),
		stdlib_complex64( -3.14f, 1.5f ),
		stdlib_complex64( 0.0f, -0.0f ),
		stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
	};

	stdlib_complex64_t v;
	stdlib_complex64_t y;
	float re;
	float im;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		stdlib_reimf( v, &re, &im );
		printf( "z = %f + %fi\n", re, im );

		y = stdlib_base_csubf( v, v );
		stdlib_reimf( y, &re, &im );
		printf( "csubf(z, z) = %f + %fi\n", re, im );
	}
}
