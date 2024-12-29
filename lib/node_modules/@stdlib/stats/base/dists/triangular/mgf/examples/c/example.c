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

#include "stdlib/stats/base/dists/triangular/mgf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v*(max-min) );
}

int main( void ) {
	double a;
	double b;
	double c;
	double t;
	double y;
	int i;

	for ( i = 0; i < 25; i++ ) {
		t = random_uniform( 0.0, 5.0 );
		a = random_uniform( 0.0, 10.0 );
		b = random_uniform( a, 40.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
		c = random_uniform( a, b );
		y = stdlib_base_dists_triangular_mgf( t, a, b, c );
		printf( "t: %lf, a: %lf, b: %lf, c: %lf, M_X(t;a,b,c): %lf\n", t, a, b, c, y );
	}
}
