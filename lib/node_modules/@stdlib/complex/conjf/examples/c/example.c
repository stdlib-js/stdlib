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

#include "stdlib/complex/conjf.h"
#include "stdlib/complex/realf.h"
#include "stdlib/complex/imagf.h"
#include "stdlib/complex/float32.h"
#include <stdio.h>

int main( void ) {
	const stdlib_complex64_t x[] = {
		stdlib_complex64( 5.0f, 2.0f ),
		stdlib_complex64( -2.0f, 1.0f ),
		stdlib_complex64( 0.0f, -0.0f ),
		stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
	};

	stdlib_complex64_t z;
	stdlib_complex64_t v;
	int i;
	for ( i = 0; i < 4; i++ ) {
		z = x[ i ];
		v = stdlib_conjf( z );
		printf( "conj(%f + %fi) = %f + %fi\n", stdlib_realf( z ), stdlib_imagf( z ), stdlib_realf( v ), stdlib_imagf( v ) );
	}
}
