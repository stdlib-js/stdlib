
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

#include "stdlib/math/base/special/cpolar.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/reim.h"
#include <stdio.h>

int main( void ) {
	const stdlib_complex128_t x[] = {
		stdlib_complex128( 3.14, 1.0 ),
		stdlib_complex128( -3.14, -1.0 ),
		stdlib_complex128( 0.0, 0.0 ),
		stdlib_complex128( 0.0/0.0, 0.0/0.0 )
	};

	double cphase;
	double cabs;
	double re;
	double im;
	int i;
	for ( i = 0; i < 12; i++ ) {
		stdlib_base_cpolar( x[i], &cabs, &cphase );
		stdlib_reim( x[i], &re, &im );
		printf( "cpolar(%lf + %lfi) => cabs: %lf, cphase: %lf\n", re, im, cabs, cphase );
	}
}
