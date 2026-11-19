/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

#include "stdlib/math/base/special/kernel_betaincinv.h"
#include "stdlib/constants/float64/eps.h"
#include "stdlib/random/base/randu.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
	struct BasePRNGObject *obj = stdlib_base_random_randu_allocate( 0 );
	double out1;
	double out2;
	int32_t i;
	double p;
	double a;
	double b;

	for ( i = 0; i < 100; i++ ) {
		p = stdlib_base_random_randu( obj );
		a = ( stdlib_base_random_randu( obj ) * 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
		b = ( stdlib_base_random_randu( obj ) * 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
		stdlib_base_kernel_betaincinv( a, b, p, 1.0-p, &out1, &out2 );
		printf( "p: %lf, a: %lf, b: %lf, y: %lf, 1-y: %lf\n", p, a, b, out1, out2 );
	}

	stdlib_base_random_randu_free( obj );
}
