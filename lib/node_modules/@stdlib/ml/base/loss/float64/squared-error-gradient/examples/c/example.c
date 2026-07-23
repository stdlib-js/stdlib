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

#include "stdlib/ml/base/loss/float64/squared_error_gradient.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { -10.0, -9.56, -8.67, -7.78, -6.89, 6.89, 7.78, 8.67, 9.56, 10.0 };
	const double y[] = { -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0 };
	const double p[] = { -5.0, -3.89, -2.78, -1.67, -0.56, 0.56, 1.67, 2.78, 3.89, 5.0 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_float64_squared_error_gradient( x[ i ], y[ i ], p[ i ] );
		printf( "squaredErrorGradient(%lf, %lf, %lf) = %lf\n", x[ i ], y[ i ], p[ i ], v );
	}
}
