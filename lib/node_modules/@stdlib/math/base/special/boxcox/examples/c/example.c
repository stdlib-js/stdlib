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


#include "stdlib/math/base/special/boxcox.h"
#include <stdio.h>

int main( void ) {
	const double x[] = { -1.0, 10.0, 1.0 };
	const double y[] = { -0.5, 5.0, 0.5 };

	double out;
	int i;
	int j;
	for ( i = 0; i < 3; i++ ) {
		for ( j = 0; j < 3; j++ ) {
			out = stdlib_base_boxcox( x[ i ], y[ j ] );
			printf ( "x: %lf, y: %lf, out: %lf\n", x[ i ], y[ j ], out );
		}
	}
}
