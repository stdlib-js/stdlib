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

#include "stdlib/math/base/special/nanmin.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { 1.0, 0.45, -0.89, 0.0 / 0.0, -0.78, -0.22, 0.66, 0.11, -0.55, 0.0 };
	const double y[] = { -0.22, 0.66, 0.0, -0.55, 0.33, 1.0, 0.0 / 0.0, 0.11, 0.45, -0.78 };

	double v;
	int i;
	for ( i = 0; i < 10; i++ ) {
		v = stdlib_base_nanmin( x[ i ], y[ i ] );
		printf( "x[ %d ]: %lf, y[ %d ]: %lf, nanmin( x[ %d ], y[ %d ] ): %lf\n", i, x[ i ], i, y[ i ], i, i, v );
	}
}
