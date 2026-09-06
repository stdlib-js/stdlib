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

#include "stdlib/ml/base/loss/float64/epsilon_insensitive_gradient.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
	const double e[] = { 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };
	const double y[] = { -9.9, -7.7, -5.5, -3.3, -1.1, 1.1, 3.3, 5.5, 7.7, 9.9 };
	const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_float64_epsilon_insensitive_gradient( x[ i ], e[ i ], y[ i ], p[ i ] );
		printf( "epsilonInsensitiveGradient(%lf, %lf, %lf, %lf) = %lf\n", x[ i ], e[ i ], y[ i ], p[ i ], v );
	}
}
