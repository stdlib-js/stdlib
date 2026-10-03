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

#include "stdlib/math/base/special/kernel_betainc.h"
#include "stdlib/random/base/randu.h"
#include <stdio.h>
#include <stdint.h>
#include <stdbool.h>

int main( void ) {
	struct BasePRNGObject *obj = stdlib_base_random_randu_allocate( 0 );
	double deriv;
	double out;
	int32_t i;
	double x;
	double a;
	double b;

	for ( i = 0; i < 100; i++ ) {
		x = stdlib_base_random_randu( obj );
		a = stdlib_base_random_randu( obj ) * 10.0;
		b = stdlib_base_random_randu( obj ) * 10.0;
		stdlib_base_kernel_betainc( x, a, b, true, false, &out, &deriv );
		printf( "x: %lf, a: %lf, b: %lf, f(x,a,b): %lf, f^1(x,a,b): %lf\n", x, a, b, out, deriv );
	}

	stdlib_base_random_randu_free( obj );
}
