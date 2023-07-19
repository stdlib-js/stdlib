/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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


#include "stdlib/math/base/special/ldexp.h"
#include "stdlib/math/base/special/frexp.h"
#include <stdlib.h>
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>
#include <math.h>

// TODO: replace use of `pow` with stdlib_base_pow()

static double rand_double() {
	int r = rand();
	return (double)r / ( (double)RAND_MAX + 1.0 );
}

int main( void ) {
	double sign;
    double frac;
    int32_t exp;
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
    	if ( rand_double() < 0.5 ) {
    		sign = -1.0;
    	} else {
    		sign = 1.0;
    	}
    	// Generate a random number:
        frac = rand_double() * 10.0;
        exp = (int32_t)( rand_double()*616.0 ) - 308;
        x = sign * frac * pow( 10.0, exp );

        // Break the number into a normalized fraction and an integer power of two:
        stdlib_base_frexp( x, &frac, &exp );

        // Reconstitute the original number:
        v = stdlib_base_ldexp( frac, exp );

        printf( "%e = %lf * 2^%" PRId32 " = %e\n", x, frac, exp, v );
    }
}
