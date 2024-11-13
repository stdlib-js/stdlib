/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

#include "stdlib/math/base/special/croundf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
	const stdlib_complex64_t x[] = {
		stdlib_complex64( 3.14, 1.5 ),
		stdlib_complex64( -3.14, -1.5 ),
		stdlib_complex64( 0.0, 0.0 ),
		stdlib_complex64( 0.0/0.0, 0.0/0.0 )
	};

	stdlib_complex64_t v;
	stdlib_complex64_t y;
	float re1;
	float im1;
	float re2;
	float im2;
	int i;
	for ( i = 0; i < 4; i++ ) {
		v = x[ i ];
		y = stdlib_base_croundf( v );
		stdlib_complex64_reim( v, &re1, &im1 );
		stdlib_complex64_reim( y, &re2, &im2 );
		printf( "croundf(%f + %fi) = %f + %fi\n", re1, im1, re2, im2 );
	}
}
